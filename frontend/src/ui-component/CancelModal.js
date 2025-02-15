import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from 'store';

export default function CancelModalDialog(props) {
  const { open, cancelCallback, cancelPlanInfo } = props;
  const dataLoading = useAppSelector((state) => state.dataLoading);

  return (
    <div>
      <Dialog
        open={open}
        onClose={cancelCallback}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Cancel Plan Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{`Are you sure want to cancel this plan?`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelCallback}>Cancel</Button>
          <Button onClick={cancelPlanInfo} autoFocus sx={{ color: 'red' }} disabled={dataLoading.loading}>
            {dataLoading.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="10px" />}
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
