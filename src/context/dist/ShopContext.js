"use strict";
exports.__esModule = true;
exports.ShopContext = void 0;
var react_1 = require("react");
// export const AuthContext = React.createContext<AuthContextType | null>(null);
exports.ShopContext = react_1["default"].createContext(null);
function ShopProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState(JSON.parse(localStorage.getItem("cart") || "[]")), cart = _b[0], setCart = _b[1];
    var _c = react_1.useState(JSON.parse(localStorage.getItem("token") || "false")), isAuth = _c[0], setIsAuth = _c[1];
    var _d = react_1.useState([]), productData = _d[0], setProductData = _d[1];
    // const cart = [
    //   { id: "1", title: "hmm", price: "100" },
    //   { id: "2", title: "hmm2",price: "200" },
    // ];
    var value = {
        cart: cart,
        setCart: setCart,
        productData: productData,
        setProductData: setProductData,
        isAuth: isAuth,
        setIsAuth: setIsAuth
    };
    return react_1["default"].createElement(exports.ShopContext.Provider, { value: value }, children);
}
exports["default"] = ShopProvider;
