import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

function OrderComponent({ orders, user, orderStatus }) {
  const [productOrder, setProductOrder] = useState({});
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex justify-evenly p-4">
                <img src={order.image} className="w-32 h-32" alt="products" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{order.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Order Status: {orderStatus}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <b>Quantity:</b> {order.quantity}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <b>Price:</b> ₹{order.price}
                  </p>
                </div>
                {/* Add more order details as needed */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600">No orders found.</p>
      )}
    </div>
  );
}

export default React.memo(OrderComponent);
