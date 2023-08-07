import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false);

  const ToggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame GameStarted={ToggleGamePlay} />
      )}
    </>
  );
};

export default App;
