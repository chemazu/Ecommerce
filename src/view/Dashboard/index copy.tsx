import React from "react";
import "./style.scss";
import importContent from "../../resources/importContent";
import OrderItem from "../../components/OrderItem";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../@types/auth.d";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ShopContextType } from "../../@types/shop.d";
import { ShopContext } from "../../context/ShopContext";

function Dashboard() {
  const history = useNavigate();
  const { contact, bag, trend } = importContent();
  const { logout } = React.useContext(AuthContext) as AuthContextType;
  const { isAuth, setIsAuth } = React.useContext(
    ShopContext
  ) as ShopContextType;

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    setIsAuth(false);
    history("/login");
  };

  return (
    <div className="dashboard">
      <div className="left">
        <p>Dashboard</p>
        <p>Orders</p>
        <p>Profile</p>
        <p>Cart</p>
        <Button
          title="Log Out"
          className="pry"
          type="submit"
          onClick={handleLogout}
        />
      </div>

      <div className="right">
        <h2>Dashboard Hi ,Chukwuemeka</h2>
        <div className="top">
          <div className="one users">
            <img src={contact} alt="Users" />
            <h3>Users</h3>
            <p>239,233</p>
            <p style={{ borderTop: "1px solid #fff", width: "90%" }}>
              Lorem ipsum dolor.
            </p>
          </div>
          <div className="one sales">
            <img src={bag} alt="Users" />
            <h3>Sales</h3>
            <p>$ 239,233</p>
            <p style={{ borderTop: "1px solid #fff", width: "90%" }}>
              Lorem ipsum dolor.
            </p>
          </div>
          <div className="one trend">
            <img src={trend} alt="Users" />
            <h3>Trending</h3>
            <p>239,233</p>
            <p style={{ borderTop: "1px solid #fff", width: "90%" }}>
              Lorem ipsum dolor.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="two">
            <h2>Order History</h2>
            <div className="heading">
              <div className="id">
                <h3>Id</h3>
              </div>
              <div className="img">
                <h3>Image</h3>
              </div>
              <div className="product">
                <h3>Product</h3>
              </div>
              <div className="price">
                <h3>Price</h3>
              </div>
              <div className="quantity">
                <h3>Quantity</h3>
              </div>
            </div>
            <div className="body">
              <OrderItem />
            </div>
          </div>
          <div className="three">Wishlist</div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
