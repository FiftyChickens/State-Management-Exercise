import { useState } from "react";
import "./App.css";
import GameState from "./components/GameState";
import Player from "./components/Player";
import ParentComponent from "./components/Attack";

function App() {
  return (
    <>
      <h1>Space Battle Simulator</h1>
      <ParentComponent />
    </>
  );
}

export default App;
