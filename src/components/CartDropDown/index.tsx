import React from "react";
import "./style.scss";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";

export default function CartDropDown() {
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };
  return (
    <div className="cart-drop-down-wrapper">
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
              <div className="item-name">
                <p>{item.name}</p>
              </div>
              <div className="controls">
                {" "}
                <p onClick={increaseQuantity}>+</p>
                <h4> {item.quantity}</h4>
                <p onClick={reduceQuantity}>-</p>
              </div>
            </div>
          );
        })}
      </div>
      <p
        onClick={() => {
          localStorage.setItem("cart", JSON.stringify([]));
          setCart([]);
        }}
      >
        Clear Cart
      </p>
    </div>
  );
}
