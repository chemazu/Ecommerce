import * as React from "react";
import "./style.scss";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import importContent from "../../resources/importContent";

export default function Cart() {
  let { sample } = importContent();
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;

  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };
  console.log(cart);

  return (
    <div>
      <div className="cart-page">
        <div className="cart-items">
          <h2>Shopping Cart</h2>
          <div className="table">
            <div className="table-heading">
              <span> </span>
              <span> </span>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Sub Total</span>
            </div>
            {cart.map((item, index) => {
              return <TableBody key={index} item={item} />;
            })}
          </div>
          <p
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </p>
        </div>
        <div className="cart-total"></div>
      </div>
    </div>
  );
}
const TableBody = ({ item }: any) => {
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;

  let { sample } = importContent();
  // destructure image from item
  let { name, price, quantity, id } = item;
  let checkifItemExists = cart.find((item: any) => item.id === id);
  const reduceQuantity = () => {};
  const removeFromCart = () => {
    if (checkifItemExists) {
      cart.map((item: any) => {
        if (item.id === id) {
          cart.splice(cart.indexOf(item), 1);
        }
      });
      setCart([...cart]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  // const removeFromCart = (id: any) => {
  //   if (checkifItemExists) {
  //     cart.map((item: any) => {
  //       if (item.id === id) {
  //         if (item.quantity > 1) {
  //           item.quantity -= 1;
  //         } else {
  //           cart.splice(cart.indexOf(item), 1);
  //         }
  //       }
  //     });
  //     setCart([...cart]);
  //   } else {
  //     cart.map((item: any) => item.filter((item: any) => item.id !== id));
  //     setCart([...cart]);
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cart));
  // };
  return (
    <div className="table-body">
      <h2 onClick={removeFromCart}>X</h2>
      <img src={sample} className="cart-item-image" />
      <span>{name}</span>
      <span>{price} </span>
      <span>{quantity} </span>
      <span>{quantity * price} </span>
      {/* <Button title="Remove" className="pry" onClick={removeFromCart} /> */}
    </div>
  );
};
