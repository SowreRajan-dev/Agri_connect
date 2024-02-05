import React from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/AdminLayout/AdminLayout";
import Dashboard from "../../../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function DashBoardPage() {
  const [verifyAdmin, setVerifyAdmin] = useState(false);
  const router = useRouter();
  const adminId = router.query.id;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/admin/verify?adminId=${adminId}`)
      .then((response) => {
        if (response.data.toLowerCase() === "verified") {
          setVerifyAdmin(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {verifyAdmin ? (
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      ) : (
        <>
          <p className="text-xl text-center">Non Verified Admin</p>
        </>
      )}
    </>
  );
}

export default DashBoardPage;
