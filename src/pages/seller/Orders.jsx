import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

import toast from "react-hot-toast";
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { axios } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");

      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders available yet.</p>
      )}

      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
        >
          <div className="flex gap-5">
            {order.items && order.items.length > 0 ? (
              <>
                <img
                  className="w-12 h-12 object-cover opacity-60"
                  src={`http://localhost:4000/images/${
                    order.items[0]?.product?.image?.[0] ||
                    "https://via.placeholder.com/50"
                  }`}
                  alt="Product"
                />

                <div>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col justify-center">
                      <p className="font-medium">
                        {item.product?.name || "Unnamed Product"}{" "}
                        <span
                          className={`text-indigo-500 ${
                            item.quantity < 2 ? "hidden" : ""
                          }`}
                        >
                          x {item.quantity}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-400 italic">
                No items in this order
              </p>
            )}
          </div>

          <div className="text-sm">
          {order.paymentType === "Dine In" ? (
  <>
    <p className="font-medium mb-1">
      Name: {order.userId?.name || "N/A"}
    </p>
    <p>Phone: {order.userId?.phone || "N/A"}</p>
    <p>Table No: {order.tableNo || "N/A"}</p>
  </>

  ) : order.address ? (
    <>
      <p className="font-medium mb-1">
        {order.address.firstName || ""} {order.address.lastName || ""}
      </p>
      <p>
        {order.address.street || ""}, {order.address.city || ""},{" "}
        {order.address.state || ""}, {order.address.zipcode || ""},{" "}
        {order.address.country || ""}
      </p>
      <p>Phone: {order.address.phone || "N/A"}</p>
    </>
  ) : (
    <p className="text-red-500">Address not available</p>
  )}
</div>


          <p className="font-medium text-base my-auto text-black/70">
          ₹{order.amount}
          </p>

          <div className="flex flex-col text-sm">
  <p>Method: {order.paymentType}</p>
  <p>Date: {formatDate(order.orderDate)}</p>
  <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>

  {/* ✅ Show current status */}
  <p className="mt-2 font-medium text-black">Status: {order.status}</p>

  {/* ✅ Dropdown to update status */}
  <select
    value={order.status}
    onChange={async (e) => {
      try {
        const newStatus = e.target.value;
        await axios.patch(`/api/order/status/${order._id}`, { status: newStatus });
        toast.success("Status updated");
        fetchOrders(); // refresh list after update
      } catch (err) {
        toast.error("Failed to update status");
      }
    }}
    className="mt-1 border px-2 py-1 rounded"
  >
    <option value="Preparing">Pending</option>
    <option value="Delivered">Delivered</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</div>

        </div>
      ))}
    </div>
  );
};

export default Orders;
