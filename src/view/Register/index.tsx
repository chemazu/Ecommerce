import React, { useState, useContext } from "react";
// import { CREATEUSER } from "../../graphql/schema/account.schema";
import CREATEUSER from "../../graphql/schema/register.schema";
import { gql, useMutation } from "@apollo/client";
import Button from "../../components/Button";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
// import { signInWithGoogle } from "../../utils/firebase";
import importContent from "../../resources/importContent";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../@types/auth.d";

export default function Register() {
  const stuff = gql`
    mutation Mutation(
      $firstname: String!
      $lastname: String!
      $email: String!
      $password: String!
      $type: String!
    ) {
      createUser(
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        type: $type
      ) {
        user {
          id
          name
          email
          password
          type
          createdAt
        }
        token
      }
    }
  `;
  const [createUser, { data, loading, error }] = useMutation(CREATEUSER);

  console.log(CREATEUSER);
  const history = useNavigate();
  const { signup, signInWithGoogle } = React.useContext(
    AuthContext
  ) as AuthContextType;

  const {
    value: firstName,
    change: changeFirstName,
    reset: resetFirstName,
  } = useInput("");

  const {
    value: lastName,
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
  const graphqlRegister = (e: any) => {
    e.preventDefault();
    createUser({
      variables: {
        firstname: "SDSDSD",
        lastname: "SDSDSD",
        password: "SDSDSD",
        email: "SDSDSD",
        type: "customer",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data, loading, error);
    console.log(error instanceof Error);
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLInputElement>
  ): Promise<any> => {
    e.preventDefault();
    // graphqlRegister();
    // const data = await signup(`${firstName} ${lastName}`, email, password);
    // history("/dashboard");
    // resetFirstName();
    // resetLastName();
    // resetPassword();
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
                  <input placeholder="First name" {...changeFirstName} />
                </div>
              </div>
              <p className="spacer" style={{ width: "20px" }}>
                &nbsp;
              </p>

              <div className="auth-form-item">
                <p>Last name: </p>
                <div className="input-item">
                  <img src={contact} alt="" />
                  <input placeholder="Last name" {...changeLastName} />
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
              onClick={graphqlRegister}
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
