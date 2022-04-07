import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./view/Register";
import Login from "./view/Login"
import Dashboard from "./view/Dashboard";
// require('dotenv').config()
// import { config } from "dotenv";


function App() {

// config()
  return (
    <div className="App">
     <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Link to="/login">Login   {process.env.REACT_APP_APIKEY}</Link>
        <Link to="/register">Register   </Link>
        <Link to="/dashboard">Dashboard</Link> 
    </div>
  );
}

export default App;
