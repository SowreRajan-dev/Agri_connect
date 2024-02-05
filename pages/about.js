import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

function About() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <Head>
          <title>About Us - AgriConnect</title>
        </Head>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About AgriConnect</h1>
          <p className="text-lg mb-8">
            Empowering farmers for a sustainable future in agriculture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
