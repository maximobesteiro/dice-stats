import React, { useState, FC } from "react";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ManualThrowButton from "./ManualThrowButton";
import {
  generateCardStack,
  throwRandomDices,
  math,
} from "../../utils/diceUtils";
import { useGlobalContext } from "../../context/DiceStatsContext";

import { ReactComponent as DiceUnknown } from "../../assets/dice-unknown.svg";
import { ReactComponent as Dice1 } from "../../assets/dice-1.svg";
import { ReactComponent as Dice2 } from "../../assets/dice-2.svg";
import { ReactComponent as Dice3 } from "../../assets/dice-3.svg";
import { ReactComponent as Dice4 } from "../../assets/dice-4.svg";
import { ReactComponent as Dice5 } from "../../assets/dice-5.svg";
import { ReactComponent as Dice6 } from "../../assets/dice-6.svg";

interface DicesProps {
  onThrowResolution: (num: number, cardStack: number[]) => void;
  dicesCardStack: number[];
}

const Dices: FC<DicesProps> = ({ dicesCardStack, ...props }) => {
  const [currentDices, setCurrentDices] = useState([0, 0]);
  const theme = useTheme();
  const { throwMethod } = useGlobalContext();

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
    //console.log(throwMethod, dicesCardStack);
    let dice1: number, dice2: number;
    let localCardStack = dicesCardStack;

    switch (throwMethod) {
      case "Random":
        [dice1, dice2] = throwRandomDices();
        break;
      case "Balanced":
      default:
        if (localCardStack.length === 0) {
          localCardStack = generateCardStack();
        }
        const randomlyPickedPosition = math.randomBetween(
          0,
          localCardStack.length - 1
        );
        const resultingCard = localCardStack.splice(
          randomlyPickedPosition,
          1
        )[0];

        [dice1, dice2] = [
          Math.floor(resultingCard / 2),
          Math.ceil(resultingCard / 2),
        ];
        break;
    }
    setCurrentDices([dice1, dice2]);
    props.onThrowResolution(dice1 + dice2, localCardStack);
  };

  const handleManualThrow = (num: number) => {
    setCurrentDices([Math.floor(num / 2), Math.ceil(num / 2)]);
    props.onThrowResolution(num, dicesCardStack);
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
