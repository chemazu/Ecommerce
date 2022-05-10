import React, { useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./style.scss";
import { ShopContextType } from "../../@types/shop.d";
import Button from "../Button";

export default function ShopFilter({
  filter,
  setFilter,
  setSort,
}: {
  filter: any;
  setFilter: any;
  setSort: any;
}) {
  const { cart } = React.useContext(ShopContext) as ShopContextType;
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const filterArrayContent = {
    title: "category",
    content: ["accessories", "apparel", "bags", "drinkware", "five"],
  };
  const filterArray = [filterArrayContent];
  return (
    <div className="shop-filter">
      <div className="header">
        <p
          className="sort-button"
          onClick={() => {
            setShowSort(!showSort);
            setShowFilter(false);
          }}
        >
          Sort
        </p>
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

        <p
          onClick={() => {
            setShowFilter(!showFilter);
            setShowSort(false);
          }}
        >
          Filter
        </p>
        <div>
          Search <input />
          <Button title="Search" className="pry" />
        </div>
        {showFilter && (
          <div className="filter-mobile">
            <h4>filter</h4>
            {filterArray.map((item: any, index) => {
              return (
                <FilterDropDown
                  item={item}
                  key={index}
                  filter={filter}
                  setFilter={setFilter}
                  control={item.title}
                />
              );
            })}
          </div>
        )}
      </div>
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
    <div>
      {" "}
      <p
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {item.title}
      </p>
      {isOpen &&
        item.content.map((item, index, array) => {
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
  );
};
