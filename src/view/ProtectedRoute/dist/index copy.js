"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
// import { ShopContext } from "../../context/ShopContext";
var ShopContext_1 = require("../../context/ShopContext");
var react_1 = require("react");
function ProtectedRoute(_a) {
    var children = _a.children;
    var re = react_1["default"].useContext(ShopContext_1.ShopContext);
    console.log(re);
    // let [check, setCheck] = React.useState(
    //   JSON.parse(localStorage.getItem("token") || "false")
    // );
    // React.useEffect(() => {
    //   setCheck(JSON.parse(localStorage.getItem("token") || "false"));
    // }, [localStorage]);
    var token = true;
    // console.log(isAuth);
    if (!token) {
        // not logged in so redirect to login page with the return url
        return react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/login" });
    }
    // authorized so return child components
    return children;
}
exports["default"] = ProtectedRoute;
