import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { UserContext } from '../../../../contexts/UserContext';
import EventService from '../../../../../api/EventService';
import { useParams } from 'react-router-dom';
import { Box, DialogActions } from '@mui/material';
import ErrorSnackbar from '../../../common/snackbars/ErrorSnackbar';
import SuccessSnackbar from '../../../common/snackbars/SuccessSnackbar';
import { CenteredTextStyled, ButtonUnregisterEventStyled } from '../register/StyledComponents';
import { EmailModel } from '../../../../../interfaces/EmailModel';
import { useContext } from 'react';

export interface SimpleDialogProps {
  readonly isDialogOpen: boolean;
  onClose: () => void;
}

function SimpleDialog({ onClose, isDialogOpen }: SimpleDialogProps) {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [shouldSuccessSnackBarOpen, setShouldSuccessSnackBarOpen] = React.useState(false);
  const [shouldErrorSnackBarOpen, setShouldErrorSnackBarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleClick = async () => {
    const emailModel: EmailModel = {
      userEmail: user.email
    };
    try {
      await EventService.unregisterFromEvent(Number(id), emailModel);
      setSnackbarMessage('Unregistration was successful');
      setShouldSuccessSnackBarOpen(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (e) {
      if (e.errorCode === 409) {
        setSnackbarMessage(e.data);
      } else setSnackbarMessage(e.data);

      setShouldErrorSnackBarOpen(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason: string,
    setMessageSnackBarOpen: (value: boolean) => void
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageSnackBarOpen(false);
  };

  return (
    <>
      <Box>
        <Dialog
          onClose={handleClose}
          open={isDialogOpen}
          PaperProps={{
            sx: { minWidth: '500px', height: '250px', marginTop: '40px' }
          }}
        >
          <CenteredTextStyled>Are you sure you want to unregister from this event?</CenteredTextStyled>
          <DialogActions sx={{ marginRight: '140px' }}>
            <ButtonUnregisterEventStyled
              sx={{ backgroundColor: 'rgba(249,183,0,1)', color: 'white' }}
              variant='outlined'
              onClick={handleClick}
            >
              Yes
            </ButtonUnregisterEventStyled>

            <ButtonUnregisterEventStyled variant='outlined' onClick={handleClose}>
              No
            </ButtonUnregisterEventStyled>
          </DialogActions>

          <ErrorSnackbar
            open={shouldErrorSnackBarOpen}
            autoHideDuration={2000}
            onClose={(event, reason) => handleCloseSnackbar(event, reason, setShouldErrorSnackBarOpen)}
            alertOnClose={handleClose}
            message={snackbarMessage}
          />

          <SuccessSnackbar
            open={shouldSuccessSnackBarOpen}
            autoHideDuration={2000}
            onClose={(event, reason) => handleCloseSnackbar(event, reason, setShouldSuccessSnackBarOpen)}
            alertOnClose={handleClose}
            message={snackbarMessage}
          />
        </Dialog>
      </Box>
    </>
  );
}

export default function UnregisterFromEventForm() {
  const [isDialogOpen, setisDialogOpen] = React.useState(false);
  const handleClickOpen = () => {
    setisDialogOpen(true);
  };
  const handleClose = () => {
    setisDialogOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Unregister
      </Button>
      <SimpleDialog isDialogOpen={isDialogOpen} onClose={handleClose} />
    </div>
  );
}
