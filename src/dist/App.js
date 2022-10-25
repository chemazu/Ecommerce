"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var react_router_dom_1 = require("react-router-dom");
var Register_1 = require("./view/Register");
var Login_1 = require("./view/Login");
var Dashboard_1 = require("./view/Dashboard");
var AuthContext_1 = require("../src/context/AuthContext");
var Home_1 = require("./view/Home");
var ProtectedRoute_1 = require("./view/ProtectedRoute");
var Shop_1 = require("./view/Shop");
var Cart_1 = require("./view/Cart");
var OrderConfirmation_1 = require("./view/OrderConfirmation");
var Checkout_1 = require("./view/Checkout");
var Wishlist_1 = require("./view/Wishlist");
var Header_1 = require("./components/Header");
var ShopContext_1 = require("./context/ShopContext");
// import { ShopContext } from "../context/ShopContext";
function App() {
    var _a = react_1["default"].useContext(ShopContext_1.ShopContext), isAuth = _a.isAuth, setIsAuth = _a.setIsAuth;
    console.log(isAuth);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "main" },
            react_1["default"].createElement(AuthContext_1["default"], null,
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", element: react_1["default"].createElement(Register_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/shop/*", element: react_1["default"].createElement(Shop_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/shop/cart", element: react_1["default"].createElement(Cart_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "wishlist", element: react_1["default"].createElement(Wishlist_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/checkout", element: react_1["default"].createElement(Checkout_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/order", element: react_1["default"].createElement(OrderConfirmation_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard", element: ProtectedRoute_1["default"]({
                            children: react_1["default"].createElement(Dashboard_1["default"], null),
                            isAuth: isAuth
                        }) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement("p", null, "There's nothing here: 404!") }))))));
}
exports["default"] = App;
