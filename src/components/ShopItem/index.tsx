import React, { useState } from "react";
// import { addToCart } from "../../helpers/addToCart";
import Card from "../../view/Card";
import Button from "../Button";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";

export default function ShopItem({ item, filter }: { item: any; filter: any }) {
  const [front, setFront] = useState(true);
  // addToCart
  const { price, name, id } = item;
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  console.log(cart, JSON.parse(localStorage.getItem("cart") || "[]"), "ONE");

  const addToCart = () => {
    setCart([...cart, { id, name, price }]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { id, name, price }])
    );
    console.log(cart, JSON.parse(localStorage.getItem("cart") || "[]"), "TWO");
  };

  return (
    <div>
      <Card title={name} front={front} />
      <Button title="Add to cart" className="checkout" onClick={addToCart} />
      <Button
        title="Flip Card"
        className="pry"
        onClick={() => {
          setFront(!front);
        }}
      />
    </div>
  );
}
