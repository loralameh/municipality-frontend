import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { setSnackbar } from "features/snackBar/snackBarSlice";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = () => {
  const dispatch = useDispatch();
  const { open, type, message } = useSelector((store) => store.snackBar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar({ open: false, type, message }));
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={type}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
