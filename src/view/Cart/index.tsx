import * as React from "react";
import "./style.scss";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import importContent from "../../resources/importContent";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let navigate = useNavigate();;
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };
  const getTotalPrice = () => {
    let total = 0;
    cart.map((item: any) => {
      total += Number(item.price * item.quantity);
    });
    return total.toFixed(2);
  };
  let finalTotal = 15 + Number(getTotalPrice());

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
              <span style={{ padding: " 0 20px" }}>Price</span>
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
          <h2>Cart Total</h2>
          <div className="price-breakdown">
            <div className="sub-total">
              <h4>Sub Total</h4>
              <p>{getTotalPrice()}</p>
            </div>
            <div className="shipping">
              <h4>shipping cost</h4>

              <div className="shipping-cost">
                <p>₦15.00</p>
              </div>
            </div>
            <div className="total">
              <h2>Total</h2>
              <p>₦{finalTotal}</p>
            </div>
          </div>

          <Button
            // title={`Pay ₦${finalTotal}`}
            title="Proceed to Checkout"
            className="checkout"
            onClick={() => {
                  navigate("/checkout");;
            }}
          />
        </div>
      </div>
    </div>
  );
}
const TableBody = ({ item }: any) => {
  console.log(item);
  const { cart, setCart } = React.useContext(ShopContext) as ShopContextType;
  // let { sample } = importContent();

  // destructure image from item
  let { name, price, quantity, id } = item;
  let sample = require(`../../resources/ecommerce-products/${item.img1}`);

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
  return (
    <div className="table-body">
      <h3 onClick={removeFromCart}>X</h3>
      <img src={sample} className="cart-item-image" />
   
      <span>{name}</span>
      <span style={{ padding: " 0 20px" }}>{price} </span>
      <span >
        <span style={{ paddingRight: "10px" }} onClick={increaseQuantity}>
          +
        </span>
        <span>{quantity}</span>
        <span onClick={decreaseQuantity} className="qtn-btn">
          -
        </span>
      </div>
      <span>{(quantity * price).toFixed(2)} </span>
      <Button title="Remove" className="pry" onClick={removeFromCart} /> 
    </div>
  );
};
