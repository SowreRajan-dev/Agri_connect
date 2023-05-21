import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/signinDashboard.module.css";
import { ToastContainer, toast } from "react-toastify";
import ConnectTogether from "../../../components/ConnectTogether/ConnectTogether";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../../../redux/adminSlice";

function Signin() {
  const [emailAdmin, setEmailAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const onSignIn = async () => {
    try {
      if (emailAdmin === "" || password === "") {
        toast.error("Please fill in all fields", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        return;
      } else {
        const verifyAdmin = await axios.post(
          "http://localhost:3000/api/admin/login",
          {
            email: emailAdmin,
            password,
          }
        );
        const { email, user_name, id, mobile } = verifyAdmin.data.data;
        try {
          localStorage.setItem(
            "admin",
            JSON.stringify({ email, user_name, id, mobile })
          );
          setAdmin(verifyAdmin.data.data);
          dispatch(login(verifyAdmin.data.data));
          router.push(`/dashboard/admin/profile/${id}`);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
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
            <h2 className={styles.jh}>ADMIN LOGIN</h2>
            <input
              className={styles.km}
              type="text"
              placeholder="E-Mail"
              onChange={(e) => {
                setEmailAdmin(e.target.value);
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
            <button className={styles.btn} onClick={() => onSignIn()}>
              Sign in
            </button>
            <ToastContainer />
          </div>
          <div className={styles.signup}>
            <div className={styles.wrap}>
              Connecting End to End agriculture Solutions to help the world
              thrive
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
