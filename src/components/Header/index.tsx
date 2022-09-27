import React from "react";
import { Link, useNavigate } from "react-router-dom";
import importContent from "../../resources/importContent";
import Button from "../Button";
import "./style.scss";

export default function Header() {
  let navigate = useNavigate();
  const { hammenu } = importContent();
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="header">
      <div className="desktop-header">
        <Link to="/">
          <h1 className="highlight">Stacked</h1>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/shop/cart">Cart</Link>
        <Link to="/dashboard">Dashboard</Link>

        {/* profile ,logOut */}
        <div className="auth-wrapper">
          <Link to="/login">
            <Button title="Login" className="pry" />
          </Link>
          <Link to="/register">
            <Button title="Register" className="pry" />
          </Link>
        </div>
      </div>
      <div className="mobile-header">
        {showMenu ? (
          <div className="open">
            <div className="top">
              <h1 className="highlight" style={{ color: "#fff" }}>
                Stacked
              </h1>
              <h1
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                X
              </h1>
            </div>
            <div className="menu-items">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/shop/cart">Cart</Link>
              <Link to="/dashboard">Dashboard</Link>
              <div className="auth-wrapper">
                <Button
                  title="Login"
                  className="pry"
                  onClick={() => {
                    navigate("/login");
                  }}
                />{" "}
                <Button
                  title="Register"
                  className="pry"
                  onClick={() => {
                    navigate("/register");
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="close">
            <h1 className="highlight">Stacked</h1>
            <img
              src={hammenu}
              alt="Menu"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
