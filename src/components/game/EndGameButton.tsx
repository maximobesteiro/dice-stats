import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import ThrowsHistogram from "./ThrowsHistogram";
import SpecificDiceThrowChart from "./SpecificDiceThrowChart";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface EndGameProps {
  throws: number[];
  onNewGame: () => void;
  disabled: boolean;
}

const EndGameButton = (props: EndGameProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedDice, setSelectedDice] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedDice(0);
  };
  const handleOnBarClick = (data: any, index: any) => {
    setSelectedDice(data.num);
  };
  const handleStartNewGame = () => {
    handleClose();
    props.onNewGame();
  };

  return (
    <div>
      <Button
        disabled={props.disabled}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        End game
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Game Information
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Tap or click on any of the bars in the next chart to see specific
            throw history of the selected number.
          </Typography>
          <ThrowsHistogram
            throws={props.throws}
            onBarClick={handleOnBarClick}
          />
          <SpecificDiceThrowChart throws={props.throws} dice={selectedDice} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStartNewGame} color="primary">
            Start new game
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EndGameButton;
