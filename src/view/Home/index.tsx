import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import importContent from "../../resources/importContent";
import "./style.scss";
export default function Home() {
  const history = useNavigate();
  const {
    up,
    person,
    facebook,
    instagram,
    twitter,
    youtube,
    pinterest,
    flag,
    heroImage,
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
  } = importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  const sponsor = [sponsor1, sponsor2, sponsor3, sponsor4];
  return (
    <div className="home">
      {/* <Header /> */}
      <div className="home-desktop">
        <div className="hero">
          <div className="text">
            <h3 className="highlight">Stacked</h3>
            <h1>Stay connected</h1>
            <h1 style={{ paddingBottom: "20px" }}>buy trading cards</h1>
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
                className="pry"
              />
            </div>
            <div className="socials">
              {social.map((item, index) => {
                return <Link to="/#"><img src={item} alt={`${item}`} key={index} /></Link>;
              })}
            </div>
          </div>
          <div className="image">
            <img src={heroImage} alt="" />
          </div>
        </div>
        <div className="mobile-hero">
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
                className="pry"
              />
            </div>
          </div>
          {/* <div className="image">
            <img src={heroImage} alt="" />
          </div> */}
        </div>
        <div className="sponsors">
          {sponsor.map((item, index) => (
            <img src={item} alt={`${item}`} />
          ))}
        </div>
        <div className="our-brand">
          <div className="text mobile" style={{ paddingTop: "20px" }}>
            <h1 className="mobile">Our Brand</h1>
          </div>
          <div className="brand-image"></div>
          <div className="text">
            <h1 className="not-mobile">Our Brand</h1>
            <p style={{ paddingTop: "20px" }}>
              want de afgelopen jaren hebben een groot aantal mensen aangegeven
              dat essentiële oliën hun fysieke en mentale welzijn verbetert
            </p>
            <p style={{ padding: "20px 0" }}>
              want de afgelopen jaren hebben een groot aantal mensen aangegeven
              dat essentiële oliën hun fysieke en mentale welzijn verbetert
            </p>
            <Button
              title="Shop Now"
              onClick={() => {
                history("/shop");
              }}
              type=""
              className="pry"
            />
          </div>
        </div>

        <div className="call-to-action">
          <h1>Dont hesistate to take the best path foward </h1>
          {/* <h1 className="highlight">the best path foward</h1> */}
          <div className="stats">
            <div className="stat">
              <div className="stat-top">
                <img src={flag} alt="flag" />
                <h1>6x</h1>
                <h4>Increase Consumer</h4>
              </div>

              <p className="stat-text">
                Use one platform to sell products to anyone anywhere-in person
                with point of sale
              </p>
            </div>
            <div className="stat">
              <div className="stat-top">
                <img src={up} alt="up" />
                <h1>15%</h1>
                <h4>Easier than conventional</h4>
              </div>

              <p className="stat-text">
                Use one platform to sell products to anyone anywhere-in person
                with point of sale
              </p>
            </div>
            <div className="stat">
              <div className="stat-top">
                <img src={person} alt="flag" />
                <h1>23k</h1>
                <h4>Active Merchants</h4>
              </div>

              <p className="stat-text">
                Use one platform to sell products to anyone anywhere-in person
                with point of sale
              </p>
            </div>
          </div>
          <Button
            title="Shop Now"
            onClick={() => {
              history("/shop");
            }}
            type=""
            className="pry"
          />
        </div>
      </div>
      <div className="mobile">
        {/* <div className="mobile-hero">
          <div className="text">
            <h2>Stay connected</h2>
            <h2 style={{ paddingBottom: "20px" }}>Buy trading cards</h2>
            <p style={{ paddingBottom: "10px" }}>
              Buy the best trading cards, sport, comic,NFTs
            </p>
            <p>Manage collection ,stay up to date with the best deals</p>
          </div>
        </div> */}
      </div>
      <div className="dummy-footer" style={{ padding: "20px 0" }}></div>
    </div>
  );
}
