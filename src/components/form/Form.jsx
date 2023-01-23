import React, { useState } from "react";
import Button from "../button/Button";
import "./Form.css";
import axios from "axios";

const Form = ({ setPlayer }) => {
  const [input, setInput] = useState("");

  const getUserInput = (e) => {
    setInput(e.target.value);
  };

  const searchForPlayer = (e) => {
    axios
      .get(`https://www.balldontlie.io/api/v1/players?search=${input}`)
      .then((response) => {
        setPlayer(response.data.data[0]);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form-styles" onSubmit={(e) => searchForPlayer(e)}>
      <label>
        Search For Player
        <input
          type="text"
          name="searchForPlayer"
          value={input}
          onChange={(e) => getUserInput(e)}
        />
      </label>
      <Button buttonTxt="Search" />
    </form>
  );
};

export default Form;
