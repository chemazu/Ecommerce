"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.scss");
var importContent_1 = require("../../resources/importContent");
var OrderItem_1 = require("../../components/OrderItem");
var AuthContext_1 = require("../../context/AuthContext");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("../../components/Button");
var ShopContext_1 = require("../../context/ShopContext");
function Dashboard() {
    var history = react_router_dom_1.useNavigate();
    var _a = importContent_1["default"](), contact = _a.contact, bag = _a.bag, trend = _a.trend;
    var logout = react_1["default"].useContext(AuthContext_1.AuthContext).logout;
    var _b = react_1["default"].useContext(ShopContext_1.ShopContext), isAuth = _b.isAuth, setIsAuth = _b.setIsAuth;
    var handleLogout = function () {
        logout();
        localStorage.removeItem("token");
        setIsAuth(false);
        history("/login");
    };
    return (react_1["default"].createElement("div", { className: "dashboard" },
        react_1["default"].createElement("div", { className: "left" },
            react_1["default"].createElement("p", null, "Dashboard"),
            react_1["default"].createElement("p", null, "Orders"),
            react_1["default"].createElement("p", null, "Profile"),
            react_1["default"].createElement("p", null, "Cart"),
            react_1["default"].createElement(Button_1["default"], { title: "Log Out", className: "pry", type: "submit", onClick: handleLogout })),
        react_1["default"].createElement("div", { className: "right" },
            react_1["default"].createElement("h2", null, "Dashboard Hi ,Chukwuemeka"),
            react_1["default"].createElement("div", { className: "top" },
                react_1["default"].createElement("div", { className: "one users" },
                    react_1["default"].createElement("img", { src: contact, alt: "Users" }),
                    react_1["default"].createElement("h3", null, "Users"),
                    react_1["default"].createElement("p", null, "239,233"),
                    react_1["default"].createElement("p", { style: { borderTop: "1px solid #fff", width: "90%" } }, "Lorem ipsum dolor.")),
                react_1["default"].createElement("div", { className: "one sales" },
                    react_1["default"].createElement("img", { src: bag, alt: "Users" }),
                    react_1["default"].createElement("h3", null, "Sales"),
                    react_1["default"].createElement("p", null, "$ 239,233"),
                    react_1["default"].createElement("p", { style: { borderTop: "1px solid #fff", width: "90%" } }, "Lorem ipsum dolor.")),
                react_1["default"].createElement("div", { className: "one trend" },
                    react_1["default"].createElement("img", { src: trend, alt: "Users" }),
                    react_1["default"].createElement("h3", null, "Trending"),
                    react_1["default"].createElement("p", null, "239,233"),
                    react_1["default"].createElement("p", { style: { borderTop: "1px solid #fff", width: "90%" } }, "Lorem ipsum dolor."))),
            react_1["default"].createElement("div", { className: "bottom" },
                react_1["default"].createElement("div", { className: "two" },
                    react_1["default"].createElement("h2", null, "Order History"),
                    react_1["default"].createElement("div", { className: "heading" },
                        react_1["default"].createElement("div", { className: "id" },
                            react_1["default"].createElement("h3", null, "Id")),
                        react_1["default"].createElement("div", { className: "img" },
                            react_1["default"].createElement("h3", null, "Image")),
                        react_1["default"].createElement("div", { className: "product" },
                            react_1["default"].createElement("h3", null, "Product")),
                        react_1["default"].createElement("div", { className: "price" },
                            react_1["default"].createElement("h3", null, "Price")),
                        react_1["default"].createElement("div", { className: "quantity" },
                            react_1["default"].createElement("h3", null, "Quantity"))),
                    react_1["default"].createElement("div", { className: "body" },
                        react_1["default"].createElement(OrderItem_1["default"], null))),
                react_1["default"].createElement("div", { className: "three" }, "Wishlist")))));
}
exports["default"] = Dashboard;
