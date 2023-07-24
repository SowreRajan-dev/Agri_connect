import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import OrderComponent from "../components/OrderComponent/OrderComponent";
import axios from "axios";
import { useState } from "react";

const Orders = () => {
  const cart = useSelector((state) => state.cart);
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

  useEffect(() => {
    if (orderPurchased.length > 0) {
      const allProductsBrought = orderPurchased.reduce((accumulator, order) => {
        return accumulator.concat(order.productsBrought);
      }, []);

      setOrdersBrought(allProductsBrought);
    }
  }, [orderPurchased]);
  return (
    <>
      <Navbar />
      {orderPurchased.length > 0 && (
        <OrderComponent
          orders={ordersBrought}
          user={user.user}
          orderStatus={orderStatus}
        />
      )}
    </>
  );
};

export default React.memo(Orders);
