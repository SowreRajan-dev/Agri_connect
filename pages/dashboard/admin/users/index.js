import React from "react";
import AdminLayout from "../../../../components/AdminLayout/AdminLayout";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BiMoney, BiPhone, BiUser } from "react-icons/bi";
import { BsCart4, BsCalender2Date } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";

function Users() {
  const admin = useSelector((state) => state.admin).admin;
  const [users, setUsers] = useState([]);
  const getUsers = async (adminId) => {
    try {
      const users = await axios.get(
        `http://localhost:3000/api/admin/purchase/users?adminId=${adminId}`
      );
      setUsers(users.data.usersBrought);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers(admin.id);
  }, [admin.id]);
  return (
    <AdminLayout>
      <div className="p-5 flex justify-around flex-wrap gap-10">
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className="w-[400px] h-[200px] border p-5 rounded-lg font-roboto"
            >
              <div>
                <div className="flex items-center gap-2 ">
                  <BiUser />
                  <p>
                    <b>Username: </b>
                    {user.user.user_name}
                  </p>
                </div>
                <div>
                  <span className="flex items-center gap-2">
                    <BsCart4 />
                    <b>Orderd products</b>
                  </span>
                  <div className="px-5">
                    <ul>
                      {user.productsBrought.map((product, index) => {
                        return <li key={index}>{product.name}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <BiMoney />{" "}
                  <p>
                    <b>Total:</b> ₹ {user.totalCost}
                  </p>
                </span>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <FaShuttleVan />
                  <p>
                    <b>Order Status:</b> {user.orderStatus}!
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
}

export default Users;
