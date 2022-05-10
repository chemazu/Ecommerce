import React from "react";
import ShopFilter from "../../components/ShopFilter";

import ShopHeader from "../../components/ShopHeader";
import "./style.scss";

export default function Shop() {
  return (
    <>
      <ShopHeader />
      <div className="shop">
   <div className="shop-filter">
     <div className="sort"></div>
     <div className="filter"></div>
   </div>
      </div>
    </>
  );
}
