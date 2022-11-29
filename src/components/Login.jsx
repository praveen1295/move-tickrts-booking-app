import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../features/contexts/userContext";

const Login = () => {
  const navigate = useNavigate();

  const { state, flag, setFlag, setCurrentUser, showAlert } =
    useContext(userContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    // eslint-disable-next-line
    const cUser = state.USER.map((user, index) => {
      if (user.email === loginData.email) {
        setCurrentUser({ ...user, index: index });
      }
      return user;
    });

    const auth = state.USER.some((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });
    if (!auth) {
      showAlert("Please enter valid credentials", "warning");
      return;
    }
    setFlag({ ...flag, login: true, cart: true });
    navigate("/");
    showAlert("Logged in successfully!", "success");
  };

  return (
    <div className="container my-4 mt-5" style={{ width: "50%" }}>
      <h1>Log In</h1>
      <div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#3d23e5",
            color: "white",
          }}
          onClick={(e) => handleSubmit(e)}
        >
          Log in
        </button>
      </div>
      <Link
        style={{ float: "right", color: "blue", textDecoration: "none" }}
        to="/signup"
      >
        CREATE NEW ACCOUNT
      </Link>
    </div>
  );
};

export default Login;
