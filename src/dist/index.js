"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ShopContext_1 = require("./context/ShopContext");
var client_1 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var httpLink = client_1.createHttpLink({
    uri: process.env.REACT_APP_API_URL
});
var authLink = context_1.setContext(function (_, _a) {
    var headers = _a.headers;
    // get the authentication token from local storage if it exists
    var token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
        headers: __assign(__assign({}, headers), { authorization: token ? "Bearer " + token : "" })
    };
});
var client = new client_1.ApolloClient({
    // uri: "https://test-api.sytbuilder.com/graphql",
    link: authLink.concat(httpLink),
    cache: new client_1.InMemoryCache()
});
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(ShopContext_1["default"], null,
            react_1["default"].createElement(client_1.ApolloProvider, { client: client },
                react_1["default"].createElement(App_1["default"], null))))), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
