import React, { useState } from "react";
import Health from "./Health";
import GameState from "./GameState";
import "./ParentComponent.css";

const ParentComponent = () => {
  const [player, setPlayer] = useState(100);
  const [enemy, setEnemy] = useState(100);
  let [showButton, setShowButton] = useState(true);

  if (
    (showButton === true && player < 1) ||
    (showButton === true && enemy < 1)
  ) {
    setShowButton(false);
  }

  const handleClick = () => {
    if (player < 1 || enemy < 1) {
      return;
    }
    const decrement1 = Math.floor(Math.random() * 70) + 1;
    setPlayer(() => Math.max(player - decrement1, 0));
    const decrement2 = Math.floor(Math.random() * 70) + 1;
    setEnemy(() => Math.max(enemy - decrement2, 0));
  };

  const reset = () => {
    setPlayer(() => Math.min(player + 100, 100));
    setEnemy(() => Math.min(player + 100, 100));
    setShowButton(true);
    return;
  };

  return (
    <>
      <h1 className="title">Space Battle Simulator</h1>
      <section>
        <p className="player">
          Player <Health value={player} />
        </p>
        <div>
          {showButton && (
            <button className="attack" onClick={handleClick}>
              Attack
            </button>
          )}
          {!showButton && (
            <button className="reset" onClick={reset}>
              Reset
            </button>
          )}
        </div>
        <p className="enemy">
          Enemy <Health value={enemy} />
        </p>
      </section>
      <GameState player={player} enemy={enemy} />
    </>
  );
};

export default ParentComponent;
