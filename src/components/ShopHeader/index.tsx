import React from 'react'
import { Link } from "react-router-dom";
import Button from '../Button';
import "./style.scss";

export default function ShopHeader() {
  return (
    <div className="shop-header">
    <Link to="/">
      {" "}
      <h2 className="highlight">Stacked</h2>
    </Link>
    <div className="search-div">
      <input type="text" placeholder="Search" className="searchBox" />
      <Button title="Search" className="pry" />
    </div>

    <Link to="/shop">Shop</Link>
    <Link to="/shop">Wishlist</Link>
    <Link to="/shop">Cart</Link>

    {/* profile ,logOut */}
    <div className="auth-wrapper">
      <Button title="Login" className="pry" />
   
      <Button title="Register" className="pry" />
    </div>
  </div>
  )
}
