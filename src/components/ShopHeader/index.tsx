import * as React from "react";
import { Link } from "react-router-dom";
import importContent from "../../resources/importContent";
import Button from "../Button";
import "./style.scss";

export default function ShopHeader() {
  const { hammenu } = importContent();
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="shop-header">
      <div className="mobile">
        {showMenu ? (
          <div className="open">
            <div className="top">
              <h1 className="highlight" style={{ color: "#fff" }}>
                Stacked
              </h1>
              <img
                src={hammenu}
                alt="Menu"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              />
            </div>
            <div className="menu-items">
              <Link to="/shop">
                <h2>Shop</h2>
              </Link>
              <Link to="/shop">
                <h2>Wishlist</h2>
              </Link>
              <Link to="/shop">
                <h2>Cart</h2>
              </Link>

              {/* profile ,logOut */}
              <div className="auth-wrapper">
                <Button title="Login" className="pry" />

                <Button title="Register" className="pry" />
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
      <div className="desktop">
        <Link to="/">
          {" "}
          <h1 className="highlight">Stacked</h1>
        </Link>
      

        <Link to="/shop">Shop</Link>
        <Link to="/shop">Wishlist</Link>
        <Link to="/shop">Cart</Link>

        {/* profile ,logOut */}
        <div className="auth-wrapper">
          <Button title="Login" className="pry"/>

          <Button title="Register" className="pry" />
        </div>
      </div>
    </div>
  );
}
