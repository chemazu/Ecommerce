import React from "react";
import "./style.scss";
import Button from "../../components/Button";
import importContent from "../../resources/importContent";

export default function OrderConfirmation() {
  let user = {
    name: "Chukwuemeka",
    number: "08021232323",
    email: "email@email.com",
    address: "No.1, street, town, state, country",
  };
  let { sample } = importContent();

  return (
    <div className="order">
      <p>Your order has been created and will be shipping soon</p>
      <div className="order-info">
        <div className="order-info-item">
          <p>Order Date</p>
          <p>18 march 2021</p>
        </div>{" "}
        <div className="order-info-item">
          <p>Order ID</p>
          <p>18 march 2021</p>
        </div>{" "}
        <div className="order-info-item">
          <p>Order Date</p>
          <p>18 march 2021</p>
        </div>
        <div className="order-info-item">
          <p>Payment</p>
          <p>18 march 2021</p>
        </div>
        <div className="order-info-item">
          <p>Addresss</p>
          <p>18 march 2021</p>
        </div>
      </div>
      <div className="order-breakdown"></div>
      <div className="price-breakdown"></div>
      <div className="total"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat
        commodi magni voluptates culpa officiis aspernatur.
      </p>
      <p>Thank you</p>
    </div>
  );
}
