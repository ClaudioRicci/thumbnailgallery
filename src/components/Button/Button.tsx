import React from "react";
import "./Button.scss";
import { pure } from "recompose";
import { ButtonProps } from "../../interfaces/interfaces";

const Button: React.SFC<ButtonProps> = props => {
  return (
    <button data-testid="button" className={props.buttonType}>
      <span>{props.label}</span>
    </button>
  );
};

Button.defaultProps = {
  buttonType: "button",
  label: "Close"
};

export default pure(Button);
