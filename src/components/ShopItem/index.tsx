import React from "react";
import Card from "../../view/Card";

export default function ShopItem({ title,filter }: { title: string,filter:any }) {
  return (
    <div>
      <Card title={title} />
      add to card, view back price trade for
    </div>
  );
}
