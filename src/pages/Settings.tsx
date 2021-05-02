import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useGlobalContext } from "../context/DiceStatsContext";

// constants
import { PAGE_TITLE_SETTINGS } from "../utils/constants";

const Settings: FC<{}> = (): ReactElement => {
  const { throwMethod, setThrowMethod } = useGlobalContext();

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE_SETTINGS}</title>
      </Helmet>
      <div>Current throw method: {throwMethod}</div>
      <button onClick={() => setThrowMethod("Random")}>
        Set throw method to "Random"
      </button>
      <button onClick={() => setThrowMethod("Balanced")}>
        Set throw method to "Balanced"
      </button>
    </>
  );
};

export default Settings;
