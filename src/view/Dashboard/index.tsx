import React from "react";
import "./style.scss";
import importContent from "../../resources/importContent";
import OrderItem from "../../components/OrderItem";

export default function Dashboard() {
  const { contact,bag,trend } = importContent();
  const n = 3; // Or something else you want to get the length of
  //  get signed in user

  return (
    <div className="dashboard">
      <div className="left"> 
      <p>Dashboard</p>
      <p>Shop</p>
      <p>Profile</p>
      <p>Cart</p>
      <p>logout</p>   </div>
   
      <div className="right">
        <h2>
        Dashboard Hi ,Chukwuemeka

        </h2>
        <div className="top">
        
            <div className="one users">
              <img src={contact} alt="Users" />
              <h3>Users</h3>
              <p>239,233</p>
              <p style={{borderTop:"1px solid #fff", width:"90%"}}>
                Lorem ipsum dolor.
              </p>
            </div>
            <div className="one sales">
              <img src={bag} alt="Users" />
              <h3>Sales</h3>
              <p>$ 239,233</p>
              <p style={{borderTop:"1px solid #fff", width:"90%"}}>
                Lorem ipsum dolor.
              </p>
            </div>
            <div className="one trend">
              <img src={trend} alt="Users" />
              <h3>Trending</h3>
              <p>239,233</p>
              <p style={{borderTop:"1px solid #fff", width:"90%"}}>
                Lorem ipsum dolor.
              </p>
            </div>
 
          {/* [...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>) */}
          {/* <div className="one">Sales</div>
                <div className="one">trending</div> */}
        </div>
        <div className="bottom">
          <div className="two">
            <h2>Order History</h2>
            <div className="heading">
                <div className="id">
                  <h3>Id</h3></div>
                  <div className="img">
                  <h3>Image</h3></div>
                <div className="product"><h3>Product</h3></div>
                <div className="price">
                <h3>Price</h3>
                </div>
                <div className="quantity"><h3>Quantity</h3></div>
            </div>
            <div className="body">
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
            </div>
          </div>
          <div className="three">Wishlist</div>
        </div>
      </div>
    </div>
  );
}
