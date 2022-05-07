import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import importContent from "../../resources/importContent";
import "./style.scss";

export default function Home() {
  const history = useNavigate();
  const { facebook, instagram, twitter, youtube, pinterest, marvel } =
    importContent();
  const social = [facebook, instagram, twitter, youtube, pinterest];
  return (
    <div>
      {/* <Header/> */}
      <div className="hero">
        <div className="text">
          <p className="highlight">Stacked</p>
          <h2>Buy Trading Cards Fast</h2>
          <h2 style={{paddingBottom:"10px"}}>Stay Connected</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
    
          <Button
            title="Shop Now"
            onClick={() => {
            history("/shop");
            }}
            type=""
            className="sec"
          />
          
          <div className="socials">
            {social.map((item) => {
              return <img src={item} />;
            })}
          </div>
        </div>
        <div className="img">
          <div className="card-front">
            <div className="upper">
              <img src={marvel} />
            </div>
            <div className="image"></div>
            <div className="text">
              <h4>SpiderMan</h4>
              <p>
                Lorem ipsum dolor sit ametonsectetur adipiscing elit, sed do
                eiusmod tempor, consectetur adipiscing elit, sed do
              
              </p>
              <div className="div">
                <p> incididunt </p>
                <p> incididunt </p>

                <p> incididunt </p>

              </div>
            </div>
          </div>
          <div className="card-back">
            <div className="image"></div>
            <div className="text"></div>
          </div>
        </div>
      </div>
      <div className="features"></div>
      <div className="partners"></div>
      <div className="testimonial"></div>
      <div className="contact"></div>
      <div className="footer"></div>
    </div>
  );
}
