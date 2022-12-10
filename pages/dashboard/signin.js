import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/signinDashboard.module.css";
import { ToastContainer, toast } from "react-toastify";
import ConnectTogether from "../../components/ConnectTogether/ConnectTogether";

function Signin() {
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Link href="/" passHref>
        <div>
          <Image
            src="/Images/Logo/Agriconnect_logo.png"
            className="cursor-pointer "
            alt="logo"
            width={220}
            height={120}
          />
        </div>
      </Link>
      <div className={styles.whole}>
        <ConnectTogether />

        <div className={styles.searchbox}>
          <h1>
            Discover our <b>Products</b>
          </h1>
        </div>

        <div className={styles.place}>
          <div className={styles.login}>
            <h2 className={styles.jh}>ADMIN LOGIN</h2>
            <input
              className={styles.km}
              type="text"
              placeholder="E-Mail"
              onChange={(e) => {
                setEmailUser(e.target.value);
              }}
            />
            <input
              className={styles.ks}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className={styles.btn} onClick={() => signIn()}>
              Sign in
            </button>
            <ToastContainer />
          </div>
          <div className={styles.signup}>
            <div className={styles.wrap}>
              <h2>
                <b>NEW HERE ?</b>
              </h2>
              <h4>sign up and discover our Products</h4>
              <button className={styles.btn1}>
                <Link href="/signup">Sign up</Link>{" "}
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/Images/Split Leaf.png"
          width="100px"
          height="100px"
          alt="leaf-img"
        />
      </div>
    </>
  );
}

export default Signin;
