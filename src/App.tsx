import React from "react";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./view/Register";
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";
import AuthProvider from "../src/context/AuthContext";
import Home from "./view/Home";
import ProtectedRoute from "./view/ProtectedRoute";

function App() {
   const getLoggedIn=()=>{
    const token = localStorage.getItem(("LoggedIn")) || null
    if (token == null) {return false}
     return true
   }
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute >
              //   <Dashboard />
              // </ProtectedRoute>

              ProtectedRoute({children:<Dashboard/>})
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </AuthProvider>
      {/* <Link to="/login">Login   {process.env.REACT_APP_APIKEY}</Link>
        <Link to="/register">Register   </Link>
        <Link to="/dashboard">Dashboard</Link>  */}
    </div>
  );
}

export default App;
