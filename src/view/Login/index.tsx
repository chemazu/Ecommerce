import React, { useState } from "react";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import { createUser, signInWithGoogle } from "../../utils/firebase";
import importContent from "../../resources/importContent";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { AuthContextType } from "../../@types/auth.d";


export default function Login() {
const history = useNavigate();
  
  const { login,currentUser} = React.useContext(AuthContext) as AuthContextType;

  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");
  const { mail, lock } = importContent();
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    login(email,password)
    history("/dashboard")

  };

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <div className="form-wrapper">
          <h2>Login</h2>
          <p>
            Sign in to your <h4 className="highlight">Stacked</h4> account
          </p>

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


            <Button
              title="Login"
              className="pry"
              type="submit"
              onClick={handleSubmit}
            />
          </form>

          <div className="divider">
            <hr />
            or
            <hr />
          </div>

          <Button
            title=" Sign up with Google"
            className="google"
            type=""
            onClick={signInWithGoogle}
          />

          <p>
            Already have an account{" "}
            <h4 className="highlight">
              <Link to="/register">Register </Link>
            </h4>
          </p>
        </div>
      </div>
    </div>
  );
}
