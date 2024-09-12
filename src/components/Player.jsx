import { useState } from "react";
import Attack from "./Attack";

const ChildComponent = ({ value }) => {
  function emojiStatus(health) {
    if (health < 1) {
      return <>☠️</>;
    } else if (health < 100) {
      return <>❤️‍🩹</>;
    } else return <>💖</>;
  }
  return (
    <p>
      Health: {value} {emojiStatus(value)}
    </p>
  );
};
export default ChildComponent;
