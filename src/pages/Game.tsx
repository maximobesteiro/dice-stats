import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "../assets/App.css";
import TurnBoard from "../components/game/TurnBoard";
import EndGameStatsDialog from "../components/game/EndGameStatsDialog";
import { Helmet } from "react-helmet";
import RouteLeavingGuard from "../components/RouteLeavingGuard";
import { useHistory } from "react-router-dom";

// constants
import { PAGE_TITLE_GAME } from "../utils/constants";

function Game() {
  const [gameId, setGameId] = useState(1);
  const [throws, setThrows] = useState(Array<number>());
  const [endGameDisabled, setEndGameDisabled] = useState(true);
  const [endGameStatsDialogOpen, setEndGameStatsDialogOpen] = useState(false);
  const history = useHistory();

  const handleNewGame = () => {
    setGameId(gameId + 1);
    setThrows([]);
    setEndGameStatsDialogOpen(false);
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
        <Button
          disabled={endGameDisabled}
          variant="contained"
          color="primary"
          onClick={() => setEndGameStatsDialogOpen(true)}
        >
          End game
        </Button>
        <EndGameStatsDialog
          open={endGameStatsDialogOpen}
          throws={throws}
          onNewGame={handleNewGame}
          onClose={() => setEndGameStatsDialogOpen(false)}
        />
      </div>
    </>
  );
}

export default Game;
