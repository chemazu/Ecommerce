"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
function ProtectedRoute(_a) {
    var children = _a.children;
    var token = JSON.parse(localStorage.getItem("token") || "false");
    if (!token) {
        // not logged in so redirect to login page with the return url
        return react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/login" });
    }
    // authorized so return child components
    return children;
}
exports["default"] = ProtectedRoute;
