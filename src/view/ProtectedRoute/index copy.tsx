import { Navigate } from "react-router-dom";
import { ShopContextType } from "../../@types/shop.d";
// import { ShopContext } from "../../context/ShopContext";
import { ShopContext } from "../../context/ShopContext"

import React from "react";

function ProtectedRoute({ children }: { children?: any }) {
  const re = React.useContext(
    ShopContext
  ) as ShopContextType;
console.log(re)
  // let [check, setCheck] = React.useState(
  //   JSON.parse(localStorage.getItem("token") || "false")
  // );

  // React.useEffect(() => {
  //   setCheck(JSON.parse(localStorage.getItem("token") || "false"));
  // }, [localStorage]);

  let token = true;
  // console.log(isAuth);

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}
export default ProtectedRoute;
