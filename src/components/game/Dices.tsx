import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ManualThrowButton from "./ManualThrowButton";
import math from "../../utils/math";

import { ReactComponent as DiceUnknown } from "../../assets/dice-unknown.svg";
import { ReactComponent as Dice1 } from "../../assets/dice-1.svg";
import { ReactComponent as Dice2 } from "../../assets/dice-2.svg";
import { ReactComponent as Dice3 } from "../../assets/dice-3.svg";
import { ReactComponent as Dice4 } from "../../assets/dice-4.svg";
import { ReactComponent as Dice5 } from "../../assets/dice-5.svg";
import { ReactComponent as Dice6 } from "../../assets/dice-6.svg";

interface DicesProps {
  onThrowResolution: (num: number) => void;
}

const Dices = (props: DicesProps) => {
  const [currentDices, setCurrentDices] = useState([0, 0]);
  const theme = useTheme();

  const diceAssets = [
    <DiceUnknown className="dice" fill={theme.palette.primary.main} />,
    <Dice1 className="dice" fill={theme.palette.primary.main} />,
    <Dice2 className="dice" fill={theme.palette.primary.main} />,
    <Dice3 className="dice" fill={theme.palette.primary.main} />,
    <Dice4 className="dice" fill={theme.palette.primary.main} />,
    <Dice5 className="dice" fill={theme.palette.primary.main} />,
    <Dice6 className="dice" fill={theme.palette.primary.main} />,
  ];

  const handleDiceThrow = () => {
    const dice1 = math.random(1, 6);
    const dice2 = math.random(1, 6);
    setCurrentDices([dice1, dice2]);
    props.onThrowResolution(dice1 + dice2);
  };

  const handleManualThrow = (num: number) => {
    setCurrentDices([Math.floor(num / 2), Math.ceil(num / 2)]);
    props.onThrowResolution(num);
  };

  return (
    <>
      <div className="dices">
        {diceAssets[currentDices[0]]}
        {diceAssets[currentDices[1]]}
      </div>
      <div className="buttons">
        <Button variant="outlined" color="primary" onClick={handleDiceThrow}>
          Throw dices
        </Button>
        <ManualThrowButton onClose={handleManualThrow} />
      </div>
    </>
  );
};

export default Dices;
