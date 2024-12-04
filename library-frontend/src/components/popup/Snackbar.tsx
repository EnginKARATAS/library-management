import { Alert, Snackbar as MUISnackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackbar } from '../../store/slices/userSlice';

export default function Snackbar() {
  const dispatch = useDispatch();
  const { snackbar } = useSelector((state: any) => state.user);

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <MUISnackbar
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snackbar.message}
      </Alert>
    </MUISnackbar>
  );
}