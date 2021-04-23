// Math science
const math = {
  // pick a random number between min and max (edges included)
  random: (min: number, max: number): number =>
    min + Math.floor(Math.random() * (max - min + 1)),
};

export default math;
