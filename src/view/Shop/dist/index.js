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
var Button_1 = require("../../components/Button");
var importContent_1 = require("../../resources/importContent");
var products_json_1 = require("../../resources/data/products.json");
var ShopItem_1 = require("../../components/ShopItem");
require("./style.scss");
var sort_1 = require("../../helpers/sort");
var filter_1 = require("../../helpers/filter");
var ShopContext_1 = require("../../context/ShopContext");
var react_router_dom_1 = require("react-router-dom");
function Shop() {
    var _a = react_1["default"].useContext(ShopContext_1.ShopContext), cart = _a.cart, setCart = _a.setCart;
    console.log(cart);
    var cartsvg = importContent_1["default"]().cartsvg;
    // let categories = ["category1", "category2","category3"]
    var _b = react_1["default"].useState(false), showLeft = _b[0], setShowLeft = _b[1];
    var _c = react_1.useState(""), searchField = _c[0], setSearchField = _c[1];
    var _d = react_1.useState("alphabetically"), sortBy = _d[0], setSortBy = _d[1];
    var _e = react_1.useState({}), filterQuery = _e[0], setFilterQuery = _e[1];
    var categoryFilter = [];
    var propetyFilter = [];
    var cardTypeFilter = [];
    //1. monster.name returns the name of the function since the name could be anything,
    // 2. .includes checks if what is typed in searchField exists in monster
    console.log(cart);
    products_json_1["default"].sort(sort_1["default"](sortBy));
    var searchAbleData = products_json_1["default"].filter(function (item) {
        return item.name.toLowerCase().includes(searchField.toLowerCase());
    });
    searchAbleData.filter(filter_1["default"](filterQuery)).map(function (item) {
        if (!categoryFilter.includes(item.category)) {
            categoryFilter.push(item.category);
        }
        if (!propetyFilter.includes(item.property)) {
            propetyFilter.push(item.property);
        }
        if (!cardTypeFilter.includes(item.cardtype)) {
            cardTypeFilter.push(item.cardtype);
        }
    });
    var filterOptions = [
        { title: "Card Type", content: cardTypeFilter },
        { title: "Property", content: propetyFilter },
        { title: "Category", content: categoryFilter },
    ];
    return (react_1["default"].createElement("div", { className: "shop" },
        react_1["default"].createElement("div", { className: "shop-top" },
            react_1["default"].createElement("p", null, "Home : Shop"),
            react_1["default"].createElement("h1", null, "Trading Cards & Collectibles")),
        react_1["default"].createElement("div", { className: "shop-body" },
            react_1["default"].createElement("div", { className: "shop-left desktop" },
                react_1["default"].createElement("div", { className: "sub-item" },
                    react_1["default"].createElement("h2", null, "Categories"),
                    categoryFilter.map(function (item, index) {
                        return react_1["default"].createElement("p", { key: index }, item);
                    })),
                react_1["default"].createElement("div", { className: "filters" },
                    react_1["default"].createElement("h2", null, "Filters"),
                    filterOptions.map(function (item, index) {
                        return (react_1["default"].createElement(DisplayFilter, { item: item, setFilterQuery: setFilterQuery, filterQuery: filterQuery }));
                    }),
                    react_1["default"].createElement("div", { className: "filter-options" },
                        react_1["default"].createElement("h3", null, "Close")),
                    react_1["default"].createElement(react_1["default"].Fragment, null, Object.keys(filterQuery).length > 0 && (react_1["default"].createElement("p", { onClick: function () {
                            setFilterQuery({});
                        } }, "Clear Filter X"))))),
            showLeft && (react_1["default"].createElement("div", { className: "shop-left mobile" },
                react_1["default"].createElement("div", { className: "sub-item" },
                    react_1["default"].createElement("h2", null, "Categories"),
                    categoryFilter.map(function (item, index) {
                        return react_1["default"].createElement("p", { key: index }, item);
                    })),
                react_1["default"].createElement("div", { className: "filters" },
                    react_1["default"].createElement("h2", null, "Filters"),
                    filterOptions.map(function (item, index) {
                        return (react_1["default"].createElement(DisplayFilter, { item: item, setFilterQuery: setFilterQuery, filterQuery: filterQuery }));
                    }),
                    react_1["default"].createElement(react_1["default"].Fragment, null, Object.keys(filterQuery).length > 0 && (react_1["default"].createElement("p", { onClick: function () {
                            setFilterQuery({});
                        } }, "Clear Filter X"))),
                    react_1["default"].createElement("h4", { onClick: function () {
                            setShowLeft(false);
                        } }, "Close X")))),
            react_1["default"].createElement("div", { className: "shop-right" },
                react_1["default"].createElement("div", { className: "shop-right-heading" },
                    react_1["default"].createElement("div", { className: "search-div" },
                        react_1["default"].createElement("input", { type: "text", placeholder: "Search", className: "searchBox", onChange: function (e) {
                                setSearchField(e.target.value);
                            } }),
                        react_1["default"].createElement(Button_1["default"], { title: "Search", className: "pry" })),
                    react_1["default"].createElement("div", { className: "cart-wrapper" },
                        react_1["default"].createElement("div", { className: "cart" },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/shop/cart" },
                                react_1["default"].createElement("img", { src: cartsvg, alt: "svg", onClick: function () {
                                        // navigate("cart");
                                        // setShowCart(!showCart);
                                        // setShowSort(false);
                                        // setShowFilter(false);
                                    } })))),
                    react_1["default"].createElement("div", { className: "sort" },
                        react_1["default"].createElement("p", null, "Sort by"),
                        react_1["default"].createElement("select", { name: "cars", id: "cars", onChange: function (e) {
                                setSortBy(e.target.value);
                            } },
                            react_1["default"].createElement("option", { value: "", selected: true, disabled: true }),
                            react_1["default"].createElement("option", { value: "alphabetically" }, "Alphabetically"),
                            react_1["default"].createElement("option", { value: "priceLow" }, "Price : Low to High"),
                            react_1["default"].createElement("option", { value: "priceHigh" }, "Price : High to Low"))),
                    react_1["default"].createElement("div", { className: " mobile filter" },
                        react_1["default"].createElement("p", { onClick: function () {
                                setShowLeft(!showLeft);
                            } }, "Filter"))),
                react_1["default"].createElement("div", { className: "shop-items-wrapper" }, searchAbleData
                    .filter(filter_1["default"](filterQuery))
                    .map(function (item, index) {
                    return react_1["default"].createElement(ShopItem_1["default"], { item: item, key: index });
                }))))));
}
exports["default"] = Shop;
// let ShopItem = ({ item }: { item: any }) => {
//   return (
//     <div className="shop-item">
//       <div className="item">
//         <img
//           src={require(`../../resources/ecommerce-products/${item.img1}`)}
//           alt="item for sale"
//           className="front-card"
//         />
//       </div>
//       <div className="item-text">
//         <h5>{item.name}</h5>
//         <p>${item.price}</p>
//         <Button title="Add to Cart" className="addtocart" />
//       </div>
//     </div>
//   );
// };
var DisplayFilter = function (_a) {
    var item = _a.item, filterQuery = _a.filterQuery, setFilterQuery = _a.setFilterQuery;
    var _b = react_1.useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var caretdown = importContent_1["default"]().caretdown;
    var handleQuery = function (value) {
        if (item.title === "Category") {
            setFilterQuery(__assign(__assign({}, filterQuery), { category: value }));
        }
        if (item.title === "Card Type") {
            setFilterQuery(__assign(__assign({}, filterQuery), { cardtype: value }));
        }
        if (item.title === "Property") {
            setFilterQuery(__assign(__assign({}, filterQuery), { property: value }));
        }
    };
    return (react_1["default"].createElement("div", { className: "filter-options" },
        react_1["default"].createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }, onClick: function () {
                setShowOptions(!showOptions);
            } },
            react_1["default"].createElement("h3", null, item.title),
            react_1["default"].createElement("img", { src: caretdown, alt: "down" })),
        showOptions &&
            item.content.map(function (item, index) {
                return (react_1["default"].createElement("p", { key: index, onClick: function () {
                        handleQuery(item);
                    } }, item));
            })));
};
