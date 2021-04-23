import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface ManualThrowButtonProps {
  onClose: (num: number) => void;
}

export default function ManualThrowButton(props: ManualThrowButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");
  const [errorState, setErrorState] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    if (!value) {
      setErrorState(true);
    } else if (!errorState) {
      setOpen(false);
      setValue("");
      props.onClose(Number(value));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNum: number = Number(event.target.value);
    setValue(event.target.value);
    if (inputNum >= 2 && inputNum <= 12) {
      setErrorState(false);
    } else {
      setErrorState(true);
    }
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Manual dice throw
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Manual dice throw</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use your good old real-life dices and just input the resulting sum
            in the following field
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="manualThrow"
            label="Your dice throw"
            value={value}
            type="number"
            variant="outlined"
            helperText="Please use a number between 2 and 12"
            fullWidth
            onChange={handleChange}
            required
            error={errorState}
            inputProps={{ inputMode: "numeric" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
