import React, { useState } from "react";
import classes from "./Index.module.css";
import Register from "./Register/Register";
import Login from "./Login/Login";

const UserAuth = () => {
  const [loginPage, setLoginPage] = useState(false);

  const settingPage = () => {
    setLoginPage((loginPage) => !loginPage);
  };

  return (
    <main className={classes.userAuthPage}>
      <section className={classes.signUpcard}>
        <div className={classes.sigup_login_box}>
          <div
            onClick={settingPage}
            className={`${!loginPage ? classes.active_signup : ""}`}
          >
            Register
          </div>
          <div
            onClick={settingPage}
            className={`${loginPage ? classes.active_login : ""}`}
          >
            Login
          </div>
        </div>

        <div className={classes.Login_Register}>
          {loginPage ? <Login /> : <Register />}
        </div>
      </section>
    </main>
  );
};

export default UserAuth;
