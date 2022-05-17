import React from "react";
import "./style.scss";

export default function Button(prop: { title: string; className: string; type?:any; onClick?: any   }) {
  const { title } = prop;
  return <button {...prop}>{title}</button>;
}
