import React from "react";
import "./style.scss";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";

export default function CartDropDown() {
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  return (
    <div className="cart-drop-down">
      {cart.map((item: any, index: any) => {
        const increaseQuantity = () => {
          item.quantity = item.quantity + 1;
          setCart([...cart]);
        };
        const reduceQuantity = () => {
          if (item.quantity < 2) {
            cart.splice(cart.indexOf(item), 1);
          } else {
            item.quantity = item.quantity - 1;
          }
          setCart([...cart]);
        };
        return (
          <div className="drop-down-options" key={index}>
            <p>{item.name}</p>
            <p onClick={increaseQuantity}>+</p>
            <h4> {item.quantity}</h4>
            <p onClick={reduceQuantity}>-</p>
          </div>
        );
      })}
      Clear Cart
    </div>
  );
}
