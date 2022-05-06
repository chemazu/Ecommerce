import React, { useState } from "react";
import "./style.scss";
import product from "./result.json";
import ShopPagination from "../PaginationWrapper/ShopPagination";
import ShopFilter from "../../components/ShopFilter";
import resultFilter from "../../helpers/fitler";

export default function Shop() {
  // the api call will be made here
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  console.log(product);
  const productArray = product.products.data.items;
  console.log(productArray.filter(resultFilter(filter)));
  

  return (
    <div className="shop">
      <ShopFilter filter={filter} setFilter={setFilter} />
      <ShopPagination data={productArray} filter={filter} />
    </div>
  );
}
