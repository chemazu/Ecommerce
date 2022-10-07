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
      <div className="thanks">
        <h2 className="highlight-1">Stacked</h2>
        <div className="intro">
          <h2>Thank you,{user.name}</h2>
          <p>Your Order has been Confirmed</p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>{user.name}</p>
          <p>{user.number}</p>
          <p>{user.email}</p>
        </div>
        <div className="shipping">
          <h2>Shipping</h2>
          <p>{user.name}</p>
          <p>{user.address}</p>
        </div>
        <div className="delivery">
          <h2>Delivery</h2>
          <p>Standard Between 5- 7 </p>
        </div>
        <div className="foot-text">
          <p>lorem ipsum dolo mel altima camry ot d</p>
        </div>
      </div>
      <div className="order-details">
        <h3>Items in shippment</h3>
        <div className="product-card">
          <img
            src={sample}
            alt="sample"
            style={{ width: "200px", height: "100px" }}
          />
          <div className="product-details">
            <h3>Super Cali Thunder Card</h3>
            <p>Quantity:23</p>
          </div>
          <div className="price">$99.99</div>
        </div>

        <div className="order-total">
          <h2>Cart Total</h2>
          <div className="price-breakdown">
            <div className="sub-total">
              <h4>Sub Total</h4>
              <p>10,000</p>
            </div>
            <div className="shipping-cost-wrapper">
              <h4>shipping cost</h4>

              <div className="shipping-cost">
                <p>₦15.00</p>
              </div>
            </div>
            <div className="total">
              <h2>Total</h2>
              <p>₦10,000</p>
            </div>
          </div>
          <Button title="Continue Shopping" className="pry" />
        </div>
      </div>
    </div>
  );
}
