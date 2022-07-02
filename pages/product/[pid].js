import Navbar from "../../components/Navbar/Navbar";
import Styles from "../../styles/IndivualProductPage.module.css";
import ReactStars from "react-stars";
import axios from "axios";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const InduvialPost = (props) => {
  const { loadedProduct } = props;
  const { id, name, price, image, location, weight } = loadedProduct;
  const dispatch = useDispatch();

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
              <h4 className={Styles.h4}>{name}</h4>
              <div className={Styles.starrating}>
                <ReactStars count={5} size={35} color2={"#ffd700"} />
              </div>
              <p className={Styles.p}>
                Price:{" "}
                <span className={Styles.span} id={Styles.price}>
                  ₹{price}
                  {weight}
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
                  <li>Location: {location} Away</li>
                  <li>Fresh Quality</li>
                  <li>In Stock</li>
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
