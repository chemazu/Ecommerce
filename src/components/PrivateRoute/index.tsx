import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Navigate to={{ pathname: "/login" }} />
    );
  return <Route {...rest} element={routeComponent} />;
};
export default PrivateRoute;
