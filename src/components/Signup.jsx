import React, { useState, useContext } from "react";
import userContext from "../features/contexts/userContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cartData: [],
  });
  const { state, dispatch, showAlert } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.password !== userData.confirmPassword ||
      userData.name === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      showAlert("invalid credentials or password not matched", "warning");
      return;
    }

    const auth = state.USER.some((user) => {
      return user.email === userData.email;
    });

    if (auth) {
      showAlert("User of this Email Already Exist", "warning");
      return;
    }
    showAlert("Registered successfully!", "success");

    dispatch({ type: "userData", payload: userData });
    setUserData({
      ...userData,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="container" style={{ width: "50%", marginTop: "10%" }}>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              aria-label="First name"
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
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
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={userData.confirmPassword}
              onChange={(e) => {
                setUserData({ ...userData, confirmPassword: e.target.value });
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
        >
          Sign up
        </button>
      </form>
      <Link
        style={{ color: "blue", float: "right", textDecoration: "none" }}
        to="/login"
      >
        GO TO LOGIN PAGE
      </Link>
    </div>
  );
};

export default Signup;
