import React, { useState } from "react";
import "./style.scss";
import product from "./result.json";
import ShopPagination from "../PaginationWrapper/ShopPagination";
import ShopFilter from "../../components/ShopFilter";
import resultFilter from "../../helpers/fitler";

export default function Shop() {
  // the api call will be made here
  const [filter, setFitler] = useState({});
  let testFitler = {  };

  console.log(product);
  const productArray = product.products.data.items;
  console.log(productArray.filter(resultFilter(testFitler)));

  return (
    <div className="shop">
      <ShopFilter />
      {/* <ShopPagination data={productArray} /> */}
    </div>
  );
}
