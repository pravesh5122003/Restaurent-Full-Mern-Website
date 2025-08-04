import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    items: [
      {
        product: { type: String, required: true, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: false, ref: "Address" }, // ✅ make optional

    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
    // ✅ Add orderDate field
    orderDate: {
      type: Date,
      default: Date.now,
    },
    
    // status: { type: String, default: "Order Placed" },
    paymentType: { type: String, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    tableNo: { type: String },   // Add this line
phoneNo: { type: String },   // And this one

   },
   { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;


