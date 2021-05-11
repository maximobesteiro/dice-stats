import { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

// constants
import { DRAWER_WIDTH } from "../../utils/constants";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      height: 29,
      marginRight: 10,
    },
    title: {
      //color: theme.palette.primary.main,
      fontWeight: 600,
      fontFamily: "Lobster",
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
  })
);

// define interface to represent component props
interface Props {
  handleMenuOpen: () => void;
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

const Header: FC<Props> = ({
  handleMenuOpen,
  toggleTheme,
  useDefaultTheme,
}): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open menu"
          onClick={handleMenuOpen}
          edge="start"
          className={classes.menuButton}
          size="small"
        >
          <MenuIcon />
        </IconButton>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Logo
            className={classes.logo}
            fill={theme.palette.primary.contrastText}
          />
          <Typography variant="h4" className={classes.title}>
            Dice Stats
          </Typography>
        </div>
        <IconButton color="inherit" onClick={toggleTheme}>
          {useDefaultTheme ? (
            <Tooltip title="Switch to dark mode" placement="bottom">
              <Brightness4Icon />
            </Tooltip>
          ) : (
            <Tooltip title="Switch to light mode" placement="bottom">
              <BrightnessHighIcon />
            </Tooltip>
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
