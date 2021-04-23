import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ThrowsHistogram from "./ThrowsHistogram";
import Dices from "./Dices";

interface TurnBoardProps {
  onTerminatedTurn: (num: number) => void;
  throws: number[];
}

const TurnBoard = (props: TurnBoardProps) => {
  const [turn, setTurn] = useState(1);

  const [nextTurnDisabled, setNextTurnDisabled] = useState(true);
  const [currentThrow, setCurrentThrow] = useState(0);

  const handleNextTurn = () => {
    if (currentThrow > 0) {
      setTurn(turn + 1);
      props.onTerminatedTurn(currentThrow);
      setCurrentThrow(0);
      setNextTurnDisabled(true);
    }
  };

  const handleThrowResolution = (num: number) => {
    setCurrentThrow(num);
    setNextTurnDisabled(false);
  };

  return (
    <div className="turn-board">
      <div className="turn-indicator">Turn: {turn}</div>
      <Dices key={turn} onThrowResolution={handleThrowResolution} />
      <Button
        disabled={nextTurnDisabled}
        variant="outlined"
        color="primary"
        onClick={handleNextTurn}
      >
        Next turn
      </Button>
      <ThrowsHistogram throws={props.throws} />
    </div>
  );
};

export default TurnBoard;
