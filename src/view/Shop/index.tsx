import React from "react";
import "./style.scss";

export default function Shop() {
  // let categories = ["category1", "category2","category3"]
  let filterOptions = [
    { title: "Product Type", content: ["Base Card", "Authograph", "Set"] },
    { title: "Product Type", content: ["Base Card", "Authograph", "Set"] },

    { title: "Product Type", content: ["Base Card", "Authograph", "Set"] },

  ];
  return (
    <div className="shop">
      <div className="shop-top">
        <p>Home : Shop</p>
        <h1>Trading Cards & Collectibles</h1>
      </div>
      <div className="shop-body">
        <div className="shop-left">
          <div className="sub-item">
            <h2>Categories</h2>
            <p>Marvel</p>
            <p>Rick and Morty</p>
            <p>DC</p>
          </div>
          <div className="sub-item">
            <h2>Filter</h2>
            <p>Marvel</p>
            <p>Rick and Morty</p>
            <p>DC</p>
            <p>Base Card</p>
          </div>
        </div>
        <div className="shop-right">
          <div className="shop-right-heading">
            <div className="search"></div>
            <div className="sort">
              <p>Sort by</p>
            </div>
          </div>
          <div className="shop-items-wrapper">
            <div className="shop-item">
              One
              <div className="item"></div>
              <div className="item-text">
                <h3>Title</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
