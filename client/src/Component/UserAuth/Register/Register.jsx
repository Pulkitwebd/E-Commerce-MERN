import React, { useState, useEffect } from "react";
import classes from "./Register.module.css";
import Axios from "axios";

const Register = () => {
  const initialValues = { username: "", email: "", password: "" };
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
      Axios.post("http://localhost:5002/api/auth/register", {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      }).then(function (res) {
        if (res.status == 201) {
          alert("Account has been created successfully!");
          setFormValues(initialValues);
        }
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

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
      <div className={classes.header}>Create your account</div>
      <form onSubmit={handleSubmit}>
        <div className={classes.labelInput}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className={classes.input}
            autoComplete="off"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          ></input>
          <p>{formErrors.username}</p>
        </div>

        <div className={classes.labelInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={classes.input}
            autoComplete="off"
            name="email"
            value={formValues.email}
            onChange={handleChange}
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
            name="password"
            value={formValues.password}
            onChange={handleChange}
          ></input>
          <p>{formErrors.password}</p>
        </div>

        <button className={classes.register} type="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
