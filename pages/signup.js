import React from "react";
import styles from "../styles/signup.module.css";
import Image from "next/image";
import Link from "next/link";

function signup() {
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
        <div className="w-full max-w-xs">
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
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
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
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Address
              </label>
              <textarea
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                cols="30"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
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

export default signup;
