import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import ConnectTogether from "../components/ConnectTogether/ConnectTogether";
import styles from "../styles/signin.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";

function Signin() {
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    const currUser = localStorage.getItem("currentUser");
    if (currUser) {
      setUser(JSON.parse(currUser));
    }
    const customer = localStorage.getItem("user");
    if (!customer) return;
    router.push("/");
  }, [router]);

  const signIn = async () => {
    console.log(emailUser, password);
    try {
      const verifyUser = await axios.post("http://localhost:3000/api/login", {
        email: emailUser,
        password,
      });

      const { email, user_name, id, mobile } = verifyUser.data.data;
      try {
        localStorage.removeItem("currentUser");
        localStorage.setItem(
          "user",
          JSON.stringify({ email, user_name, id, mobile })
        );
        setUser(verifyUser.data.data);
        dispatch(login(verifyUser.data.data));
        if (cartItems.length > 0) {
          router.push("/cart");
        } else {
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
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
            <h2 className={styles.jh}>LOGIN</h2>
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
