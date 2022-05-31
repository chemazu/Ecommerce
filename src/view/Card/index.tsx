import React from "react";
import "./style.scss";
import importContent from "../../resources/importContent";

export default function Card({
  title,
  front,
}: {
  title?: string;
  front?: boolean;
}) {
  return (
    <>
      {front && (
        <div className="card-front">
          <div className="upper">{/* <img src={marvel} /> */}</div>
          <div className="image"></div>
          <div className="text">
            <h4>{title}</h4>
            <p>Lorem ipsum dolor sit ametonsectetur adipiscing elit,</p>
            <div className="div">
              <p> inc </p>
              <p> inc </p>
              <p> inc </p>
            </div>
          </div>
        </div>
      )}
      {!front && <div className="card-back">back</div>}
    </>
  );
}
