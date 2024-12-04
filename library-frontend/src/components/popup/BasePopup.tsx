import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { DialogProps } from "@toolpad/core";
import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";

export default function BasePopup({
  open,
  onClose,
  payload,
}: DialogProps<{ component: React.ReactNode; title: string }, string | null>) {
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
