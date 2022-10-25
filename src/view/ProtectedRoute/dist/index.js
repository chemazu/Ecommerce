"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function ProtectedRoute(_a) {
    var children = _a.children, isAuth = _a.isAuth;
    console.log(isAuth);
    if (!isAuth) {
        // not logged in so redirect to login page with the return url
        return react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/login" });
    }
    return children;
}
exports["default"] = ProtectedRoute;
