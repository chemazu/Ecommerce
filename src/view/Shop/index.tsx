import React, { useState } from "react";
import ShopFilter from "../../components/ShopFilter";
import importContent from "../../resources/importContent";
import product from "./result.json";
import Header from "../../components/Header";
import "./style.scss";
import ShopPagination from "../PaginationWrapper/ShopPagination";
import resultFilter from "../../helpers/filter";
import resultSort from "../../helpers/sort";

export default function Shop() {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const {
    facebook,
    instagram,
    twitter,
    youtube,
    pinterest,
    caretdown,
    filterSvg,
  } = importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  const filterArray = [
    {
      title: "category",
      content: ["accessories", "apparel", "bags", "drinkware"],
    },
    {
      title: "Size",
      content: ["accessories2", "apparel2", "bags2", "drinkware2"],
    },
    {
      title: "Color",
      content: ["accessories3", "apparel3", "bags3", "drinkware3"],
    },
    {
      title: "Age",
      content: ["accessories4", "apparel4", "bags4", "drinkware4"],
    },
  ];
  const productArray = product.products.data.items;

  const finalProduct = productArray.filter(resultFilter({ ...filter }));
  // .sort(resultSort(sort));

  return (
    <div>
      <Header />
      <div className="shop">
        <div className="hero">
          <div className="text">
            <h2>Buy Trading Cards Fast</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <div className="socials">
              {social.map((item, key) => {
                return <img src={item} key={key} alt={`${item}`} />;
              })}
            </div>
          </div>
        </div>
        <h2 style={{ textAlign: "center", padding: "30px 10px" }}>Shop</h2>

        <ShopFilter
          filter={filter}
          setFilter={setFilter}
          filterArray={filterArray}
          setSort={setSort}
        />

        <h1>&nbsp;</h1>

        <ShopPagination data={finalProduct} filter={filter} />
      </div>
    </div>
  );
}
