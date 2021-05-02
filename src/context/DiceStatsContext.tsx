import { createContext, useContext } from "react";

export type GlobalContent = {
  throwMethod: string;
  setThrowMethod: (c: string) => void;
};

export const DiceStatsContext = createContext<GlobalContent>({
  throwMethod: "Random", // set a default value
  setThrowMethod: () => {},
});

export const useGlobalContext = () => useContext(DiceStatsContext);
