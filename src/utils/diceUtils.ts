import shuffle from "lodash.shuffle";
import concat from "lodash.concat";

// Math science
export const math = {
  // pick a random number between min and max (edges included)
  randomBetween: (min: number, max: number): number =>
    min + Math.floor(Math.random() * (max - min + 1)),
};

export const throwRandomDices = () => {
  return [math.randomBetween(1, 6), math.randomBetween(1, 6)];
};

export const generateCardStack = () => {
  const stack: Array<number> = [
    2,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    11,
    11,
    12,
  ];

  return shuffle(concat(stack, stack)).slice(0, 36);
};
