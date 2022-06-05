import Navbar from "../../components/Navbar/Navbar";
import Styles from "../../styles/IndivualProductPage.module.css";
import ReactStars from "react-stars";
import { products } from "../../testData";

const InduvialPost = (props) => {
  const { loadedProduct } = props;
  const { id, name, weight, imageUrl, location } = loadedProduct;
  return (
    <div>
      <Navbar />

      <div>
        <section className={Styles.productinfo}>
          <div className={Styles.itemimageparent}>
            <div className={Styles.itemlistvertical}>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={imageUrl} alt="thumbnail" />
              </div>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={imageUrl} alt="thumbnail" />
              </div>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={imageUrl} alt="thumbnail" />
              </div>
              <div className={Styles.thumbbox}>
                <img className={Styles.img} src={imageUrl} alt="thumbnail" />
              </div>
            </div>
            <div className={Styles.itemimagemain}>
              <img className={Styles.img} src={imageUrl} alt="source image" />
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
                  {weight}
                </span>
              </p>
            </div>

            <div className={Styles.selectitems}>
              <div className={Styles.changecolor}>
                <div className={Styles.thumbbox}>
                  <img className={Styles.img} src={imageUrl} alt="thumbnail" />
                </div>
                <div className={Styles.thumbbox}>
                  <img className={Styles.img} src={imageUrl} alt="thumbnail" />
                </div>
              </div>

              <div className={Styles.description}>
                <ul className={Styles.ul}>
                  <li>Location: {location} Away</li>
                  <li>Fresh Quality</li>
                  <li>In Stock</li>
                </ul>

                <button className="bg-blue-500 hover:bg-blue-700 my-5 text-white font-bold py-2 px-4 rounded">
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
  const product = products.find(
    (product) => product.id.toString() === productId
  );
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const pids = products.map((product) => product.id.toString());
  const params = pids.map((id) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: false,
  };
}