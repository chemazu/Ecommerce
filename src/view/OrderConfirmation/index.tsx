import React from "react";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import "./style.scss";
import Button from "../../components/Button";
import importContent from "../../resources/importContent";

export default function OrderConfirmation() {
  const { cart } = React.useContext(ShopContext) as ShopContextType;

  let user = {
    name: "Chukwuemeka",
    number: "08021232323",
    email: "email@email.com",
    address: "No.1, street, town, state, country",
  };
  let { sample } = importContent();
  const getTotalPrice = () => {
    let total = 0;
    cart.map((item: any) => {
      total += Number(item.price * item.quantity);
    });
    return Number(((total + 15) * 100).toFixed(2));
  };
  return (
    <div className="order-wrapper">
      <div className="order">
        <p className="thanks">
          Your order has been created and will be shipping soon
        </p>
        <div className="order-info">
          <div className="order-info-item">
            <h3>Order Date</h3>
            <p>18 march 2021</p>
          </div>{" "}
          <div className="order-info-item">
            <h3>Order ID</h3>
            <p>18 march 2021</p>
          </div>{" "}
          <div className="order-info-item">
            <h3>Order Date</h3>
            <p>18 march 2021</p>
          </div>
          <div className="order-info-item">
            <h3>Payment</h3>
            <p>18 march 2021</p>
          </div>
          <div className="order-info-item">
            <h3>Address</h3>
            <p>18 march 2021</p>
          </div>
        </div>
        <div className="order-breakdown">
          <table>
            <tbody>
              {cart.map((item, index) => {
                return <TableBody key={index} item={item} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="price-breakdown">
          <div className="breakdown-item">
            <p>Sub Total</p>
            <p>10</p>
          </div>
          <div className="breakdown-item">
            <p>Express Shipping</p>
            <p>10</p>
          </div>{" "}
          <div className="breakdown-item">
            <p>Taxes</p>
            <p>10</p>
          </div>{" "}
          <div className="breakdown-item">
            <p>Discount</p>
            <p>10</p>
          </div>
        </div>
        <div className="total">
          <p>Total</p>
          <p> ₦ {getTotalPrice() / 100}</p>
        </div>
        <p className="thanks">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat
          commodi magni voluptates culpa officiis aspernatur.
        </p>
        <p className="thanks">Thank you</p>
      </div>
    </div>
  );
}
let TableBody = ({ item }: any) => {
  let sample = require(`../../resources/ecommerce-products/${item.img1}`);
  let { name, price, quantity } = item;
  return (
    <tr>
      <img src={sample} className="cart-item-image" alt={name} />
      <td>{name}</td>
      <td>₦{price}</td>
      <td>{quantity}</td>
      <td>₦{(quantity * price).toFixed(2)} </td>
    </tr>
  );
};
