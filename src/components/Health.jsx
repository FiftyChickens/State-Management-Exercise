import { useState } from "react";
import Attack from "./ParentComponent";

const Health = ({ value }) => {
  function emojiStatus(health) {
    if (health < 1) {
      return <>☠️</>;
    } else if (health < 100) {
      return <>❤️‍🩹</>;
    } else return <>💖</>;
  }
  return (
    <>
      Health: {value} {emojiStatus(value)}
    </>
  );
};
export default Health;
