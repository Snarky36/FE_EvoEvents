import React, { useMemo, useState } from 'react';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { useCallback } from 'react';
import { GridColorStyled, GridGlobalStyled, GridStyled, TextFieldStyled } from './StyleComponent';
import UserService from '../../../api/UserService';
import { UserContextProvider } from '../../contexts/UserContext';
import User from '../../../interfaces/User';
import useTextFieldErrors from '../../../hooks/UseTextFieldErrors';
import { validateEmailLogin, validatePasswordLogin } from '../../../validators/LoginValidators';
import { MediatorEventsIdentifiers } from '../../../events/EventsIdentifiers';
import Mediator from '../../../events/Mediator';

enum LoginFormFields {
  email = 'email',
  password = 'password'
}

export function Login() {
  const email = useTextFieldErrors('', validateEmailLogin);
  const password = useTextFieldErrors('', validatePasswordLogin);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [backendError, setBackendError] = useState('');

  const handleClick = async () => {
    try {
      const res = await UserService.login({ email: email.value, password: password.value });
      const currentUser: User = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        company: res.data.company
      };
      Mediator.publish(MediatorEventsIdentifiers.userLoggedIn, { userData: currentUser });
    } catch (e) {
      if (e.errorCode === 400) {
        setBackendError('Wrong credentials');
      } else {
        setBackendError(e.data);
      }

      setIsSnackbarOpen(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const formFieldsManagers = useMemo(
    () => ({
      [LoginFormFields.email]: email,
      [LoginFormFields.password]: password
    }),
    [email, password]
  );

  const onInputChange = useCallback(
    (ev) => {
      formFieldsManagers[ev.target.name].setValue(ev.target.value);
    },
    [formFieldsManagers]
  );

  return (
    <UserContextProvider>
      <GridGlobalStyled container spacing={2} columns={2}>
        <GridColorStyled item xs={4}>
          <Typography variant='h4' component='h4'>
            Log-in
          </Typography>
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldStyled
            required
            id='outlined-basic'
            label='Email'
            name={LoginFormFields.email}
            helperText={email.errors}
            error={email.hasErrors}
            onChange={onInputChange}
            onBlur={email.validate}
            value={email.value}
            variant='outlined'
            placeholder='johndoe@yahoo.com'
          />
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldStyled
            required
            id='outlined-basic'
            label='Password'
            name={LoginFormFields.password}
            helperText={password.errors}
            error={password.hasErrors}
            onChange={onInputChange}
            onBlur={password.validate}
            value={password.value}
            variant='outlined'
            type='password'
            placeholder='******'
          />
        </GridColorStyled>
        <GridStyled item xs={4}>
          <Button
            variant='contained'
            disabled={!(email.value && password.value) || password.hasErrors || email.hasErrors}
            onClick={handleClick}
          >
            Login
          </Button>
        </GridStyled>
      </GridGlobalStyled>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {backendError}
        </Alert>
      </Snackbar>
    </UserContextProvider>
  );
}
