import React from "react";
import "./style.scss";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import importContent from "../../resources/importContent";

const CartItem = ({ item }: any) => {
  console.log(item);
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  // let { sample } = importContent();

  // destructure image from item
  let { name, price, quantity, id } = item;

  let checkifItemExists = cart.find((item: any) => item.id === id);

  const increaseQuantity = () => {
    cart.map((item: any) => {
      // if (item.id === id) {
      // use name to check
      if (item.name === name) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);

    // check if this is correct
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const removeFromCart = () => {
    if (checkifItemExists) {
      cart.map((item: any) => {
        if (item.name === name) {
          cart.splice(cart.indexOf(item), 1);
        }
      });
      setCart([...cart]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const decreaseQuantity = () => {
    cart.map((item: any) => {
      if (item.name === name) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          removeFromCart();
        }
        item.quantity -= 1;
      }
    });
    setCart([...cart]);

    // check if this is correct
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
  const { trash } = importContent();

  return (
    <div className="checkout-item">
      <div className="left">
        <p>{quantity}x</p>
        <p>{name}</p>
      </div>
      <div className="right">
        {" "}
        <p>{(quantity * price).toFixed(2)} </p>
        <img onClick={removeFromCart} src={trash} />
      </div>

      {/* <p style={{ padding: " 0 20px" }}>{price} </p> */}

      {/* <Button title="Remove" className="pry" onClick={removeFromCart} /> */}
    </div>
  );
};
export default CartItem;
