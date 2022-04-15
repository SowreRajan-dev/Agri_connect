import Head from "next/head";
import Image from "next/image";
import ConnectTogether from "../components/ConnectTogether/ConnectTogether";
import FarmingContent from "../components/FarmingContent/FarmingContent";
import FarmToHome from "../components/FarmToHome/FarmToHome";
import Navbar from "../components/Navbar/Navbar";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import OrdersLocation from "../components/OrdersLocation/OrdersLocation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ConnectTogether />
      <FarmingContent />
      <FarmToHome />
      <OrdersLocation />
      <NewsFeed />
    </div>
  );
}
