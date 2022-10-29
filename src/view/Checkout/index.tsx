import React from "react";
import { PaystackButton } from "react-paystack";
import { ShopContext } from "../../context/ShopContext";
import { ShopContextType } from "../../@types/shop.d";
import Button from "../../components/Button";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import importContent from "../../resources/importContent";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useMutation } from "@apollo/client";
import CREATEPAYMENT from "../../graphql/schema/createPayment.schema";
import CREATEORDER from "../../graphql/schema/createOrder.schema";
export default function Checkout() {
  const [createPayment] = useMutation(CREATEPAYMENT);
  const [createOrder] = useMutation(CREATEORDER);

  const navigate = useNavigate();
  const { cart } = React.useContext(ShopContext) as ShopContextType;

  const { pickup, delivery } = importContent();
  let [deliveryCost, setDeliveryCost] = React.useState(true);
  let autofillUser = {
    shippingAddress: "",
    username: "",
    phone: "",
    email: "",
    firstname: "",
    lastname: "",
  };

  const {
    value: name,
    change: changeName,
    reset: resetName,
  } = useInput(autofillUser.username);
  const {
    value: email,
    change: changeEmail,
    reset: resetEmail,
  } = useInput(autofillUser.email);
  const {
    value: phone,
    change: changePhone,
    reset: resetPhone,
  } = useInput(autofillUser.phone);
  const {
    value: shipping,
    change: changeShipping,
    reset: resetShipping,
  } = useInput(autofillUser.shippingAddress);
  const getTotalPrice = () => {
    let total = 0;
    cart.map((item: any) => {
      total += Number(item.price * item.quantity);
    });
    return Number(((total + 15) * 100).toFixed(2));
  };
  // let navigate=useNavigate()
  const handleCreateOrder = async (paymentId: any) => {
    createOrder({
      variables: {
        userId: "6332f653762c7392ea7480e1",
        paymentId: paymentId,
        orderTotal: getTotalPrice(),
        orderItems: cart,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePaystackSuccess = (paystackResponse: {
    message: string;
    redirecturl: string;
    reference: string;
    status: string;
    trans: string;
    transaction: string;
    trxref: string;
  }) =>
    // {
    //   console.log("payment", {
    //     userId: "6332f653762c7392ea7480e1",
    //     amount: getTotalPrice(),
    //     paystackResponse,
    //   });
    //   console.log("order", {
    //     paymentId: "null",
    //     userId: "6332f653762c7392ea7480e1",
    //     orderTotal: getTotalPrice(),
    //     orderItems: cartArray(cart),
    //   });
    // };
    {
      createPayment({
        variables: {
          userId: "6332f653762c7392ea7480e1",
          amount: getTotalPrice(),
          paystackResponse,
        },
      })
        .then((res: any) => {
          console.log(res.data.createPayment.paymentId);
          handleCreateOrder(res.data.createPayment.paymentId);
        })
        .catch((err) => {
          console.log(err);
        });
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
    onSuccess: (res: any) => {
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
    onClose: () => alert("Thanks for doing business with us! Come back soon!!"),
  };
  return (
    <div className="checkout-page">
      <div className="billing-info">
        <h2> {"<"} Back</h2>
        <div
          className={`delivery ${deliveryCost ? "active" : ""}`}
          onClick={() => {
            setDeliveryCost(true);
          }}
        >
          <input type="checkbox" checked={deliveryCost} />
          <img src={delivery} alt="delivery" />

          <p>Get it delivered in only 30 minutes</p>
        </div>
        <div
          className={`pick-up ${!deliveryCost ? "active" : ""}`}
          onClick={() => {
            setDeliveryCost(false);
          }}
        >
          {/* <div className="pick-up"> */}
          <input type="checkbox" checked={!deliveryCost} />

          <img src={pickup} alt="pickup" />

          <p>Pick up available in 3 stores near you</p>
        </div>

        <form>
          <div className="input-wrapper">
            <label>Shipping Address</label>
            <input type="text" {...changeShipping} />
          </div>
          <div className="input-wrapper">
            <label>Name</label>
            <input
              type="text"
              {...changeName}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
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
          
          {/* <button
            onClick={() => {
              createOrder({
                // variables: {
                //   userId: "6332f653762c7392ea7480e1",
                //   amount: 6,
                //   paystackResponse: {
                //     message: "null",
                //     redirecturl: "null",
                //     reference: "null",
                //     status: "null",
                //     trans: "null",
                //     transaction: "null",
                //     trxref: "null",
                //   },
                // },
                // variables: {
                //   orderTotal: 5.9,
                //   userId: "6332f653762c7392ea7480e1",
                //   paymentId: "6332f653762c7392ea7480e1",
                //   orderItems: [
                //     // ...cart,
                //     {
                //       cardtype: cart[0].cardtype,
                //       category: cart[0].category,
                //       img1: cart[0].img1,
                //       img2: cart[0].img2,
                //       name: cart[0].name,
                //       price: 7,
                //       property: "null",
                //       quantity: 5,
                //       year: 5,
                //     },
                //   ],
                // },
                variables: {
                  orderTotal: 67.8,
                  userId: "6332f653762c7392ea7480e1",
                  paymentId: "6332f653762c7392ea7480e1",
                  orderItems: cart
                  // [
                  //   {
                  //     cardtype: "null",
                  //     category: "null",
                  //     img1: "null",
                  //     img2: "null",
                  //     name: "null",
                  //     price: 8.7,
                  //     property: "null",
                  //     quantity: 6.8,
                  //     year: 2022,
                  //   },
                  // ],
                },
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Stuff
          </button> */}
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
            <p>Shipping</p>
            <p>₦15.00</p>
          </div>
          {deliveryCost && (
            <div className="logistics-item">
              <p>Delivery</p>
              <p>₦15.00</p>
            </div>
          )}
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
