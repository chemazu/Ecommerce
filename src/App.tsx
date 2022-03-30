import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./view/Register";
import Login from "./view/Login"
import Dashboard from "./view/Dashboard";


function App() {


  return (
    <div className="App">
     <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
