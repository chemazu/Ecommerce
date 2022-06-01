import React, { useState } from "react";
// import { addToCart } from "../../helpers/addToCart";
import Card from "../../view/Card";
import Button from "../Button";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";

export default function ShopItem({ item, filter }: { item: any; filter: any }) {
  const [front, setFront] = useState(true);
  const { price, name, id } = item;
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  let checkifItemExists = cart.find((item: any) => item.id === id);
  
  const addToCart = () => {
    if (checkifItemExists) {
      cart.map((item: any) => {
        if (item.id === id) {
          item.quantity += 1;
        }
      });
      setCart([...cart]);
    } else {
      setCart([...cart, { id, name, price, quantity: 1 }]);
    }
    // check if this is correct
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  const removeFromCart = () => {
    if (checkifItemExists) {
      cart.map((item: any) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            cart.splice(cart.indexOf(item), 1);
          }
        }
      });
      setCart([...cart]);
    } else {
      cart.map((item: any) => item.filter((item: any) => item.id !== id));
      setCart([...cart]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };
  return (
    <div>
      <Card title={name} front={front} />
      <Button title="Add to cart" className="addtocart" onClick={addToCart} />
      <Button
        title="Flip Card"
        className="pry"
        onClick={() => {
          setFront(!front);
        }}
      />
      {/* <Button title="Remove" className="pry" onClick={removeFromCart} />

      <Button title="Clear Cart" className="pry" onClick={clearCart} /> */}
    </div>
  );
}
