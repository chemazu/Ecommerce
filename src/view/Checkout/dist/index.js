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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_paystack_1 = require("react-paystack");
var ShopContext_1 = require("../../context/ShopContext");
var Button_1 = require("../../components/Button");
require("./style.scss");
var input_hook_1 = require("../../hooks/input-hook");
var importContent_1 = require("../../resources/importContent");
var react_router_dom_1 = require("react-router-dom");
var CartItem_1 = require("../../components/CartItem");
var client_1 = require("@apollo/client");
var createPayment_schema_1 = require("../../graphql/schema/createPayment.schema");
var createOrder_schema_1 = require("../../graphql/schema/createOrder.schema");
function Checkout() {
    var _this = this;
    var createPayment = client_1.useMutation(createPayment_schema_1["default"])[0];
    var createOrder = client_1.useMutation(createOrder_schema_1["default"])[0];
    var navigate = react_router_dom_1.useNavigate();
    var cart = react_1["default"].useContext(ShopContext_1.ShopContext).cart;
    var _a = importContent_1["default"](), pickup = _a.pickup, delivery = _a.delivery;
    var _b = react_1["default"].useState(true), deliveryCost = _b[0], setDeliveryCost = _b[1];
    var autofillUser = {
        shippingAddress: "",
        username: "",
        phone: "",
        email: "",
        firstname: "",
        lastname: ""
    };
    var _c = input_hook_1.useInput(autofillUser.username), name = _c.value, changeName = _c.change, resetName = _c.reset;
    var _d = input_hook_1.useInput(autofillUser.email), email = _d.value, changeEmail = _d.change, resetEmail = _d.reset;
    var _e = input_hook_1.useInput(autofillUser.phone), phone = _e.value, changePhone = _e.change, resetPhone = _e.reset;
    var _f = input_hook_1.useInput(autofillUser.shippingAddress), shipping = _f.value, changeShipping = _f.change, resetShipping = _f.reset;
    var getTotalPrice = function () {
        var total = 0;
        cart.map(function (item) {
            total += Number(item.price * item.quantity);
        });
        return Number(((total + 15) * 100).toFixed(2));
    };
    // let navigate=useNavigate()
    var handleCreateOrder = function (paymentId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            createOrder({
                variables: {
                    userId: "6332f653762c7392ea7480e1",
                    paymentId: paymentId,
                    orderTotal: getTotalPrice(),
                    orderItems: cart
                }
            })
                .then(function (res) {
                console.log(res);
            })["catch"](function (err) {
                console.log(err);
            });
            return [2 /*return*/];
        });
    }); };
    var handlePaystackSuccess = function (paystackResponse) {
        createPayment({
            variables: {
                userId: "6332f653762c7392ea7480e1",
                amount: getTotalPrice(),
                paystackResponse: paystackResponse
            }
        })
            .then(function (res) {
            console.log(res.data.createPayment.paymentId);
            handleCreateOrder(res.data.createPayment.paymentId);
        })["catch"](function (err) {
            console.log(err);
        });
        navigate("/order");
    };
    var componentProps = {
        email: email,
        amount: getTotalPrice(),
        metadata: {
            name: name,
            phone: phone,
            custom_fields: [
                {
                    display_name: "Invoice ID",
                    variable_name: "Invoice ID",
                    value: 209
                },
            ]
        },
        publicKey: process.env.REACT_APP_PAYSTACK_TEST_PUBLIC_KEY || "",
        text: "Pay \u20A6" + getTotalPrice() / 100,
        onSuccess: function (res) {
            console.log(res);
            handlePaystackSuccess(res);
            // message:"Approved"
            // redirecturl :  "?trxref=T909069567568481&reference=T909069567568481"
            // reference :  "T909069567568481"
            // status :  "success"
            // trans : "2216544096"
            // transaction :  "2216544096"
            // trxref :  "T909069567568481"
        },
        // alert("Thanks for doing business with us! Come back soon!!"),
        onClose: function () { return alert("Thanks for doing business with us! Come back soon!!"); }
    };
    return (react_1["default"].createElement("div", { className: "checkout-page" },
        react_1["default"].createElement("div", { className: "billing-info" },
            react_1["default"].createElement("h2", null,
                " ",
                "<",
                " Back"),
            react_1["default"].createElement("div", { className: "delivery " + (deliveryCost ? "active" : ""), onClick: function () {
                    setDeliveryCost(true);
                } },
                react_1["default"].createElement("input", { type: "checkbox", checked: deliveryCost }),
                react_1["default"].createElement("img", { src: delivery, alt: "delivery" }),
                react_1["default"].createElement("p", null, "Get it delivered in only 30 minutes")),
            react_1["default"].createElement("div", { className: "pick-up " + (!deliveryCost ? "active" : ""), onClick: function () {
                    setDeliveryCost(false);
                } },
                react_1["default"].createElement("input", { type: "checkbox", checked: !deliveryCost }),
                react_1["default"].createElement("img", { src: pickup, alt: "pickup" }),
                react_1["default"].createElement("p", null, "Pick up available in 3 stores near you")),
            react_1["default"].createElement("form", null,
                react_1["default"].createElement("div", { className: "input-wrapper" },
                    react_1["default"].createElement("label", null, "Shipping Address"),
                    react_1["default"].createElement("input", __assign({ type: "text" }, changeShipping))),
                react_1["default"].createElement("div", { className: "input-wrapper" },
                    react_1["default"].createElement("label", null, "Name"),
                    react_1["default"].createElement("input", __assign({ type: "text" }, changeName))),
                react_1["default"].createElement("div", { className: "input-wrapper" },
                    react_1["default"].createElement("label", null, "Email"),
                    react_1["default"].createElement("input", __assign({ type: "email" }, changeEmail))),
                react_1["default"].createElement("div", { className: "input-wrapper" },
                    react_1["default"].createElement("label", null, "Phone"),
                    react_1["default"].createElement("input", __assign({ type: "text" }, changePhone))),
                react_1["default"].createElement("div", { className: "input-wrapper" },
                    react_1["default"].createElement("label", null, "Special Instructions"),
                    react_1["default"].createElement("textarea", null))),
            react_1["default"].createElement("div", { className: "pay" },
                react_1["default"].createElement(react_paystack_1.PaystackButton, __assign({}, componentProps, { className: "pry" })))),
        react_1["default"].createElement("div", { className: "order-summary" },
            react_1["default"].createElement("h2", null, "Order Summary"),
            react_1["default"].createElement("div", { className: "order-items" }, cart.map(function (item, index) {
                return react_1["default"].createElement(CartItem_1["default"], { key: index, item: item });
            })),
            react_1["default"].createElement("div", { className: "logistics" },
                react_1["default"].createElement("div", { className: "logistics-item" },
                    react_1["default"].createElement("p", null, "Shipping"),
                    react_1["default"].createElement("p", null, "\u20A615.00")),
                deliveryCost && (react_1["default"].createElement("div", { className: "logistics-item" },
                    react_1["default"].createElement("p", null, "Delivery"),
                    react_1["default"].createElement("p", null, "\u20A615.00"))),
                react_1["default"].createElement("div", { className: "logistics-item" },
                    react_1["default"].createElement("p", null, "Discount"),
                    react_1["default"].createElement("p", null, "$0.00"))),
            react_1["default"].createElement("div", { className: "coupon" },
                react_1["default"].createElement("div", { className: "input-wrapper" },
                    react_1["default"].createElement("input", { type: "text" }),
                    react_1["default"].createElement(Button_1["default"], { title: "Apply", className: "sec" }))),
            react_1["default"].createElement("div", { className: "order-total" },
                react_1["default"].createElement("p", null, " Order Total"),
                react_1["default"].createElement("p", null,
                    "\u20A6 ",
                    getTotalPrice() / 100)))));
}
exports["default"] = Checkout;
