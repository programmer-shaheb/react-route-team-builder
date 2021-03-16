import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./ListedPlayer.css";

const ListedPlayer = (props) => {
  const teamMember = props.list;
  const totalBudget = teamMember.reduce(
    (total, current) => total + current.salary,
    0
  );

  return (
    <div className="playerStyle">
      <h1>Selected Player List</h1>
      <h3>Player Select: {teamMember.length}</h3>
      <h3>Total Budget: € {totalBudget}</h3>
      <h4>Selected Player Name</h4>
      <div className="line"></div>
      <ul className="listStyle">
        {teamMember.map((member) => (
          <li>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            {member.name} - € {member.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListedPlayer;
