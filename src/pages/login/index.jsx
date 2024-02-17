import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className={classes.loginContainer}>
      <div>
        <form method="post" action="/login" className={classes.loginForm}>
          <input type="email" placeholder="email..."></input>
          <input type="password" placeholder="password..."></input>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className={classes.registerLink}>
        <p>New here?</p>
        <Link to="/register" className={classes.rlink}>
          register now!
        </Link>
      </div>
    </div>
  );
};

export default login;
