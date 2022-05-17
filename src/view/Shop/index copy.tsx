// import React, { useState } from "react";
// import "./style.scss";
// import product from "./result.json";
// import ShopPagination from "../PaginationWrapper/ShopPagination";
// import ShopFilter from "../../components/ShopFilter";
// import resultFilter from "../../helpers/filter";
// import resultSort from "../../helpers/sort";
// import Header from "../../components/Header";
// import { ShopContextType } from "../../@types/shop.d";
// import { ShopContext } from "../../context/ShopContext";
// export default function Shop() {
//   // the api call will be made here
//   const [showCart, setShowCart] = useState(false);
//   const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
//   const [filter, setFilter] = useState({});
//   const [sort, setSort] = useState("");
//   const productArray = product.products.data.items;
//   const finalProduct = productArray
//     .filter(resultFilter(filter))
//     .sort(resultSort(sort));
//   //
//   return (
//     <div className="shop">
//       <p
//         onClick={() => {
//           setShowCart(!showCart);
//         }}
//       >
//         Cart, {cart.length}
//       </p>
//       <CartDropDown showCart={showCart} />
//       <p>CheckOut
//       </p>
//       <ShopFilter filter={filter} setFilter={setFilter} setSort={setSort} />
//       <ShopPagination data={finalProduct} filter={filter} />
//     </div>
//   );
// }
// const CartDropDown = ({ showCart }: { showCart: boolean }) => {
//   const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;

//   return (
//     <div className="cart-drop-down">
//       {showCart && (
//         <>
//           {cart.map((item: any, index: any) => {
//             const increaseQuantity = () => {
//               item.quantity = item.quantity + 1;
//               setCart([...cart]);
//             };
//             const reduceQuantity = () => {
//               if (item.quantity < 2) {
//                 cart.splice(cart.indexOf(item), 1);
//               } else {
//                 item.quantity = item.quantity - 1;
//               }
//               setCart([...cart]);
//             };
//             return (
//               <p className="drop-down-options" key={index}>
//                 {item.name}
//                 <h2 onClick={increaseQuantity}>+</h2> {item.quantity}{" "}
//                 <h2 onClick={reduceQuantity}>-</h2>
//               </p>
//             );
//           })}
//         </>
//       )}
//     </div>
//   );
// };


import React from 'react'

export default function IndexCopy() {
  return (
    <div>IndexCopy</div>
  )
}
