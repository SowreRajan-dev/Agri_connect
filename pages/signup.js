import React, { useState, useEffect } from "react";
import styles from "../styles/signup.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [createdUser, setCreatedUser] = useState(null);

  useEffect(() => {
    if (createdUser !== null) {
      localStorage.setItem("currentUser", JSON.stringify(createdUser));
      router.push("/signin");
    }
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/");
    }
  }, [createdUser, router]);

  const createUser = async () => {
    try {
      if (
        email === "" ||
        username === "" ||
        password === "" ||
        confirmedPassword === "" ||
        phonenumber === "" ||
        street === "" ||
        area === "" ||
        city === "" ||
        country === "" ||
        state === "" ||
        postalcode === "" ||
        addressline1 === "" ||
        addressline2 === ""
      ) {
        toast.error("Please fill in all fields", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        return;
      }

      const user = {
        email,
        username,
        password,
        confirmedPassword,
        phonenumber,
        street,
        area,
        city,
        country,
        state,
        postalcode,
        addressline1,
        addressline2,
      };
      await axios
        .post("http://localhost:3000/api/register", {
          email: user.email,
          username: user.username,
          password: user.password,
          confirmedPassword: user.confirmedPassword,
          addressline1: user.addressline1,
          addressline2: user.addressline2,
          area: user.area,
          city: user.city,
          country: user.country,
          pincode: parseInt(user.postalcode),
          phonenumber: user.phonenumber,
          state: user.state,
          street: user.street,
        })
        .then((res) => {
          console.log(res.data.data);
          setCreatedUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.vvs}>
      <Link href="/" passHref>
        <Image
          src="/Images/Logo/Agriconnect_logo.png"
          className="cursor-pointer "
          alt="logo"
          width={220}
          height={120}
        />
      </Link>
      <h3 className={styles.nvs}>Sign up</h3>

      <div className={styles.grids}>
        <div className="w-full sm_max:max-w-xs lg_max:max-w-md xl:p-10 md:p-10">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold my-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="******************"
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phonenumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phonenumber"
                type="text"
                placeholder="+91 - xxxxxxxxxx"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="addressLine1"
              >
                Address Line 1
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="addressLine1"
                type="text"
                placeholder="Address line-1"
                onChange={(e) => setAddressline1(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="addressLine2"
              >
                Address Line 2
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="addressLine2"
                type="text"
                placeholder="Address line-2"
                onChange={(e) => setAddressline2(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="area"
              >
                Area
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="area"
                type="text"
                placeholder="Area"
                onChange={(e) => setArea(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="street"
              >
                Street
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
                placeholder="street"
                onChange={(e) => setStreet(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="state"
                type="text"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="postalcode"
              >
                Postal Code
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="postalcode"
                type="text"
                placeholder="postal code"
                onChange={(e) => setPostalcode(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => createUser()}
              >
                Sign Up
              </button>
              <ToastContainer />
            </div>
            <div className="flex flex-wrap mt-10">
              <p className="text-gray-700 text-sm font-bold">
                Already have an account?
              </p>
              <p className="ml-5 text-blue-500 hover:underline">
                <Link href="/signin">sign-in</Link>
              </p>
            </div>
          </form>
        </div>
        <Image
          src="/Images/undraw_handcrafts_tree.svg"
          width="400px"
          height="400px"
          alt="leaf-img"
        />
      </div>
    </div>
  );
}

export default Signup;
