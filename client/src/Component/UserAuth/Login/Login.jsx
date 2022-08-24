import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import Axios from "axios";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Axios.post("http://localhost:5002/api/auth/login", {
        email: formValues.email,
        password: formValues.password,
      }).then(function (res) {
        if (res.status == 200) {
          setFormValues(initialValues);
        }
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 30) {
      errors.password = "Password cannot exceed more than 30 characters";
    }

    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.header}>Login your account</div>

        <div className={classes.labelInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={classes.input}
            autoComplete="off"
            onChange={handleChange}
            name="email"
            value={formValues.email}
          ></input>
          <p>{formErrors.email}</p>
        </div>

        <div className={classes.labelInput}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={classes.input}
            autoComplete="off"
            onChange={handleChange}
            name="password"
            value={formValues.password}
          ></input>
          <p>{formErrors.password}</p>
        </div>

        <button className={classes.register} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
