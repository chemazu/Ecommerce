import React from "react";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import { createUser } from "../../utils/firebase";
import importContent from "../../resources/importContent";

export default function Register() {
  const {
    value: firstName,
    change: changeFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: LastName,
    change: changeLastName,
    reset: resetLastName,
  } = useInput("");

  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");
  const { mail, contact, lock } = importContent();
  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <div className="form-wrapper">
          <h2>Get started</h2>
          <p>Create an account to start using stacked</p>

          <form>
            <div className="name">
              <div className="auth-form-item">
                <p>First name: </p>
                <div className="input-item">
                  <img src={contact} alt="" />
                  <input
                    placeholder="Enter your first name"
                    {...changeFirstName}
                  />
                </div>
              </div>
              <p style={{ width: "20px" }}>&nbsp;</p>

              <div className="auth-form-item">
                <p>Last name: </p>
                <div className="input-item">
                  <img src={contact} alt="" />
                  <input
                    placeholder="Enter your last name"
                    {...changeLastName}
                  />
                </div>
              </div>
            </div>
            <div className="auth-form-item">
              <p>Email: </p>
              <div className="input-item">
                <img src={mail} alt="" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...changeEmail}
                />
              </div>
            </div>
            <div className="auth-form-item">
              <p>Password: </p>
              <div className="input-item">
                <img src={lock} alt="" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...changePassword}
                />
              </div>
            </div>
            <div className="auth-form-item">
              <input type="checkbox" />
              <span style={{ paddingLeft: "15px" }}>
                I agree to the apps terms and conditions and privacy policy{" "}
              </span>
            </div>

            <Button title="Register" className="pry" type="submit" />
          </form>

          <div className="divider">
            <hr />
            or
            <hr />
          </div>

          <Button title=" Sign up with Google" className="google" type="" />

          <p>Already have an account Log in</p>
        </div>
      </div>
    </div>
  );
}
