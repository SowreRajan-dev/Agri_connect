import React from "react";
import Image from "next/image";
import ConnectTogether from "../components/ConnectTogether/ConnectTogether";
import styles from "../styles/signin.module.css";
import Link from "next/link";

function signin() {
  return (
    <>
      <Link href="/" passHref>
        <Image
          src="/Images/Logo/Agriconnect_logo.png"
          className="cursor-pointer "
          alt="logo"
          width={220}
          height={120}
        />
      </Link>
      <div className={styles.whole}>
        <ConnectTogether />

        <div className={styles.searchbox}>
          <h1>
            Discover our <b>Products</b>
          </h1>
          <input
            className={styles.box}
            type="text"
            placeholder="Search Our Products"
          />
        </div>

        <div className={styles.place}>
          <div className={styles.login}>
            <h2 className={styles.jh}>LOGIN</h2>
            <input className={styles.km} type="text" placeholder="E-Mail" />
            <input
              className={styles.ks}
              type="password"
              placeholder="Password"
            />
            <button className={styles.btn}>Sign in</button>
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

export default signin;
