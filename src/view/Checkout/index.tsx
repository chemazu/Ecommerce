import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./style.scss"
export default function Checkout() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { cart } = React.useContext(ShopContext) as ShopContextType;
  let navigate = useNavigate();
  const getTotalPrice = () => {
    let total = 0;
    cart.map((item: any) => {
      total += Number(item.price * item.quantity);
    });
    return Number(((total + 15) * 100).toFixed(2));
  };
  console.log(process.env);
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
    // publicKey: "pk_test_998ef863dd00089c9f0df78dab27c6540fc31be0",
    text: `Pay ₦${getTotalPrice() / 100}`,
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  return (
    <div className="checkout-page">
      <div className="user-info">
        <h2>Login to your account to complete purchase</h2>

        <Button
          title="Login"
          className="pry"
          type=""
          onClick={() => navigate("/login")}
        />
        <div className="divider">
          <hr />
          or
          <hr />
        </div>
        <h2>Register</h2>

        <Button
          title="Register"
          className="pry"
          type=""
          onClick={() => navigate("/register")}
        />

        <div className="guest-form">
          <h2>Guest Checkout</h2>
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      </div>
      <div className="order-summary">
          <h2>Order Summary</h2>
      </div>
    </div>
  );
}
