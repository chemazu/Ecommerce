import React from "react";
import ShopFilter from "../../components/ShopFilter";
import importContent from "../../resources/importContent";

import ShopHeader from "../../components/ShopHeader";
import "./style.scss";
import Button from "../../components/Button";

export default function Shop() {
  const { facebook, instagram, twitter, youtube, pinterest, cartsvg } =
    importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  return (
    <div>
      <ShopHeader />
      <div className="shop">
        <div className="hero">
          <div className="text">
            <h2>Buy Trading Cards Fast</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>

            <div className="socials">
              {social.map((item) => {
                return <img src={item} />;
              })}
            </div>
          </div>
        </div>
        <ShopFilter />
      </div>
    </div>
  );
}
