import React, { useState } from "react";
import "../assets/App.css";
import TurnBoard from "../components/game/TurnBoard";
import EndGameButton from "../components/game/EndGameButton";
import { Helmet } from "react-helmet";
import RouteLeavingGuard from "../components/RouteLeavingGuard";
import { useHistory } from "react-router-dom";

// constants
import { PAGE_TITLE_GAME } from "../utils/constants";

function Game() {
  const [gameId, setGameId] = useState(1);
  const [throws, setThrows] = useState(Array<number>());
  const [endGameDisabled, setEndGameDisabled] = useState(true);
  const history = useHistory();

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
        <RouteLeavingGuard
          when={!endGameDisabled}
          navigate={(path) => history.push(path)}
          shouldBlockNavigation={() => true}
        />
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
