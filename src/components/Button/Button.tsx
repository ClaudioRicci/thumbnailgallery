import React from "react";
import "./Button.scss";
import { pure } from "recompose";
import { ButtonProps } from "../../interfaces/interfaces";

const Button: React.SFC<ButtonProps> = props => {
  return (
    <a
      data-testid="button"
      className={props.buttonType}
      href={props.link}
      title={props.title}
    >
      <span>{props.label}</span>
    </a>
  );
};

Button.defaultProps = {
  buttonType: "button",
  link: "link",
  title: "title",
  label: "Get Details"
};

export default pure(Button);
