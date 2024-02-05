import React from "react";
import Image from "next/image";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function DashBoardSidebar({ children }) {
  const router = useRouter();
  const onSignOut = () => {
    window.location.href = "/";
  };

  const { admin } = useSelector((state) => state.admin);
  return (
    <div className="flex">
      <div>
        <button className=" inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </button>
        <div className=" h-screen bg-white z-20  lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Dashboard
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div
                className={`flex mb-2 justify-start items-center gap-4 ${
                  router.asPath === "/dashboard/admin/profile/1"
                    ? "bg-gray-900 "
                    : "hover:bg-gray-900"
                } pl-5  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
              >
                <MdOutlineSpaceDashboard
                  className={`text-2xl  ${
                    router.asPath === "/dashboard/admin/profile/1"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } `}
                />
                <h3
                  className={`text-base  ${
                    router.asPath === "/dashboard/admin/profile/1"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } font-semibold `}
                >
                  <Link href={`/dashboard/admin/profile/${admin.id}`}>
                    Dashboard
                  </Link>
                </h3>
              </div>
              <div
                className={`flex  mb-2 justify-start items-center gap-4 pl-5 ${
                  router.asPath === "/dashboard/profile"
                    ? "bg-gray-900 "
                    : "hover:bg-gray-900"
                } p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
              >
                <CgProfile
                  className={`text-2xl ${
                    router.asPath === "/dashboard/profile"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  }`}
                />
                <h3
                  className={`text-base ${
                    router.asPath === "/dashboard/profile"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } font-semibold `}
                >
                  <Link href="/dashboard/profile">Profile</Link>
                </h3>
              </div>
              <div
                className={`flex  mb-2 justify-start items-center gap-4 pl-5 ${
                  router.asPath === "/dashboard/admin/products"
                    ? "bg-gray-900 "
                    : "hover:bg-gray-900"
                } p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
              >
                <BiShoppingBag
                  className={`text-2xl ${
                    router.asPath === "/dashboard/admin/products"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } `}
                />
                <h3
                  className={`text-base ${
                    router.asPath === "/dashboard/admin/products"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } font-semibold `}
                >
                  <Link href="/dashboard/admin/products">Products</Link>
                </h3>
              </div>
              <div
                className={`flex  mb-2 justify-start items-center gap-4 pl-5 ${
                  router.asPath === "/dashboard/reviews"
                    ? "bg-gray-900 "
                    : "hover:bg-gray-900"
                } p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
              >
                <MdOutlineAnalytics
                  className={`text-2xl ${
                    router.asPath === "/dashboard/reviews"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } `}
                />
                <h3
                  className={`text-base ${
                    router.asPath === "/dashboard/reviews"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  } font-semibold `}
                >
                  <Link href="/dashboard/reviews">Reviews</Link>
                </h3>
              </div>
              <div
                className={`flex  mb-2 justify-start items-center gap-4 pl-5 ${
                  router.asPath === "/dashboard/addproduct"
                    ? "bg-gray-900 "
                    : "hover:bg-gray-900"
                }  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
              >
                <BsBoxSeam
                  className={`text-2xl ${
                    router.asPath === "/dashboard/addproduct"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  }  `}
                />
                <h3
                  className={`text-base ${
                    router.asPath === "/dashboard/addproduct"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  }  font-semibold `}
                >
                  <Link href="/dashboard/addproduct">Add Product</Link>
                </h3>
              </div>
              <div
                className={`flex  mb-2 justify-start items-center gap-4 pl-5 ${
                  router.asPath === "/dashboard/admin/users"
                    ? "bg-gray-900 "
                    : "hover:bg-gray-900"
                }  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
              >
                <BiUser
                  className={`text-2xl ${
                    router.asPath === "/dashboard/admin/users"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  }  `}
                />
                <h3
                  className={`text-base ${
                    router.asPath === "/dashboard/admin/users"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-white"
                  }  font-semibold `}
                >
                  <Link href="/dashboard/admin/users">Users</Link>
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4" onClick={onSignOut}>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashBoardSidebar;
