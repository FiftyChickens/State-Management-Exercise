import "./GameState.css";

const GameState = ({ player, enemy }) => {
  function compareNumbers(player, enemy) {
    if (enemy < 1 && player < 1) {
      return <>It's a draw! 🤝 Both sacecraft have been neutralized.</>;
    } else if (player > 1 && enemy < 1) {
      return (
        <>Congratulations!, 💪 You've successfully defended your spacecraft.</>
      );
    } else if (player < 1 && enemy > 1) {
      return <>Mission Failed. 😵 Your spacecraft has been destroyed.</>;
    } else {
      return <>Engage the Enemy 💥</>;
    }
  }

  return <p className="gameState">{compareNumbers(player, enemy)}</p>;
};

export default GameState;
