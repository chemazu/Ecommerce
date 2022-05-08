import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./style.scss";
import product from "./result.json";
import ShopPagination from "../PaginationWrapper/ShopPagination";
import ShopFilter from "../../components/ShopFilter";
import resultFilter from "../../helpers/filter";
import resultSort from "../../helpers/sort";
import ShopProvider from "../../context/ShopContext";
import Cart from "../Cart";

export default function Shop() {
  // the api call will be made here
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const productArray = product.products.data.items;
  const finalProduct = productArray
    .filter(resultFilter(filter))
    .sort(resultSort(sort));

  // create a context to pass the data
  return (
    <div className="shop">
      <ShopProvider>
        <ShopFilter filter={filter} setFilter={setFilter} setSort={setSort} />
        <ShopPagination data={finalProduct} filter={filter} />
        <Routes>
          <Route path="/shop/cart" element={<Cart />} />
        </Routes>
      </ShopProvider>
    </div>
  );
}
