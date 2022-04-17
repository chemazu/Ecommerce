import React from "react";
import Button from "../Button";
// import Logo from "../Logo/Logo";
import menu from "../../imgs/menu-icon.svg";
import close from "../../imgs/close.svg";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const [showResults, setShowResults] = React.useState(false);
  const openMenu = () => {
    setShowResults(true);
  };
  const closeMenu = () => {
    setShowResults(false);
  };
  return (
    <div className="header">
      <div className="nav">
        {/* <Logo /> */}
        <div className="menu-items"></div>
        <div className="auth">
          <Link to="/login">
            <Button title="Login" className="pry" type="" onClick={""}/>
          </Link>
          <Link to="/register">
            <Button title="Register" className="pry" type="" onClick={""}/>
          </Link>
        </div>
      </div>
      <div className="mob-nav-wrapper">
        <div className="mob-nav">
          {/* <Logo /> */}
          {/* <img className="close" src={menu} onClick={openMenu} /> */}
        </div>
        {showResults ? (
          <div className="mob-nav-drop">
            <div className="hidden-mob-nav">
              {/* <Logo /> */}
              {/* <img className="close" src={close} onClick={closeMenu} /> */}
            </div>
            <div className="hidden-menu-items">
              <p>Stays</p>
              <p>Flights</p>
              <p>Car Rentals</p>
              <p>Restaurant</p>
            </div>
            <div className="auth">
              <Link to="/login">
                <Button title="Login" onClick={closeMenu}  className="pry" />
              </Link>
              <Link to="/register">
                <Button title="Register" onClick={closeMenu}  className="pry" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}