import React from "react";
import CREATEUSER from "../../graphql/schema/register.schema";
import { useMutation } from "@apollo/client";
import Button from "../../components/Button";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import importContent from "../../resources/importContent";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../@types/auth.d";

export default function Register() {
  const [createUser] = useMutation(CREATEUSER);

  const navigate = useNavigate();

  const { signInWithGoogle } = React.useContext(AuthContext) as AuthContextType;

  const {
    value: firstname,
    change: changeFirstname,
    reset: resetFirstname,
  } = useInput("");

  const {
    value: lastname,
    change: changeLastname,
    reset: resetLastname,
  } = useInput("");

  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");

  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");

  const { mail, contact, lock } = importContent();
  
  const handleRegisterSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    createUser({
      variables: {
        firstname,
        lastname,
        password,
        email,
        type: "customer",
      },
      onCompleted: ({ createUser }) => {
        localStorage.setItem("token", JSON.stringify(createUser.user));
        if (localStorage.getItem("user")) {
          navigate("/dashboard");
        }
      },
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        resetEmail();
        resetFirstname();
        resetLastname();
        resetPassword();
      });
  };

  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <div className="form-wrapper">
          <h2>Get started</h2>
          <div>
            Create an account to start using{" "}
            <h4 className="highlight">Stacked</h4>
          </div>

          <form>
            <div className="name">
              <div className="auth-form-item">
                <p>First name: </p>
                <div className="input-item">
                  <img src={contact} alt="" />
                  <input placeholder="First name" {...changeFirstname} />
                </div>
              </div>
              <p className="spacer" style={{ width: "20px" }}>
                &nbsp;
              </p>

              <div className="auth-form-item">
                <p>Last name: </p>
                <div className="input-item">
                  <img src={contact} alt="" />
                  <input placeholder="Last name" {...changeLastname} />
                </div>
              </div>
            </div>
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
            <div className="auth-form-item">
              <input type="checkbox" />
              <span style={{ paddingLeft: "15px" }}>
                I agree to{" "}
                <h4 className="highlight">Stacked's terms of service</h4> and{" "}
                <h4 className="highlight">privacy policy</h4>{" "}
              </span>
            </div>

            <Button
              title="Register"
              className="pry"
              type="submit"
              onClick={handleRegisterSubmit}
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
              {" "}
              <Link to="/login">Log in </Link>
            </h4>
          </p>
        </div>
      </div>
    </div>
  );
}
