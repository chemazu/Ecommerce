import * as React from "react";
import "./style.scss";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import importContent from "../../resources/importContent";
import Button from "../../components/Button";

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

          <Button
            title="Clear Cart"
            className="pry"
            onClick={() => {
              clearCart();
            }}
          />
        </div>
        <div className="cart-total">
          <h4>Cart Totals</h4>
          <div className="price-breakdown">
            <div className="sub-total">
              <h4>Sub Total</h4>
              <p>$350.00</p>
            </div>
            <div className="shipping">
              <h4>Shipping</h4>
              <div className="shipping-cost">
                <p>$350.00</p>
                <p>$350.00</p>
                <p>$350.00</p>
              </div>
            </div>
            <div className="total">
              <h2>Total</h2>
              <p>$350.00</p>
            </div>
          </div>

          <Button
            title="Proceed to Checkout"
            className="pry"
            onClick={() => {
              clearCart();
            }}
          />
        </div>
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

  const increaseQuantity = () => {
    cart.map((item: any) => {
      if (item.id === id) {
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
        if (item.id === id) {
          cart.splice(cart.indexOf(item), 1);
        }
      });
      setCart([...cart]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const decreaseQuantity = () => {
    cart.map((item: any) => {
      if (item.id === id) {
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
  return (
    <div className="table-body">
      <h3 onClick={removeFromCart}>X</h3>
      <img src={sample} className="cart-item-image" />
      <span>{name}</span>
      <span>{price} </span>
      <span>
        <span style={{ paddingRight: "10px" }} onClick={increaseQuantity}>
          +
        </span>
        <span>{quantity}</span>
        <span onClick={decreaseQuantity} style={{ paddingLeft: "10px" }}>
          -
        </span>
      </span>
      <span>{(quantity * price).toFixed(2)} </span>
      {/* <Button title="Remove" className="pry" onClick={removeFromCart} /> */}
    </div>
  );
};
