import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
      <DialogActions>
        <LoadingButton
          loading={loading}
          onClick={async () => {
            setLoading(true);
            try {
              onClose("id");
            } finally {
              setLoading(false);
            }
          }}
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
