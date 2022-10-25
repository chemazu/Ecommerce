import { Navigate } from "react-router-dom";
import React from "react";

function ProtectedRoute({ children }: { children?: any }) {
  // let [check, setCheck] = React.useState(
  //   JSON.parse(localStorage.getItem("token") || "false")
  // );

  // React.useEffect(() => {
  //   setCheck(JSON.parse(localStorage.getItem("token") || "false"));
  // }, [localStorage]);

  const token = JSON.parse(localStorage.getItem("token") || "false");

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}
export default ProtectedRoute;
