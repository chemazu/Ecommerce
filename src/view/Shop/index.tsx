import React, { useState } from "react";
import Button from "../../components/Button";
import importContent from "../../resources/importContent";
import "./style.scss";

export default function Shop() {
  // let categories = ["category1", "category2","category3"]
  let filterOptions = [
    { title: "Product Type", content: ["Base Card", "Authograph", "Set"] },
    { title: "Product Type", content: ["Base Card", "Authograph", "Set"] },

    { title: "Product Type", content: ["Base Card", "Authograph", "Set"] },
  ];
  let { brand, brand1 } = importContent();
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
          <div className="filters">
            <h2>Filter</h2>
            {filterOptions.map((item: any, index: number) => {
              return <DisplayFilter item={item} />;
            })}
          </div>
        </div>
        <div className="shop-right">
          <div className="shop-right-heading">
            <div className="search-div">
              <input type="text" placeholder="Search" className="searchBox" />
              <Button title="Search" className="pry" />
            </div>
            <div className="sort">
              <p>Sort by</p>
              <select
                name="cars"
                id="cars"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              >
                <option value="" selected={true} disabled={true}></option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="shop-items-wrapper">
            <div className="shop-item">
              {/* <div className="discounts">20% off</div> */}
              <div className="item">
                <img src={brand} alt="item for sale" />
              </div>
              <div className="item-text">
                <h5>
                  Nolan Ryan - 2022 MLB TOPPS NOW® Turn Back The Clock - Card 73
                </h5>
                <p>$99.99</p>
                <Button title="Add to Cart" className="addtocart" />
              </div>
            </div>
            <div className="shop-item">
              {/* <div className="discounts">20% off</div> */}
              <div className="item">
                <img src={brand} alt="item for sale" />
              </div>
              <div className="item-text">
                <h5>
                  Nolan Ryan - 2022 MLB TOPPS NOW® Turn Back The Clock - Card 73
                </h5>
                <p>$99.99</p>
                <Button title="Add to Cart" className="addtocart" />
              </div>
            </div>
            <div className="shop-item">
              {/* <div className="discounts">20% off</div> */}
              <div className="item">
                <img src={brand} alt="item for sale" />
              </div>
              <div className="item-text">
                <h5>
                  Nolan Ryan - 2022 MLB TOPPS NOW® Turn Back The Clock - Card 73
                </h5>
                <p>$99.99</p>
                <Button title="Add to Cart" className="addtocart" />
              </div>
            </div>
            <div className="shop-item">
              {/* <div className="discounts">20% off</div> */}
              <div className="item">
                <img src={brand} alt="item for sale" />
              </div>
              <div className="item-text">
                <h5>
                  Nolan Ryan - 2022 MLB TOPPS NOW® Turn Back The Clock - Card 73
                </h5>
                <p>$99.99</p>
                <Button title="Add to Cart" className="addtocart" />
              </div>
            </div>
            <div className="shop-item">
              {/* <div className="discounts">20% off</div> */}
              <div className="item">
                <img src={brand} alt="item for sale" />
              </div>
              <div className="item-text">
                <h5>
                  Nolan Ryan - 2022 MLB TOPPS NOW® Turn Back The Clock - Card 73
                </h5>
                <p>$99.99</p>
                <Button title="Add to Cart" className="addtocart" />
              </div>
            </div>
            <div className="shop-item">
              {/* <div className="discounts">20% off</div> */}
              <div className="item">
                <img src={brand} alt="item for sale" />
              </div>
              <div className="item-text">
                <h5>
                  Nolan Ryan - 2022 MLB TOPPS NOW® Turn Back The Clock - Card 73
                </h5>
                <p>$99.99</p>
                <Button title="Add to Cart" className="addtocart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let DisplayFilter = ({ item }: { item: any }) => {
  let [showOptions, setShowOptions] = useState(false);
  let { caretdown } = importContent();

  return (
    <div className="filter-options">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <h3>{item.title}</h3>
        <img src={caretdown} alt="down" />
      </div>
      {showOptions &&
        item.content.map((item: any, index: number) => {
          return <p key={index}>{item}</p>;
        })}
    </div>
  );
};
