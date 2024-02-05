import React from "react";

function OrderComponent({ product, index, orderStatus }) {
  return (
    <div
      key={index}
      className="w-[400px] flex items-center justify-around  p-5 bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <img
        src={product.image}
        className="w-32 h-32 rounded-md"
        alt="products"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">
          <b>Order Status:</b> {orderStatus}
        </p>
        <p className="text-gray-600 mb-4">
          <b>Quantity:</b> {product.quantity}
        </p>
        <p className="text-gray-600 mb-4">
          <b>Total Price:</b> ₹{product.price}
        </p>
      </div>
    </div>
  );
}

export default React.memo(OrderComponent);
