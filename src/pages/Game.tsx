import React, { useState } from "react";
import logo from "../assets/dice-stats-logo.svg";
import "../assets/App.css";
import TurnBoard from "../components/game/TurnBoard";
import EndGameButton from "../components/game/EndGameButton";
import { Helmet } from "react-helmet";

// constants
import { PAGE_TITLE_GAME } from "../utils/constants";

function Game() {
  const [gameId, setGameId] = useState(1);
  const [throws, setThrows] = useState(Array<number>());
  const [endGameDisabled, setEndGameDisabled] = useState(true);

  const handleNewGame = () => {
    setGameId(gameId + 1);
    setThrows([]);
    setEndGameDisabled(true);
  };

  const handleTerminatedTurn = (num: number) => {
    setThrows([...throws, num]);
    setEndGameDisabled(false);
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE_GAME}</title>
      </Helmet>
      <div className="app">
        <header className="app-header">
          <h1>
            <img src={logo} className="app-logo" alt="logo" />
            Dice Stats
            <img src={logo} className="app-logo" alt="logo" />
          </h1>
          <p>
            Play your dice-based game! <br />
            I'll keep track of the stats ;-)
          </p>
        </header>
        <TurnBoard
          key={gameId}
          throws={throws}
          onTerminatedTurn={handleTerminatedTurn}
        />
        <EndGameButton
          disabled={endGameDisabled}
          throws={throws}
          onNewGame={handleNewGame}
        />
      </div>
    </>
  );
}

export default Game;
