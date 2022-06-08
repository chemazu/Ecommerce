import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

import importContent from "../../resources/importContent";
import "./style.scss";

export default function Home() {
  const history = useNavigate();
  const {
    facebook,
    instagram,
    twitter,
    youtube,
    pinterest,
    marvel,
    heroImage,
  } = importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  return (
    <div className="home">
      <Header />
      <div className="hero">
        <div className="text">
          <h2>Stay connected</h2>
          <h2>Buy trading cards fast</h2>
          <p>Buy the best trading cards, sport, comic,NFTs</p>
          <p>Manage collection ,stay up to date with the best deals</p>
        </div>
        <div className="image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}
