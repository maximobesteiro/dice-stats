import { FC, ReactNode, useReducer } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// components
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

// constants
import { DRAWER_WIDTH, FOOTER_HEIGHT } from "../../utils/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      background: theme.palette.background.paper,
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: DRAWER_WIDTH,
    },
  })
);

// define interface to represent component props
interface Props {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
  children: ReactNode;
}

const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children }) => {
  const classes = useStyles();
  const [open, toggle] = useReducer((open) => !open, false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleMenuOpen={toggle}
        toggleTheme={toggleTheme}
        useDefaultTheme={useDefaultTheme}
      />
      <Navigation open={open} handleMenuClose={toggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      <footer style={{ borderColor: "red" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
