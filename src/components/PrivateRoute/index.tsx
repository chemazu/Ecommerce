import { AuthContext } from "../../context/AuthContext"
import { AuthContextType} from "../../@types/auth.d";
import React from 'react'
import { Navigate,Route } from "react-router-dom";


const ProtectedRoute
: React.FC<any> = (
    Component: React.ComponentType<any>,

  ): any => {
    const token = true;
    const Auth: React.FC = (): JSX.Element => {
      if (token) {
        return <Navigate to={"/login"}/>;
      } else return <Component/>
    };
    return Auth;
  };
  
  export default ProtectedRoute
  ;
 