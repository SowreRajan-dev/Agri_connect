import axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProductAdmin() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productRate, setProductRate] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [file, setFile] = useState(null);

  const admin = useSelector((state) => state.admin)?.admin;
  const router = useRouter();

  const onAddProduct = async (e) => {
    e.preventDefault();
    if (admin.role !== "ADMIN") {
      toast.error("You're not admin", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    if (
      !productName ||
      !productType ||
      !productRate ||
      !productDescription ||
      !productQuantity ||
      !productLocation ||
      !productPicture ||
      !productWeight
    ) {
      toast.error("Please fill in all fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    axios
      .post("/api/product", {
        productName: productName,
        productType: productType,
        productRate: parseInt(productRate),
        image: productPicture,
        productDescription: productDescription,
        productStock: parseInt(productQuantity),
        location: productLocation,
        productWeight: productWeight,
        adminId: admin.id,
      })
      .then((response) => {
        toast.success("Product Added successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setProductDescription("");
        setProductLocation("");
        setProductName("");
        setProductPicture("");
        setProductQuantity("");
        setProductRate("");
        setProductType("");
        setProductWeight("");
        router.push("/dashboard/admin/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.warning("Upload a image", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "qwy8qyo5");

    axios
      .post("https://api.cloudinary.com/v1_1/dc4pcnhb4/image/upload", formData)
      .then((response) => {
        setProductPicture(response.data.secure_url);
        toast.success("Image uploaded successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setUploadError("Error uploading file.");
        toast.error(uploadError, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-96 flex items-center flex-col space-y-32">
        <h1 className="text-3xl mt-10">Enter Product Details to Add</h1>
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="file"
              name="image"
              onChange={(e) => {
                handleFileInputChange(e);
              }}
              value={fileInputState}
            />
            {previewSource && (
              <img
                src={previewSource}
                alt="Preview"
                style={{ height: "300px" }}
              />
            )}
            <button type="submit">Upload</button>
          </form>
          {uploadedFile && (
            <div>
              <h2>Uploaded File:</h2>
              <CloudinaryContext cloudName="YOUR_CLOUD_NAME">
                <Image publicId={uploadedFile} alt="uploaded-image" />
              </CloudinaryContext>
            </div>
          )}
          {uploadError && <div>{uploadError}</div>}
        </div>

        <form className="w-full max-w-lg" onSubmit={onAddProduct}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Product Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Eg. Gold Rice"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Product Type
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Eg. Grains"
                onChange={(e) => setProductType(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-rate"
              >
                Product Rate (per given measuring weight)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-rate"
                type="number"
                placeholder="₹-"
                onChange={(e) => setProductRate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Product Description
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                placeholder="Enter the description here..."
                maxLength={120}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-Quantity"
              >
                Product Quantity (stock - based on the measure given)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-Quantity"
                placeholder="Enter the stock..."
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-location"
              >
                Product Location (in km)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-location"
                placeholder="Eg. 5km"
                onChange={(e) => setProductLocation(e.target.value)}
              />
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-type-weight"
              >
                Measuring Weight
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-type-weight"
                type="text"
                placeholder="Eg. /kg (/ is required)"
                onChange={(e) => setProductWeight(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-[#20E58F] p-3 w-24 font-semibold rounded-md mb-5"
            type="submit"
          >
            Add
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AddProductAdmin;
