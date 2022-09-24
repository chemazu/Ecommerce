import React, { useState } from "react";
import Button from "../../components/Button";
import importContent from "../../resources/importContent";
import data from "../../resources/data/products.json";
import ShopItem from "../../components/ShopItem";
import "./style.scss";
import resultSort from "../../helpers/sort";
import resultFilter from "../../helpers/filter";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";
import CartDropDown from "../../components/CartDropDown";
import { Link } from "react-router-dom";

export default function Shop() {
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  let { cartsvg } = importContent();
  // let categories = ["category1", "category2","category3"]
  let [searchField, setSearchField] = useState("");
  let [sortBy, setSortBy] = useState("alphabetically");
  let [filterQuery, setFilterQuery] = useState({});
  let categoryFilter: string[] = [];
  let propetyFilter: string[] = [];
  let cardTypeFilter: string[] = [];
  //1. monster.name returns the name of the function since the name could be anything,
  // 2. .includes checks if what is typed in searchField exists in monster
  console.log(cart);
  data.sort(resultSort(sortBy));
  let searchAbleData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  });
  searchAbleData.filter(resultFilter(filterQuery)).map((item) => {
    if (!categoryFilter.includes(item.category)) {
      categoryFilter.push(item.category);
    }
    if (!propetyFilter.includes(item.property)) {
      propetyFilter.push(item.property);
    }
    if (!cardTypeFilter.includes(item.cardtype)) {
      cardTypeFilter.push(item.cardtype);
    }
  });

  let filterOptions = [
    { title: "Card Type", content: cardTypeFilter },
    { title: "Property", content: propetyFilter },
    { title: "Category", content: categoryFilter },
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
            {categoryFilter.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="filters">
            <h2>Filters</h2>
            {filterOptions.map((item: any, index: number) => {
              return (
                <DisplayFilter
                  item={item}
                  setFilterQuery={setFilterQuery}
                  filterQuery={filterQuery}
                />
              );
            })}
            <>
              {Object.keys(filterQuery).length > 0 && (
                <p
                  onClick={() => {
                    setFilterQuery({});
                  }}
                >
                  Clear Filter X
                </p>
              )}
            </>
          </div>
        </div>
        <div className="shop-right">
          <div className="shop-right-heading">
            <div className="search-div">
              <input
                type="text"
                placeholder="Search"
                className="searchBox"
                onChange={(e) => {
                  setSearchField(e.target.value);
                }}
              />
              <Button title="Search" className="pry" />
            </div>
            <div className="cart-wrapper" >
              <div className="cart">
                <Link to="/shop/cart">
                <img
                  src={cartsvg}
                  alt="svg"
                  onClick={() => {
                    // navigate("cart");
                    // setShowCart(!showCart);
                    // setShowSort(false);
                    // setShowFilter(false);
                  }}
                />
                </Link>
              </div>
            </div>
            <div className="sort">
              <p>Sort by</p>
              <select
                name="cars"
                id="cars"
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              >
                <option value="" selected={true} disabled={true}></option>
                <option value="alphabetically">Alphabetically</option>
                <option value="priceLow">Price : Low to High</option>
                <option value="priceHigh">Price : High to Low</option>
              </select>
            </div>
          </div>
          <div className="shop-items-wrapper">
            {searchAbleData
              .filter(resultFilter(filterQuery))
              .map((item, index) => {
                return <ShopItem item={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
// let ShopItem = ({ item }: { item: any }) => {
//   return (
//     <div className="shop-item">
//       <div className="item">
//         <img
//           src={require(`../../resources/ecommerce-products/${item.img1}`)}
//           alt="item for sale"
//           className="front-card"
//         />
//       </div>
//       <div className="item-text">
//         <h5>{item.name}</h5>
//         <p>${item.price}</p>
//         <Button title="Add to Cart" className="addtocart" />
//       </div>
//     </div>
//   );
// };
let DisplayFilter = ({
  item,
  filterQuery,
  setFilterQuery,
}: {
  item: any;
  filterQuery: any;
  setFilterQuery: any;
}) => {
  let [showOptions, setShowOptions] = useState(false);
  let { caretdown } = importContent();
  let handleQuery = (value: string) => {
    if (item.title === "Category") {
      setFilterQuery({ ...filterQuery, category: value });
    }
    if (item.title === "Card Type") {
      setFilterQuery({ ...filterQuery, cardtype: value });
    }
    if (item.title === "Property") {
      setFilterQuery({ ...filterQuery, property: value });
    }
  };

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
          return (
            <p
              key={index}
              onClick={() => {
                handleQuery(item);
              }}
            >
              {item}
            </p>
          );
        })}
    </div>
  );
};
