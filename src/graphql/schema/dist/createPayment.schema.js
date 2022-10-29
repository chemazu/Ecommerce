"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var client_1 = require("@apollo/client");
var CREATEPAYMENT = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation CreatePayment(\n    $userId: String\n    $amount: Float\n    $paystackResponse: PaystackResponse\n  ) {\n    createPayment(\n      userId: $userId\n      amount: $amount\n      paystackResponse: $paystackResponse\n    ) {\n      status\n      paymentId\n    }\n  }\n"], ["\n  mutation CreatePayment(\n    $userId: String\n    $amount: Float\n    $paystackResponse: PaystackResponse\n  ) {\n    createPayment(\n      userId: $userId\n      amount: $amount\n      paystackResponse: $paystackResponse\n    ) {\n      status\n      paymentId\n    }\n  }\n"])));
exports["default"] = CREATEPAYMENT;
var templateObject_1;
