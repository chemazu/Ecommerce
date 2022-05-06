import React from "react";
import "./style.scss";

export default function ShopFilter() {
    
  const filterArrayContent = {
    title: "One",
    content: ["one", "two", "three", "four", "five"],
  };
  const filterArray = [
    filterArrayContent,
    filterArrayContent,
    filterArrayContent,
  ];
  return (
    <div className="shop-filter">
      <div className="header">
        <p>Sort</p>
        <p>Filter</p>
        <div className="filter-mobile">
          <h4>filter</h4>
          {filterArray.map((item: any, index) => {
            return <FilterDropDown item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

//memomize the function below "USE MEMO"
const FilterDropDown = ({
  item,
}: {
  item: { title: string; content: [string] };
}) => {
  return (
    <div>
      {" "}
      <p>{item.title}</p>
      {item.content.map((item, index) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};
