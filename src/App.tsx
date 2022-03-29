import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import app from "./utils/firebase";
import Register from "./view/Register";
import Login from "./view/Login"


function App() {
  console.log(app);

  return (
    <div className="App">
      {/* <Register /> */}
      <Login/>
    </div>
  );
}

export default App;
