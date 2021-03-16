import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Player = (props) => {
  const { id, name, salary, image, country } = props.item;
  // console.log([props.item]);
  const [countries, setCountries] = useState("");

  const addCountry = (text) => {
    setCountries(text);
  };
  return (
    <div
      key={id}
      className="card"
      style={{ width: "16rem", borderRadius: "10px", margin: "10px" }}
    >
      <img
        src={image}
        style={{ width: "100%", borderRadius: "5px", height: "200px" }}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body text-center ">
        <h4 className="card-title">{name}</h4>
        <h4 className="card-title">Country: {countries}</h4>
        <h5 className="card-text">Salary: € {salary}</h5>
        <button
          onClick={() => props.playerHandler(props.item)}
          className="btn btn-info mt-3"
        >
          Add To List
        </button>
        <button
          onClick={() => addCountry(country)}
          className="btn btn-success m-3"
        >
          Show Country
        </button>
        <button
          onClick={() => props.removePlayer(id)}
          className="btn btn-danger"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Player;
