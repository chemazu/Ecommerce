import React, { useState } from "react";
import { Navigate, Route, RouteProps,useNavigate } from "react-router-dom";

interface Props extends RouteProps {
  // isAuth?: boolean;
}
const ProtectedRoute = ({
  children,
  auth,
}: {
  children: JSX.Element;
  auth: Boolean;
}) => {
  let [redr,setRedr]=useState(false)
  let navigate = useNavigate()
  React.useEffect(() => {
    const data = window.localStorage.getItem('token');
    if ( data !== null ) setRedr(true);
    if(data===null){
      navigate('/login')
    }
  }, [navigate]);
  console.log(localStorage.getItem("token"));
  console.log("first",auth)
  // const getLoggedIn = () => {
  //   const token = localStorage.getItem("token") || null;
  //   if (token == null) {
  //     return false;
  //   }
  //   return true;
  // };
  // eslint-disable-next-line no-self-compare

  return children;

  // return getLoggedIn() ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
