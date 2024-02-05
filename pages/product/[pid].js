import Navbar from "../../components/Navbar/Navbar";
import Styles from "../../styles/IndivualProductPage.module.css";
import ReactStars from "react-stars";
import axios from "axios";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const InduvialPost = (props) => {
  const { loadedProduct } = props;
  const {
    id,
    name,
    price,
    image,
    description,
    location,
    weight,
    quantity,
    productOwnerName,
  } = loadedProduct;
  const dispatch = useDispatch();
  const [stars, setStars] = useState(0);
  const closeFeedBack = () => {
    setStars(0);
  };
  return (
    <div>
      <Navbar />

      <div>
        <section className={Styles.productinfo}>
          <div className={Styles.itemimageparent}>
            <div className={Styles.itemlistvertical}>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={image} alt="thumbnail" />
              </div>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={image} alt="thumbnail" />
              </div>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={image} alt="thumbnail" />
              </div>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={image} alt="thumbnail" />
              </div>
            </div>
            <div className={Styles.itemimagemain}>
              <img className={Styles.img} src={image} alt="source image" />
            </div>
          </div>
          <div className={Styles.iteminfoparent}>
            <div className={Styles.maininfo}>
              <h4 className={` text-[1.5rem]`}>
                <b>{name}</b>
              </h4>
              <div>
                <p className="text-[1.2rem] font-bold text-[#000]">
                  Description
                </p>
                <p className="font-poppins">{description}</p>
              </div>

              <div className={Styles.starrating}>
                <p className="text-[1.2rem] text-[#000]">
                  <b>Review:</b>
                </p>
                <ReactStars
                  count={5}
                  size={35}
                  value={stars}
                  onChange={(noOfStars) => setStars(noOfStars)}
                  color2={"#ffd700"}
                />
                {stars > 0 && (
                  <div className="relative w-full p-5">
                    <p
                      className="absolute right-0 cursor-pointer"
                      onClick={closeFeedBack}
                    >
                      X
                    </p>
                    <textarea
                      name="feedback"
                      id="feedback"
                      cols="30"
                      rows="2"
                      placeholder="Write your reviews..."
                      className="w-full focus:outline-none"
                    ></textarea>
                    <button className=" border-1 rounded-[12px] bg-[#20E58F] hover:bg-[#229764]  border-transparent focus:border-transparent focus:ring-0  text-white p-2">
                      <p className="font-poppins">Submit</p>
                    </button>
                  </div>
                )}
              </div>
              <p className={Styles.p}>
                <b>Price: </b>
                <span className={Styles.span} id={Styles.price}>
                  ₹{price}
                  {weight}
                </span>
              </p>
              <p className={Styles.p}>
                <b>Sold by: </b>
                <span className={Styles.span} id={Styles.price}>
                  {productOwnerName}
                </span>
              </p>
            </div>

            <div className={Styles.selectitems}>
              <div className={Styles.changecolor}>
                <div className={Styles.thumbbox}>
                  <img className={Styles.img} src={image} alt="thumbnail" />
                </div>
                <div className={Styles.thumbbox}>
                  <img className={Styles.img} src={image} alt="thumbnail" />
                </div>
              </div>

              <div className={Styles.description}>
                <ul className={Styles.ul}>
                  <li>
                    {" "}
                    <p>
                      <b>Location: </b>
                      {location} Away
                    </p>
                  </li>

                  <li>
                    <span className="flex">
                      <p className="mr-2">
                        <b>Quantity: </b>
                      </p>
                      <p>
                        {quantity} {weight} In Stock
                      </p>
                    </span>
                  </li>
                </ul>

                <button
                  className="bg-blue-500 hover:bg-blue-700 my-5 text-white font-bold py-2 px-4 rounded"
                  onClick={() => dispatch(addToCart(loadedProduct))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InduvialPost;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const product = await axios.get(
    `http://localhost:3000/api/product/${productId}`
  );
  return {
    props: {
      loadedProduct: product.data,
    },
  };
}

export async function getStaticPaths() {
  const products = await axios.get("http://localhost:3000/api/products");
  const pids = products.data.map((product) => product.id.toString());
  const params = pids.map((id) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: false,
  };
}
