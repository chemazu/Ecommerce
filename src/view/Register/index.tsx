import React from "react";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import { createUser } from "../../utils/firebase";
import importContent from "../../resources/importContent";

export default function Register() {
  const { value: name, change: changeName, reset: resetName } = useInput("");
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");
  const { mail,contact ,lock} = importContent();
  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <div className="form-wrapper">
          <h2>Get Started</h2>
       
          <form>
            <div className="name">
            <div className="auth-form-item">
            <p>Name: </p>
              <div className="input-item">
              <img src={contact} alt="" />
              <input placeholder="Enter your full name" {...changeName} />
              </div>
            </div>
            <div className="auth-form-item">
            <p>Name: </p>
              <div className="input-item">
              <img src={contact} alt="" />
              <input placeholder="Enter your full name" {...changeName} />
              </div>
            </div>
            </div>
            <div className="auth-form-item">
            <p>Email: </p>
              <div className="input-item">
              <img src={mail} alt="" />
              <input  type="email" placeholder="Enter your email" {...changeEmail} />
              </div>
            </div>
            <div className="auth-form-item">
            <p>Password: </p>
              <div className="input-item">
              <img src={lock} alt="" />
              <input type="password" placeholder="Enter your password" {...changePassword} />
              </div>
            </div>
            <div className="auth-form-item">
            
      
              <input type="checkbox"  />
              <span>I agree to the apps terms and conditions and privacy policy </span>

              
            </div>
            <div className="button-wrapper">
          <Button title="Register" className="pry" type="submit" />
              
            </div>
          </form>
         
          <div style={{display:"flex"}}>
          <hr/>or<hr/>
          </div>
          <Button title=" Sign up with Google" className="google" type="" />

          <p>Already have an account Log in</p>
        </div>
      </div>
    </div>
  );
}
