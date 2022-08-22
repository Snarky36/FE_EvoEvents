import React from 'react';
import { Snackbar } from '@mui/material';
import { AlertStyled } from '../StyledComponents';
import { SnackbarProps } from '../../../../interfaces/SnackbarProps';

function ErrorSnackbar({ open, autoHideDuration, onClose, alertOnClose, message }: SnackbarProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <AlertStyled onClose={alertOnClose} severity='error'>
        {message}
      </AlertStyled>
    </Snackbar>
  );
}

export default ErrorSnackbar;
