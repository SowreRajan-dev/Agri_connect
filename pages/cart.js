import React from "react";
import Image from "next/image";
import styles from "../styles/cart.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import Link from "next/link";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  function getTotalPrice() {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
            <div className={styles.header}>
              <div>Image</div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            {cart.map(
              (item) => (
                console.log(item),
                (
                  <div className={styles.body} key={item.id}>
                    <div className={styles.image}>
                      <Image
                        src={item.image}
                        height="90"
                        width="65"
                        alt="itemImage"
                      />
                    </div>
                    <p>{item.name}</p>
                    <p>₹ {item.price}</p>
                    <p>{item.quantity}</p>
                    <div className={styles.buttons}>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>
                        x
                      </button>
                    </div>
                    <p>₹ {item.price * item.quantity}</p>
                  </div>
                )
              )
            )}
            <h2>
              <b>Grand Total:</b> ₹ {getTotalPrice()}
            </h2>
            {user.isLoggedIn ? (
              <div className="flex justify-end">
                <button className="flex  placeholder:border-2 rounded-[12px] bg-[#20E58F] hover:bg-[#229764]  border-transparent focus:border-transparent focus:ring-0  text-white   items-center p-2">
                  <Image
                    src="/Images/Icons/shopping-cart.png"
                    width="20px"
                    height="20px"
                    alt="shopping cart"
                  />
                  <p className="ml-3 font-normal">Check Out!</p>
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-end">
                  <button
                    className="flex  placeholder:border-2 rounded-[12px] bg-[#20E58F] hover:bg-[#229764]  border-transparent focus:border-transparent focus:ring-0  text-white   items-center p-2 cursor-not-allowed"
                    disabled
                  >
                    <Image
                      src="/Images/Icons/shopping-cart.png"
                      width="20px"
                      height="20px"
                      alt="shopping cart"
                    />
                    <p className="ml-3 font-normal">Check Out!</p>
                  </button>
                </div>
                <div>
                  <p className="text-xl font-normal ">
                    Please Login to Check Out! 👉
                    <span className="hover:underline text-blue-400">
                      {" "}
                      <Link href="/signin" passHref>
                        Login...
                      </Link>
                    </span>
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
