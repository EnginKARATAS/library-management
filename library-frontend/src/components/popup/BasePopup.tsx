import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Button,
  Rating,
  Typography,
} from "@mui/material";
import { DialogProps } from "@toolpad/core";
import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";
import { fetchUsers } from "../../store/slices/userSlice";
import { fetchBookDetails } from "../../store/slices/bookSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

export default function BasePopup({
  open,
  onClose,
  payload,
}: DialogProps<
  { component: React.ReactNode; title: string; bookId: number },
  string | null
>) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookDetails(payload.bookId));
    dispatch(fetchUsers());
  }, [dispatch, payload.bookId]);

  const [loading, setLoading] = React.useState(false);

  return (
    <Dialog fullWidth open={open} onClose={() => onClose(null)}>
      <DialogTitle>{payload.title}</DialogTitle>
      <DialogContent>{payload.component}</DialogContent>
    </Dialog>
  );
}
export function BasePopup2({
  open,
  onClose,
}: DialogProps<undefined, string | null>) {
  const [result, setResult] = React.useState(0);
  return (
    <Dialog fullWidth open={open} onClose={() => onClose(null)}>
      <DialogTitle>Return Book</DialogTitle>
      <DialogContent>
        <DialogContentText>Please Share with us your rating</DialogContentText>
        <Rating
          name="read-only"
          value={result}
          size="large"
          onChange={(event, newValue) => {
            setResult(newValue || 0);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(result.toString())}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
