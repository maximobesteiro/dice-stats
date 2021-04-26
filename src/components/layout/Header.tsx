import { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";

// constants
import { APP_TITLE, DRAWER_WIDTH } from "../../utils/constants";

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
    },
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
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

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
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
          <Typography variant="h6" noWrap>
            {APP_TITLE}
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
