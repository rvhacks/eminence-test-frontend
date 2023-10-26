import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function PublicRouter() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return <> {isLoggedIn ? <Navigate to="/home" /> : <Outlet />}</>;
}
