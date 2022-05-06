import React from 'react'
import "./style.scss"
import importContent from "../../resources/importContent";


export default function Card({title}:{title?:string}) {
  return (
    <div className="card-front">
            <div className="upper">
              {/* <img src={marvel} /> */}
            </div>
            <div className="image"></div>
            <div className="text">
              <h4>{title}</h4>
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
  )
}
