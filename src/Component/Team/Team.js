import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import ListedPlayer from "../ListedPlayer/ListedPlayer";
import "../Team/Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://api.mocki.io/v1/b12432b1")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  const playerHandler = (player) => {
    const exists = list.find((member) => member === player);
    if (!exists) {
      setList([...list, player]);
    }
  };

  const removePlayer = (number) => {
    const newPlayer = team.filter((remove) => remove.id !== number);
    setTeam(newPlayer);
  };

  return (
    <div className="show-case">
      <div className="player-container">
        {team.map((item) => (
          <Player
            item={item}
            removePlayer={removePlayer}
            playerHandler={playerHandler}
          ></Player>
        ))}
      </div>
      <div className="team-container">
        <ListedPlayer list={list}></ListedPlayer>
      </div>
    </div>
  );
};

export default Team;
