import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";

// constants
import { PAGE_TITLE_SETTINGS } from "../utils/constants";

const Settings: FC<{}> = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE_SETTINGS}</title>
      </Helmet>
      <div>...SETTINGS...</div>
    </>
  );
};

export default Settings;
