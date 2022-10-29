"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var client_1 = require("@apollo/client");
var CREATEORDER = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation CreateOrder(\n    $userId: String\n    $orderTotal: Float\n    $paymentId: String\n    $orderItems: [OrderItems]\n  ) {\n    createOrder(\n      userId: $userId\n      orderTotal: $orderTotal\n      paymentId: $paymentId\n      orderItems: $orderItems\n    ) {\n      status\n      orderId\n    }\n  }\n"], ["\n  mutation CreateOrder(\n    $userId: String\n    $orderTotal: Float\n    $paymentId: String\n    $orderItems: [OrderItems]\n  ) {\n    createOrder(\n      userId: $userId\n      orderTotal: $orderTotal\n      paymentId: $paymentId\n      orderItems: $orderItems\n    ) {\n      status\n      orderId\n    }\n  }\n"])));
exports["default"] = CREATEORDER;
var templateObject_1;
