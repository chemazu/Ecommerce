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
require("./style.scss");
var client_1 = require("@apollo/client");
var login_schema_1 = require("../../graphql/schema/login.schema");
var input_hook_1 = require("../../hooks/input-hook");
var Button_1 = require("../../components/Button");
var importContent_1 = require("../../resources/importContent");
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("../../context/AuthContext");
var ShopContext_1 = require("../../context/ShopContext");
function Login() {
    var navigate = react_router_dom_1.useNavigate();
    var _a = importContent_1["default"](), mail = _a.mail, lock = _a.lock;
    var signInWithGoogle = react_1["default"].useContext(AuthContext_1.AuthContext).signInWithGoogle;
    var _b = react_1["default"].useContext(ShopContext_1.ShopContext), isAuth = _b.isAuth, setIsAuth = _b.setIsAuth;
    var login = client_1.useMutation(login_schema_1["default"])[0];
    var _c = input_hook_1.useInput(""), email = _c.value, changeEmail = _c.change, resetEmail = _c.reset;
    var _d = input_hook_1.useInput(""), password = _d.value, changePassword = _d.change, resetPassword = _d.reset;
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("first");
        login({
            variables: {
                email: email,
                password: password
            },
            onCompleted: function (_a) {
                var login = _a.login;
                // localStorage.removeItem("token");
                // localStorage.setItem("token", login.token);
                // localStorage.setItem("loggedInUser", JSON.stringify(login.user));
                // if (localStorage.getItem("token")) {
                //   navigate("/dashboard");
                // }
                // localStorage.setItem("token", JSON.stringify(login.user));
            }
        })
            .then(function (res) {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.login.token));
            setIsAuth(JSON.stringify(res.data.login.token));
            localStorage.setItem("loggedInUser", JSON.stringify(res.data.login.user));
            if (res.data.login.token ==
                JSON.parse(localStorage.getItem("token") || "")) {
                navigate("/dashboard");
                console.log("redirect");
            }
        })["catch"](function (err) {
            console.log(err);
        })["finally"](function () {
            resetEmail();
            resetPassword();
        });
    };
    // React.useEffect(() => {
    //   if (localStorage.getItem("token")) {
    //     navigate("/dashboard");
    //   }
    // }, [navigate]);
    return (react_1["default"].createElement("div", { className: "login" },
        react_1["default"].createElement("div", { className: "left" }),
        react_1["default"].createElement("div", { className: "right" },
            react_1["default"].createElement("div", { className: "form-wrapper" },
                react_1["default"].createElement("h2", null, "Login"),
                react_1["default"].createElement("p", null,
                    "Sign in to your ",
                    react_1["default"].createElement("p", { className: "highlight" }, "Stacked"),
                    " account"),
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement("div", { className: "auth-form-item" },
                        react_1["default"].createElement("p", null, "Email: "),
                        react_1["default"].createElement("div", { className: "input-item" },
                            react_1["default"].createElement("img", { src: mail, alt: "" }),
                            react_1["default"].createElement("input", __assign({ type: "email", placeholder: "Email" }, changeEmail)))),
                    react_1["default"].createElement("div", { className: "auth-form-item" },
                        react_1["default"].createElement("p", null, "Password: "),
                        react_1["default"].createElement("div", { className: "input-item" },
                            react_1["default"].createElement("img", { src: lock, alt: "" }),
                            react_1["default"].createElement("input", __assign({ type: "password", placeholder: "Password" }, changePassword))))),
                react_1["default"].createElement("div", { className: "button-wrapper" },
                    react_1["default"].createElement(Button_1["default"], { title: "Login", className: "pry", type: "submit", onClick: handleSubmit })),
                react_1["default"].createElement("div", { className: "divider" },
                    react_1["default"].createElement("hr", null),
                    "or",
                    react_1["default"].createElement("hr", null)),
                react_1["default"].createElement(Button_1["default"], { title: " Sign up with Google", className: "google", type: "", onClick: signInWithGoogle }),
                react_1["default"].createElement("div", { className: "bottom-text" },
                    react_1["default"].createElement("p", null, "Don't have an account ?"),
                    react_1["default"].createElement("h4", { className: "highlight" },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/register" }, "Register ")))))));
}
exports["default"] = Login;
