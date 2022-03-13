import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiCall from "../../api/apiCall";
import useCheckAuthentication from "../../hooks/useCheckAuthentication";
import apiEndpoints from "../../lib/apiEndpoints";
import { setAuthToken, setUsername } from "../../lib/localStorage";
import "./styles.scss";
import { Props } from "./typing";

const Login: FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCredError, setIncorrectCredError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useCheckAuthentication(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (incorrectCredError) {
      setIncorrectCredError(false);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiCall({
      endpoint: apiEndpoints.login,
      method: "post",
      body: {
        email,
        password,
      },
    })
      .then(async (response) => {
        const responseJSON = await response.json();
        if (responseJSON?.code === 200) {
          if (responseJSON?.data?.token && responseJSON?.data?.name) {
            setAuthToken(responseJSON?.data?.token);
            setUsername(responseJSON?.data?.name);
            navigate("/posted-jobs", { replace: true });
          }
        } else if (responseJSON?.code === 401) {
          setIncorrectCredError(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="shadow bg-white login-modal">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={`form-control${
                incorrectCredError ? " border-danger" : ""
              }`}
              id="exampleInputEmail1"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              required
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control${
                incorrectCredError ? " border-danger" : ""
              }`}
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              value={password}
            />
            {incorrectCredError && (
              <span className="text-danger float-right">
                Incorrect email address or password
              </span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-padding"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="signup-link">
          New to MyJobs? <a href={"/"}>Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
