import React, { useEffect, useState } from "react";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import { useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";

function AdminProductComponent() {
  const admin = useSelector((state) => state.admin)?.admin;
  const [ownerProducts, setOwnerProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get("/api/products");
    const products = res.data;
    const filteredData = products.filter((product) => {
      return admin.user_name === product.productOwnerName;
    });
    setOwnerProducts(filteredData);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {" "}
      <div>
        <div className="w-full h-full flex ">
          <div className="w-full relative max-w-7xl h-96 items-center  ">
            <div className="w-full h-full flex justify-evenly space-y-4 flex-wrap ">
              {ownerProducts.length > 0 ? (
                ownerProducts?.map((product, index) => (
                  <Link
                    key={index}
                    href={`/dashboard/admin/product/${product.id}`}
                    passHref
                  >
                    <a>
                      <AdminProductCard
                        key={index}
                        productName={product.name}
                        productImg={product.image}
                      />
                    </a>
                  </Link>
                ))
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center mt-8">
                  <p className="text-gray-500 text-lg">No products found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductComponent;
