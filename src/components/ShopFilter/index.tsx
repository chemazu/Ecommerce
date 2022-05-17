import React, { useState } from "react";
import Button from "../Button";
import importContent from "../../resources/importContent";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import "./style.scss";

export default function ShopFilter() {
  const { cartsvg } = importContent();
  const [showFilter, setShowFilter] = useState(false);

  const filterArrayContent = {
    title: "category",
    content: ["accessories", "apparel", "bags", "drinkware", "five"],
  };
  const filterArray = [
    {
      title: "Catergory",
      content: ["accessories", "apparel", "bags", "drinkware", "five"],
    },
    {
      title: "Size",
      content: ["accessories", "apparel", "bags", "drinkware", "five"],
    },
    {
      title: "Color",
      content: ["accessories", "apparel", "bags", "drinkware", "five"],
    },
    {
      title: "Age",
      content: ["accessories", "apparel", "bags", "drinkware", "five"],
    },
  ];
  return (
    <div className="shop-filter-wrapper">
      <div className="shop-filter">
        <div className="sort">
          <h3>Sort</h3>
          <div className="sort-items"></div>
        </div>
        <div className="filter">
          <h3
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            Filter{" "}
          </h3>
        </div>
        <div className="search-div">
          <input type="text" placeholder="Search" className="searchBox" />
          <Button title="Search" className="pry" />
        </div>

        <img src={cartsvg} alt="svg" />
      </div>
      {showFilter && (
        <div className="show-filter-options">
          {filterArray.map((item: any, index: any) => {
            return (
              <FilterDropDown
                item={item}
                key={index}
                filter={showFilter}
                setFilter={setShowFilter}
                control={item.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
//memomize the function below "USE MEMO"
const FilterDropDown = ({
  item,
  filter,
  setFilter,
  control,
}: {
  item: { title: string; content: [string] };
  filter: any;
  setFilter: any;
  control: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const createFilter = (control: any, item: any) => {
    setFilter({ ...filter, [control]: item });
    console.log(filter);
  };
  return (
    <>
      <div className="filter-dropdown">
        {" "}
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {item.title}
        </p>
      </div>
            {isOpen && (
        <div className="sub-filter">
          {item.content.map((item, index, array) => {
            return (
              <p
                onClick={() => {
                  createFilter(control, item);
                }}
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};
