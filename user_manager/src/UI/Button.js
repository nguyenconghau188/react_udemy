import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type="button"
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
