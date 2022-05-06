import React from "react";
import Card from "../../view/Card";

export default function ShopItem({ title }: { title: string }) {
  return (
    <div>
      <Card title={title} />
      add to card, view back price trade for
    </div>
  );
}
