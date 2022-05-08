import React, { useState } from "react";
import "./style.scss";
import product from "./result.json";
import ShopPagination from "../PaginationWrapper/ShopPagination";
import ShopFilter from "../../components/ShopFilter";
import resultFilter from "../../helpers/filter";
import resultSort from "../../helpers/sort";
import Header from "../../components/Header";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";
export default function Shop() {
  // the api call will be made here
  const [showCart, setShowCart] = useState(false);

  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const productArray = product.products.data.items;
  const finalProduct = productArray
    .filter(resultFilter(filter))
    .sort(resultSort(sort));
  //
  return (
    <div className="shop">
      <p
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        Cart, {cart.length}
      </p>
      <CartDropDown cart={cart} showCart={showCart} />
      <ShopFilter filter={filter} setFilter={setFilter} setSort={setSort} />
      <ShopPagination data={finalProduct} filter={filter} />
    </div>
  );
}
const CartDropDown = ({ cart, showCart }: { cart: any; showCart: boolean }) => {
  return (
    <div className="cart-drop-down">
      {showCart && (
        <>
          {cart.map((item: any, index: any) => {
            return (
              <p className="drop-down-options" key={index}>
                {item.name}
                {item.quantity}
              </p>
            );
          })}
        </>
      )}
    </div>
  );
};
