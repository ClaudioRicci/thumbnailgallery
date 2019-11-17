import React, { memo } from "react";
import { ButtonProps } from "../../interfaces/interfaces";
import "./Button.scss";

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

export default memo(Button);
