import * as React from "react";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";

export default function Cart() {
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  //return an array with cart items,and number of items in the cart as well as afunction to remove cart items
  const [cartItems, setCartItems] = React.useState(cart);
  const [cartItemsNumber, setCartItemsNumber] = React.useState(cart.length);
// const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const unique = Array.from(new Set(numbers));

console.log(unique);
// [ 1, 2, 3, 4, 5, 6 ]
  return (
    <div>
      {cart.map((item, index) => {
        return <p key={index}>{item.id}</p>;
      })}
    </div>
  );
}
