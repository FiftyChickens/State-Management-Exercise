import { useState } from "react";

const GameState = ({ player, enemy }) => {
  const [currentState, setCurrentState] = useState(0);

  function compareNumbers(player, enemy) {
    if (enemy < 1 && player < 1) {
      return <p>It's a draw! 🤝 Both spacecraft have been neutralized.</p>;
    } else if (player > 1 && enemy < 1) {
      return (
        <p>
          Congratulations!, 💪 You've successfully defended your spacecraft.
        </p>
      );
    } else if (player < 1 && enemy > 1) {
      return <p>Mission Failed. 😵 Your spacecraft has been destroyed.</p>;
    } else {
      return <p>Engage the Enemy 💥</p>;
    }
  }

  return <>{compareNumbers(player, enemy)}</>;
};

export default GameState;
