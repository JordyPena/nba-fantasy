import React from "react";
import Button from "../button/Button";
import "./Form.css";

const Form = () => {
  return (
    <form className="form-styles">
      <label>
        <input type="text" name="searchForPlayer" />
      </label>
      <Button buttonTxt="Search" />
    </form>
  );
};

export default Form;
