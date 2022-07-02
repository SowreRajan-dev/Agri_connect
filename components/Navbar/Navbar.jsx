import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const onSignOut = () => {
    dispatch(logout());
    setUser(null);
  };
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
    }
  }, []);
  return (
    <>
      <nav className=" flex flex-row items-center flex-wrap p-3  ">
        <div className="flex-1">
          <Link href="/" passHref>
            <div>
              <Image
                src="/Images/Logo/Agriconnect_logo.png"
                className="cursor-pointer"
                alt="logo"
                width={220}
                height={120}
              />
            </div>
          </Link>
        </div>

        <div className={`${Styles.navLinks} flex-1`}>
          <div
            className={`${Styles.navRes} flex items-center justify-between font-dnsansItal text-[20px] `}
          >
            <div className={`${router.pathname === "/" ? "active" : ""} `}>
              <Link href="/">Home</Link>
            </div>

            <div
              className={`${router.pathname === "/products" ? "active" : ""}`}
            >
              <Link href="/products">Products</Link>
            </div>
            <div className={`${router.pathname === "/about" ? "active" : ""}`}>
              <Link href="/about">About</Link>
            </div>
            <div
              className={`cursor-pointer font-dnsansItal text-[20px] ${
                router.pathname === "/cart" ? "active " : ""
              }`}
            >
              <Link href="/cart" passHref>
                <p>Cart ({getItemsCount()}) </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {user ? (
            <div className={`${Styles.navLeft} flex justify-end relative`}>
              <p
                className={`${Styles.navUserbar} flex flex-wrap  font-dnsansItal text-[20px] ml-10 mr-10 md_max:flex-row`}
              >
                Welcome 😊 {user.user_name}
              </p>
              <Link href="/" passHref>
                <p
                  className="font-dnsansItal text-[20px] cursor-pointer md_max:hidden"
                  onClick={() => onSignOut()}
                >
                  Sign Out
                </p>
              </Link>
            </div>
          ) : (
            <div
              className={` flex items-center justify-end mr-5 md_max:hidden`}
            >
              <Image
                src="/images/Icons/Arrow_icon.png"
                alt="arrow-icon"
                width={30}
                height={30}
              />
              <Link href="/signin" passHref>
                <p className="ml-2 font-dnsansItal cursor-pointer text-[20px]">
                  Sign In
                </p>
              </Link>
            </div>
          )}
        </div>
        <button
          className="flex flex-col h-12 w-12 border-2  rounded justify-center cursor-pointer items-center group md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
        {isOpen && <MobileNavLine />}
      </nav>
    </>
  );
};

const MobileNavLine = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const [user, setUser] = useState(null);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const onSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
    }
  }, []);
  return (
    <>
      <div
        className={`w-[100%] h-[70vh] bg-[#c2f5db] flex flex-col items-center justify-around md:hidden`}
      >
        <div className={`${router.pathname === "/" ? "active" : ""} `}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${router.pathname === "/products" ? "active" : ""}`}>
          <Link href="/products">Products</Link>
        </div>
        <div className={`${router.pathname === "/about" ? "active" : ""}`}>
          <Link href="/about">About</Link>
        </div>
        <div
          className={` cursor-pointer ${
            router.pathname === "/cart" ? "active" : ""
          }`}
        >
          <Link href="/cart" passHref>
            <p>Cart ({getItemsCount()}) </p>
          </Link>
        </div>
        {user && (
          <div>
            <Link href="/" passHref>
              <p
                className="font-dnsansItal text-[18px] cursor-pointer "
                onClick={() => onSignOut()}
              >
                Sign Out
              </p>
            </Link>
          </div>
        )}
        <div>
          {!user && (
            <div className={` flex items-center justify-end mr-5 `}>
              <Image
                src="/images/Icons/Arrow_icon.png"
                alt="arrow-icon"
                width={30}
                height={30}
              />
              <Link href="/signin" passHref>
                <p className="ml-2 font-dnsansItal cursor-pointer text-[20px]">
                  Sign In
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
