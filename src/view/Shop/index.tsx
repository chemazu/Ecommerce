import React, { useState } from "react";
import ShopFilter from "../../components/ShopFilter";
import importContent from "../../resources/importContent";
import product from "./result.json";
import ShopHeader from "../../components/ShopHeader";
import "./style.scss";
import Button from "../../components/Button";
import ShopPagination from "../PaginationWrapper/ShopPagination";
import resultFilter from "../../helpers/filter";
import resultSort from "../../helpers/sort";

export default function Shop() {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const { facebook, instagram, twitter, youtube, pinterest, cartsvg } =
    importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  const filterArray = [
    {
      title: "Catergory",
      content: ["accessories1", "apparel1", "bags1", "drinkware1"],
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
  const finalProduct = productArray
    .filter(resultFilter(filter))
    .sort(resultSort(sort));

  return (
    <div>
      <ShopHeader />
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
        <ShopFilter
          filter={filter}
          setFilter={setFilter}
          filterArray={filterArray}
          setSort={setSort}
        />
        <h2 style={{ textAlign: "center" }}>SHOP</h2>
        <ShopPagination data={finalProduct} filter={filter} />
      </div>
    </div>
  );
}
