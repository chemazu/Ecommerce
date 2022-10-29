import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Register from "./view/Register";
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";
import AuthProvider from "../src/context/AuthContext";
import Home from "./view/Home";
import ProtectedRoute from "./view/ProtectedRoute";
import Shop from "./view/Shop";
import Cart from "./view/Cart";
import OrderConfirmation from "./view/OrderConfirmation";
import Checkout from "./view/Checkout";

import Wishlist from "./view/Wishlist";
import Header from "./components/Header";
import { ShopContextType } from "./@types/shop.d";
import { ShopContext } from "./context/ShopContext";
// import { ShopContext } from "../context/ShopContext";

function App() {
  const { isAuth, setIsAuth, } = React.useContext(
    ShopContext
  ) as ShopContextType;
  console.log(isAuth);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/shop/cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<OrderConfirmation />} />

            <Route
              path="/dashboard"
              element={ProtectedRoute({
                children: <Dashboard />,
                isAuth: isAuth,
              })}
            />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
