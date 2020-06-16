/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-this-in-sfc */
import React from "react";
// import { BotaoSubmitStyle } from "../styles";
import "../Modal/styles.css";

export const BotaoSubmit = (props) => {
  return (
    // <BotaoSubmitStyle>
    <button
      onClick={props.onClick}
      type="submit"
      className="gb gb-bordered hover-slide hover-fill reverse"
      id="gb9"
    >
      {props.children}
    </button>
    // </BotaoSubmitStyle>
  );
};
