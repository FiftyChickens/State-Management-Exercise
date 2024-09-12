import React, { useState, useEffect } from "react";
import ChildComponent from "./Player";
import GameState from "./GameState";

const ParentComponent = () => {
  const [player, setPlayer] = useState(100);
  const [enemy, setEnemy] = useState(100);

  const handleClick = () => {
    if (player === 0 || enemy === 0) {
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
  };

  return (
    <>
      <div>
        Player <ChildComponent value={player} />
      </div>
      <div>
        Enemy <ChildComponent value={enemy} />
      </div>
      <GameState player={player} enemy={enemy} />
      <div className="attack">
        <button onClick={handleClick}>Attack</button>
        <button
          className="reset"
          style={{ backgroundColor: "peachpuff" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ParentComponent;
