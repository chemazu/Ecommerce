import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import { useMutation } from "@apollo/client";
import LOGIN from "../../graphql/schema/login.schema";
import Button from "../../components/Button";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import importContent from "../../resources/importContent";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../@types/auth.d";
import CartItem from "../../components/CartItem";
export default function Checkout() {
  console.log(localStorage.getItem("loggedInUser"));
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  let a = 0;
  if (loggedInUser) {
    console.log("first");
  }
  console.log(a);
  const {
    value: email,
    change: changeEmail,
    reset: resetEmail,
  } = useInput(`${loggedInUser.email}` || "");
 
  const [name, setName] = React.useState(
    loggedInUser ? `${loggedInUser.firstname} ${loggedInUser.lastname}` : ""
  );
  const { value: phone, change: changePhone, reset: resetPhone } = useInput("");
  const {
    value: instructions,
    change: changeInstructions,
    reset: resetInstructions,
  } = useInput("");

  const { cart } = React.useContext(ShopContext) as ShopContextType;

  const getTotalPrice = () => {
    let total = 0;
    cart.map((item: any) => {
      total += Number(item.price * item.quantity);
    });
    return Number(((total + 15) * 100).toFixed(2));
  };
  // let navigate=useNavigate()
  const handlePaystackSuccess = () => {
    navigate("/order");
  };
  const componentProps = {
    email,
    amount: getTotalPrice(),
    metadata: {
      name,
      phone,
      custom_fields: [
        {
          display_name: "Invoice ID",
          variable_name: "Invoice ID",
          value: 209,
        },
      ],
    },
    publicKey: process.env.REACT_APP_PAYSTACK_TEST_PUBLIC_KEY || "",
    text: `Pay ₦${getTotalPrice() / 100}`,
    onSuccess: () => {
      handlePaystackSuccess();
    },
    // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  const navigate = useNavigate();
  const { mail, lock, pickup, delivery } = importContent();
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");
  const { signInWithGoogle } = React.useContext(AuthContext) as AuthContextType;
  const [login] = useMutation(LOGIN);

  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLInputElement>
  // ): Promise<any> => {
  //   e.preventDefault();
  //   login(email, password);
  //   navigate("/dashboard");
  //   resetPassword();
  //   resetEmail();
  // };
  let handleSubmit = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        email,
        password,
      },
      onCompleted: ({ login }) => {
        localStorage.removeItem("token");
        localStorage.setItem("token", login.token);
        if (localStorage.getItem("token")) {
          navigate("/dashboard");
        }
        // localStorage.setItem("token", JSON.stringify(login.user));
      },
    }).then(() => {
      resetEmail();
      resetPassword();
    });
  };

  return (
    <div className="checkout-page">
      <div className="billing-info">
        <h2> {"<"} Back</h2>
        <div className="delivery">
          <input type="checkbox" />
          <img src={delivery} alt="delivery" />

          <p>Get it delivered in only 30 minutes</p>
        </div>
        <div className="pick-up">
          <input type="checkbox" />

          <img src={pickup} alt="pickup" />

          <p>Pick up available in 3 stores near you</p>
        </div>

        <form>
          <div className="input-wrapper">
            <label>Shipping Address</label>
            <input type="text" placeholder="autofill if logged in" />
          </div>
          <div className="input-wrapper">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="email" {...changeEmail} />
          </div>
          <div className="input-wrapper">
            <label>Phone</label>
            <input type="text" {...changePhone} />
          </div>
          <div className="input-wrapper">
            <label>Special Instructions</label>
            <textarea />
          </div>
        </form>
        <div className="pay">
          <PaystackButton {...componentProps} className="pry" />
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-items">
          {cart.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
        </div>
        <div className="logistics">
          <div className="logistics-item">
            <p>Delivery</p>
            <p>₦15.00</p>
          </div>
          <div className="logistics-item">
            <p>Discount</p>
            <p>$0.00</p>
          </div>
        </div>
        <div className="coupon">
          <div className="input-wrapper">
            <input type="text" />
            <Button title="Apply" className="sec" />
          </div>
        </div>
        <div className="order-total">
          <p> Order Total</p>
          <p>₦ {getTotalPrice() / 100}</p>
        </div>
      </div>
    </div>
  );
}
