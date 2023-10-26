import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../app/layouts";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRouter() {
  // const isloggedIn = localStorage.getItem("ACCESS_TOKEN");
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {isLoggedIn ? (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
