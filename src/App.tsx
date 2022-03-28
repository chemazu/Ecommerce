import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import app from "./utils/firebase";
import Register from "./view/Register";

function App() {
  console.log(app);

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
