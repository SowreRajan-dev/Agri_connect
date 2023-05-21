import { useState } from "react";
import DashBoardNavBar from "../../../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../../../components/DashBoardSidebar/DashBoardSidebar";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const EditProductPage = ({ product }) => {
  const router = useRouter();
  const admin = useSelector((state) => state.admin)?.admin;
  const [editedProduct, setEditedProduct] = useState(product);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the edited product data to the backend
    const {
      id: pid,
      admin_id: adminId,
      category,
      description,
      location,
      price,
      weight,
      quantity,
    } = editedProduct;
    // Call an API endpoint to update the product information
    const res = await axios.put("/api/admin/product", {
      pid,
      adminId,
      category,
      description,
      location,
      price: parseInt(price),
      weight,
      quantity: parseInt(quantity),
      updatedAt: new Date(),
    });
    setEditedProduct(res.data.product);
    toast.success(res.data.message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  const onDeleteProduct = async (e, adminId, pid) => {
    e.preventDefault();
    await axios
      .delete(
        `http://localhost:3000/api/admin/product/delete-product?pid=${pid}&adminId=${adminId}`
      )
      .then((res) => {
        toast.error(res.data.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setTimeout(() => {
          router.push("/dashboard/admin/products");
        }, 2000);
      });
  };

  return (
    <div>
      <DashBoardNavBar />
      <div>
        <DashBoardSidebar>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 font-poppins">
              Edit Product
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={editedProduct.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-not-allowed"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Image:
                </label>
                <img
                  name="image"
                  src={editedProduct.image}
                  className="w-[150px] h-[150px] px-3 py-2 border border-gray-300 rounded-md"
                  alt="product-img"
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat ">
                  Category:
                </label>
                <input
                  type="text"
                  name="category"
                  value={editedProduct.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Description:
                </label>
                <textarea
                  name="description"
                  value={editedProduct.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Price (in ₹-):
                </label>
                <input
                  type="number"
                  name="price"
                  value={editedProduct.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Stock (in {editedProduct.weight}):
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={editedProduct.quantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Weight (in Unit):
                </label>
                <input
                  type="text"
                  name="weight"
                  value={editedProduct.weight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 font-montserrat">
                  Location (in Km):
                </label>
                <input
                  type="text"
                  name="location"
                  value={editedProduct.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md"
              >
                Save
              </button>
              <button
                className="px-2 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md  mx-10"
                onClick={(e) => onDeleteProduct(e, admin.id, editedProduct.id)}
              >
                Delete
              </button>
            </form>
          </div>
          <ToastContainer />
        </DashBoardSidebar>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  // Fetch the product data from the backend based on the productId
  const productId = params.id;

  // Replace this with your own API call to fetch the product details
  const product = await axios.get(
    `http://localhost:3000/api/product/${productId}`
  );

  //   console.log(product);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product.data)),
    },
  };
}

export default EditProductPage;
