import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import OrderComponent from "../components/OrderComponent/OrderComponent";
import axios from "axios";
import { useState } from "react";

const Orders = () => {
  const user = useSelector((state) => state.user);
  const [orderPurchased, setOrderPurchased] = useState([]);
  const [ordersBrought, setOrdersBrought] = useState([]);
  const [orderStatus, setOrderStatus] = useState("pending");
  async function fetchOrderPurchased(user) {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/users/purchase?userId=${user.user.id}&isAuthenticated=${user.isLoggedIn}`
      );
      setOrderPurchased(data.orders);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  useEffect(() => {
    fetchOrderPurchased(user);
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      </div>
      <div className="p-5">
        {orderPurchased.length > 0 &&
          orderPurchased.map((order, index) => (
            <>
              <div key={index} className="p-5">
                <p className="font-poppins text-lg">
                  Ordered product-{" "}
                  {new Date(order?.purchasedAt).toLocaleString() ===
                  new Date().toLocaleString()
                    ? "Today"
                    : new Date(order?.purchasedAt).toLocaleString()}
                </p>
                <div className="flex items-center justify-around flex-wrap gap-4">
                  {order.productsBrought.map((product) => (
                    <OrderComponent
                      product={product}
                      index={index}
                      orderStatus={"pending"}
                      key={product.id}
                    />
                  ))}
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default React.memo(Orders);
