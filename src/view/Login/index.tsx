import React from "react";
import "./style.scss";
import { useMutation } from "@apollo/client";
import LOGIN from "../../graphql/schema/login.schema";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import importContent from "../../resources/importContent";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../@types/auth.d";

export default function Login() {
  const navigate = useNavigate();
  const { mail, lock } = importContent();

  const { signInWithGoogle } = React.useContext(AuthContext) as AuthContextType;
  const [login] = useMutation(LOGIN);

  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");

  let handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("first");
    login({
      variables: {
        email,
        password,
      },
      onCompleted: ({ login }) => {
        // localStorage.removeItem("token");
        // localStorage.setItem("token", login.token);
        // localStorage.setItem("loggedInUser", JSON.stringify(login.user));
        // if (localStorage.getItem("token")) {
        //   navigate("/dashboard");
        // }
        // localStorage.setItem("token", JSON.stringify(login.user));
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.login.token));
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(res.data.login.user)
        );

        if (
          res.data.login.token ==
          JSON.parse(localStorage.getItem("token") || "")
        ) {
          navigate("/dashboard");

          console.log("redirect");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        resetEmail();
        resetPassword();
      });
  };
  // React.useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate]);

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <div className="form-wrapper">
          <h2>Login</h2>
          <p>
            Sign in to your <p className="highlight">Stacked</p> account
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
          </form>
          <div className="button-wrapper">
            <Button
              title="Login"
              className="pry"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
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
          <div className="bottom-text">
            <p>Don't have an account ?</p>
            <h4 className="highlight">
              <Link to="/register">Register </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
