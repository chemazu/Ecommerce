import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  // isAuth?: boolean;
}
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  console.log(localStorage.getItem("token"));
  // const getLoggedIn = () => {
  //   const token = localStorage.getItem("token") || null;
  //   if (token == null) {
  //     return false;
  //   }
  //   return true;
  // };
  // eslint-disable-next-line no-self-compare
  return 2 === 2 ? children : <Navigate to="/login" replace />;
  // return getLoggedIn() ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
