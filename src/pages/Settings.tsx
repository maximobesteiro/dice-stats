import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from "@material-ui/core/";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import { useGlobalContext } from "../context/DiceStatsContext";

// constants
import { PAGE_TITLE_SETTINGS } from "../utils/constants";

const Settings: FC<{}> = (): ReactElement => {
  const { throwMethod, setThrowMethod } = useGlobalContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const targetName = event.target.name;

    switch (targetName) {
      case "balanced-dices":
        checked ? setThrowMethod("Balanced") : setThrowMethod("Random");
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE_SETTINGS}</title>
      </Helmet>
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <EqualizerIcon aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-balanced-dices"
            primary="Use balanced dices (card stack mode)"
            secondary="The dice results will be closer to the probability distribution expected after a significant number of dice rolls."
          />
          <ListItemSecondaryAction>
            <Switch
              name="balanced-dices"
              edge="end"
              onChange={handleChange}
              checked={throwMethod === "Balanced"}
              inputProps={{
                "aria-labelledby": "switch-list-label-balanced-dices",
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
};

export default Settings;
