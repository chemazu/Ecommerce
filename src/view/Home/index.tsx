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
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    brand,
    homebg
  } = importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  const sponsor = [sponsor1, sponsor2, sponsor3, sponsor4];
  return (
    <div className="home">
      <Header />

      <div className="home-desktop">
        <div className="hero">
          <div className="text">
            <h3 className="highlight">Stacked</h3>
            <h2>Stay connected</h2>
            <h2 style={{ paddingBottom: "20px" }}>Buy trading cards</h2>
            <p style={{ paddingBottom: "10px" }}>
              Buy the best trading cards, sport, comic,NFTs
            </p>
            <p>Manage collection ,stay up to date with the best deals</p>
            <div className="home-button-wrapper" style={{ padding: "20px 0" }}>
              <Button
                title="Shop Now"
                onClick={() => {
                  history("/shop");
                }}
                type=""
                className="sec"
              />
            </div>
          </div>
          <div className="image">
            <img src={heroImage} alt="" />
     {/* <img src={homebg}/> */}
            {/* <div className="square-div"></div> */}
            {/* <div className="square-div2"></div>
            <div className="square-div3"></div>
            <div className="square-div4"></div> */}
          </div>
        </div>
        <div className="sponsors">
          {sponsor.map((item, index) => (
            <img src={item} alt={`${item}`} />
          ))}
        </div>
        <div className="our-brand">
          <img src={brand} alt="brand" />
          <div className="text">
            <h3 className="highlight">Our Brand</h3>
            <p>
              want de afgelopen jaren hebben een groot aantal mensen aangegeven
              dat essentiële oliën hun fysieke en mentale welzijn verbetert
            </p>
          </div>
        </div>
        <div className="call-to-action"></div>
      </div>
      <div className="mobile">
        <div className="mobile-hero">
          <div className="text">
            <h2>Stay connected</h2>
            <h2 style={{ paddingBottom: "20px" }}>Buy trading cards</h2>
            <p style={{ paddingBottom: "10px" }}>
              Buy the best trading cards, sport, comic,NFTs
            </p>
            <p>Manage collection ,stay up to date with the best deals</p>
            <div className="square-div"></div>
            <div className="square-div3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
