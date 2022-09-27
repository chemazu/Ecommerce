import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  // isAuth?: boolean;
}
const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;

}) => {
  const getLoggedIn = () => {
    const token = localStorage.getItem("token") || null;
    if (token == null) {
      return false;
    }
    return true;
  };
  return getLoggedIn() ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
