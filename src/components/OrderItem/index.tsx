import React from "react";
import importContent from "../../resources/importContent";
import "./style.scss";

export default function OrderItem() {
    const {batman}=importContent()

    const item ={id:1,img:batman,title:"The Batman year 1 2021 ",price:"$100",quantity:"1"}

    const {id,img,title,price,quantity}=item
  return (
    <div className=" order-item">
      <div className="id">
        <h3>{id}</h3>
      </div>
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <div className="product">
        <h3>{title}</h3>
      </div>
      <div className="price">
        <h3>{price}</h3>
      </div>
      <div className="quantity">
        <h3>{quantity}</h3>
      </div>
    </div>
  );
}
