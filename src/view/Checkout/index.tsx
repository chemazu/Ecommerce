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
export default function Checkout() {
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
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
  const { mail, lock } = importContent();
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
      {/* <div className="user-info">
        <div className="top">
          <p>
            If you have already registered, please, enter your details in the
            boxes below. If you are a new customer, please, go to the{" "}
            <Link to="/register">register</Link> section.
          </p>
          <div className="right">
            <div className="checkout-form-wrapper">
              <form>
                <div className="auth-form-item">
                  <p>Email: </p>
                  <div className="input-item">
                    <img src={mail} alt="" />
                    <input type="email" placeholder="Email" {...changeEmail} />
                  </div>
                </div>
                <div className="auth-form-item">
                  <p>Password: </p>
                  <div className="input-item">
                    <img src={lock} alt="" />
                    <input
                      type="password"
                      placeholder="Password"
                      {...changePassword}
                    />
                  </div>
                </div>
                <div className="button-wrapper">
                  <Button
                    title="Login"
                    className="pry"
                    type="submit"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>Back to Cart</p>
          <p>I dont have an account</p>
        </div>
      </div> */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="price-breakdown">
            <div className="sub-total">
              <h4>Sub Total</h4>
              <p>{getTotalPrice() / 100}</p>
            </div>
            <div className="shipping">
              <h4>shipping cost</h4>

              <div className="shipping-cost">
                <p>₦15.00</p>
              </div>
            </div>
            <div className="total">
              <h2>Total</h2>
              <p>₦{getTotalPrice() / 100}</p>
            </div>
            <PaystackButton {...componentProps} className="checkout" />
          </div>
        </div>
      </div>
    </div>
  );
}
