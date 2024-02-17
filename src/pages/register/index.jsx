import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className={classes.loginContainer}>
      <div>
        <form method="post" action="/login" className={classes.loginForm}>
          <input type="" placeholder="name"></input>
          <input type="email" placeholder="email"></input>
          <input type="" placeholder="Phone"></input>
          <input type="" placeholder="Institute name"></input>

          <input type="password" placeholder="password"></input>

          <button type="submit">register</button>
        </form>
      </div>
      <div className={classes.registerLink}>
        <p>Already registered?</p>
        <Link to="/login" className={classes.rlink}>
          login now!
        </Link>
      </div>
    </div>
  );
};

export default login;
