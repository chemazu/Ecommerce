import React,{useState} from "react";
import Card from "../../view/Card";
import Button from "../Button";

export default function ShopItem({
  title,
  filter,
}: {
  title: string;
  filter: any;
}) {
  const [front,setFront] = useState(true);
  return (
    <div>
      <Card title={title} front={front} />
      <Button title="Add to cart" className="checkout" />
      <Button title="Flip Card" className="pry" onClick={()=>{setFront(!front)}} />
    </div>
  );
}
