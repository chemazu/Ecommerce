import React from "react";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  isAuth,
}: {
  children?: any;
  isAuth: Boolean;
}) {
  console.log(isAuth);
  if (!isAuth) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  return children;
}
