import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import Stripe from "stripe"; // ✅ FIXED: Correct import
import User from "../models/user.model.js";

// ✅ OUTSIDE OF placeOrderCOD
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: false }],
    })
      .populate("items.product")
      .populate("address") // 👈 This is critical
      .populate("userId", "name phone email") // ✅ this line is NEW
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });

  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Place order COD: /api/order/cod
export const placeOrderCOD = async (req, res) => {   
  try {
    const userId = req.user;
    const orders = await Order.find().populate("userId");// added new line recentlu
    const { items, address } = req.body;

    if (!items || !address) {
      return res
        .status(400)
        .json({ message: "Items and address are required", success: false });
    }

    // calculate amount using items
    let amount = await items.reduce(async (accPromise, item) => {
      const acc = await accPromise;
      const product = await Product.findById(item.product);
      return acc + product.offerPrice * item.quantity;
    }, Promise.resolve(0));

    // Add tax charge 2%
    amount += Math.floor((amount * 2) / 100);

    await Order.create({
      userId,
      items,
      address,
      amount,
      paymentType: "COD",
      isPaid: false,
      status: "Pending", // 👈 Add this line
      orderDate: new Date(), // ✅ Add this
    });

    res
      .status(201)
      .json({ message: "Order placed successfully", success: true });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Dine-In Order: /api/order/dinein
export const placeDineInOrder = async (req, res) => {
  try {
    const userId = req.user;
    const { items, tableNo, phoneNo,name } = req.body;

    if (!items || !tableNo || !phoneNo) {
      return res
        .status(400)
        .json({ message: "Items, table number, and phone number are required", success: false });
    }

    // Calculate total price
    let amount = await items.reduce(async (accPromise, item) => {
      const acc = await accPromise;
      const product = await Product.findById(item.product);
      return acc + product.offerPrice * item.quantity;
    }, Promise.resolve(0));

    // Add 2% tax
    amount += Math.floor((amount * 2) / 100);

    // Save order
    await Order.create({
      userId,
      items,
      amount,
      tableNo,
      phoneNo,
      name, // ✅ Save the name
      paymentType: "Dine In",
      isPaid: false,
      status: "Pending",
      orderDate: new Date(),
    });

    res.status(201).json({ message: "Dine-In Order placed successfully", success: true });

  } catch (error) {
    console.error("Error placing dine-in order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Place order Stripe: /api/order/stripe
export const placeOrderStripe = async (req, res) => {
  try {
    const userId = req.user;
    const { items, address } = req.body;
    const { origin } = req.headers;

    if (!items || !address) {
      return res
        .status(400)
        .json({ message: "Items and address are required", success: false });
    }

    let productData = [];

    // calculate amount using items
    let amount = await items.reduce(async (accPromise, item) => {
      const acc = await accPromise;
      const product = await Product.findById(item.product);
      productData.push({
        name: product.name,
        price: product.offerPrice,
        quantity: item.quantity,
      });
      return acc + product.offerPrice * item.quantity;
    }, Promise.resolve(0));

    // Add tax charge 2%
    amount += Math.floor((amount * 2) / 100);

    const order = await Order.create({
      userId,
      items,
      address,
      amount,
      paymentType: "Online",
      isPaid: false,
      status: "Pending", // 👈 Add this line
      orderDate: new Date(), // ✅ Add this
    });

    // ✅ FIXED: Correct Stripe initialization
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create line items for Stripe
    const line_items = productData.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.floor(item.price + item.price * 0.02) * 100,
      },
      quantity: item.quantity,
    }));

    // Create Stripe session
    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader?next=my-orders`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: order._id.toString(),
        userId,
      },
    });

    res.status(201).json({ url: session.url, success: true });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Stripe webhooks to verify payments Action : / stripe
export const stripeWebhooks = async (request, response)=>{
  //String Gateway Initilize
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers["stripe-signature"];
  let event;
  try{
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET 
    );
  } catch (error) {
    response.status(400).send("Webhook Error: ${error.message}")
  }

  //Handle teh event
  switch (event.type) {
    case "payment_intent.succeeded":{
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      // Getting Session metadata
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId, userId } = session.data[0].metadata;

      //Mark payment as paid
      await Order.findByIdAndUpdate(orderId, {isPaid: true})
      //Clear user cart
      await User.findByIdAndUpdate(userId, {cartItems: {}});
      break;
    }
    case "payment_intent.succeeded":{
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      // Getting Session metadata
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId } = session.data[0].metadata;
      await Order.findByIdAndDelete(orderId);
      break;
    }
    default:
      console.error("Unhandled event type ${event.type}")
      break;
  }
  response.json({received: true});
}


// Get order details for individual user: /api/order/user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user;

    const orders = await Order.find({
      userId,
      $or: [
        { paymentType: "COD" },
        { isPaid: true },
        { paymentType: "Dine In" }, // ✅ include Dine-In orders
      ],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });

  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// PATCH: Update order status manually by seller: /api/order/status/:orderId
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["Order Placed", "Processing", "Out for Delivery", "Delivered", "Cancelled"];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status value" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, message: "Order status updated", order: updatedOrder });

  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

