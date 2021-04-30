import { Helmet } from "react-helmet";
import { Typography, Container, Button, Box } from "@material-ui/core/";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import logo from "../assets/dice-stats-logo.svg";
import "../assets/App.css";

// constants
import { PAGE_TITLE_HOME } from "../utils/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -40,
      paddingTop: 15,
      paddingBottom: 15,
    },
    instructions: {
      paddingTop: 15,
    },
    button: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE_HOME}</title>
      </Helmet>
      <Container>
        <header className={classes.header}>
          <img src={logo} className="app-logo" alt="logo" />
          <Typography variant="h2">Dice Stats</Typography>
        </header>
        <Typography variant="h6">
          Let's keep track of your dice stats!
        </Typography>
        <Typography variant="subtitle1">
          This app will allow you to play any turn-based game that involves two
          standard (6 faces) dices and collect throw stats for you.
        </Typography>
        <Typography variant="subtitle2" className={classes.instructions}>
          How to use?
        </Typography>
        <Typography variant="body2">
          <ol>
            <li>Use the start button below or start from the menu.</li>
            <li>
              On each turn, either use the "Throw dices" button or manually
              select your dice throw using the "Manual dice throw" button.
            </li>
            <li>
              When the game ends, use the "End game" button to see the final
              stats.
            </li>
          </ol>
        </Typography>
        <Box className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => history.push("/play")}
          >
            Start
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
