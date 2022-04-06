import React from 'react'
import "./style.scss"
import importContent from "../../resources/importContent"


export default function Dashboard() {
  const {contact}= importContent()
  return (
    <div className='dashboard'>
        <div className="left">
          Dashboard
          shop
          logout
          profile
          cart
        </div>
        <div className="right">
        Dashboard
        Hi ,Chukwuemeka
            <div className="top">
                <div className="one">
                  <img src={contact} alt="Users"/>
                  Users
                  </div>
                <div className="one">Sales</div>
                <div className="one">trending</div>
            </div>
            <div className="bottom">
            <div className="two">Orders</div>
                <div className="three">Wishlist</div>
            </div>
        </div>
    </div>
  )
}
