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
  const { mail } = importContent();
  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <div className="form-wrapper">
          <h2>Get Started</h2>
          <p>Already have an account Login</p>
          <Button title=" Sign up with Google" className="google" />
          <form>
            <label>Name: </label>
            <div className="auth-form-item">
              <img src={mail} alt="" />
              <input placeholder="Enter your full name" {...changeName} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
