import Head from "next/head";
import Image from "next/image";
import ConnectTogether from "../components/ConnectTogether/ConnectTogether";
import FarmingContent from "../components/FarmingContent/FarmingContent";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ConnectTogether />
      <FarmingContent />
    </div>
  );
}
