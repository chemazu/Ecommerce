import React, { useState } from "react";
import Button from "../Button";
import CartDropDown from "../CartDropDown";

import importContent from "../../resources/importContent";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import "./style.scss";
export default function ShopFilter({
  filter,
  setFilter,
  setSort,
  filterArray,
}: any) {
  const { cart } = React.useContext(ShopContext) as ShopContextType;
  const { cartsvg } = importContent();
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [isOpen, setIsOpen] = useState({ status: false, id: 0 });
  const createFilter = (control: any, item: any) => {
    setFilter({ ...filter, [control]: item });
  };
  return (
    <div className="shop-filter-wrapper">
      <div className="shop-filter">
        <div className="sort">
          <p
            className="sort-button"
            onClick={() => {
              setShowSort(!showSort);
              setShowFilter(false);
              setShowCart(false);
            }}
          >
            Sort
          </p>
        </div>
        <div className="filter">
          <p
            onClick={() => {
              setShowFilter(!showFilter);
              setShowSort(false);
              setShowCart(false);
            }}
          >
            Filter{" "}
          </p>
        </div>
        <div className="search-div">
          <input type="text" placeholder="Search" className="searchBox" />
          <Button title="Search" className="pry" />
        </div>

        <div className="cart">
          <img
            src={cartsvg}
            alt="svg"
            onClick={() => {
              setShowCart(!showCart);
              setShowSort(false);
              setShowFilter(false);
            }}
          />
          <span>{cart.length}</span>
        </div>
      </div>
      {showFilter && (
        <div style={{ display: "flex" }}>
          {filterArray.map((item: any, index: any) => {
            const { title, content } = item;
            return (
              <div
                className="filter-heading"
                onClick={() => {
                  setIsOpen({ status: !isOpen.status, id: index });
                }}
                key={index}
              >
                {title}
              </div>
            );
          })}
        </div>
      )}
      {isOpen.status && (
        <div style={{ display: "flex" }}>
          {filterArray[isOpen.id].content.map((item: any, index: number) => {
            return (
              <div
                className="filter-sub-options"
                key={index}
                onClick={() => createFilter(filterArray[isOpen.id].title, item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
      {showSort && (
        <div className="sort-drop-down">
          <p
            onClick={() => {
              setSort("nothing");
            }}
          >
            Recommended
          </p>
          <p
            onClick={() => {
              setSort("alphabetically");
            }}
          >
            Alphabetically
          </p>
          <p
            onClick={() => {
              setSort("priceLow");
            }}
          >
            Price: low to high
          </p>
          <p
            onClick={() => {
              setSort("priceHigh");
            }}
          >
            Price: high to low
          </p>
        </div>
      )}
      {/* <div className="cart-dropdown-wrapper">
        {showCart && <CartDropDown />}
      </div> */}
    </div>
  );
}
