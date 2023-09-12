import React, { useState, useEffect } from "react";
import loginstyle from "../Styles/Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const UserLogin = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("", user).then((res) => {
        // backend db url
        alert(res.data.message);
        setUserState(res.data.user);
        navigate("/user-profile", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <div className={loginstyle.container}>
      <div className={loginstyle.login}>
        <form>
          <h1 style={{ margin: "10px" }}>Login</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className={loginstyle.error}>{formErrors.email}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={loginstyle.error}>{formErrors.password}</p>
          <button className={loginstyle.button_common} onClick={loginHandler}>
            Login
          </button>
        </form>
        <NavLink to="/user-register">Not yet registered? Register Now</NavLink>
      </div>
    </div>
  );
};
export default UserLogin;
