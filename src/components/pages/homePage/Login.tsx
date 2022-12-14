import React, { useMemo, useState } from 'react';
import { Alert, Button, Snackbar } from '@mui/material';
import { useCallback } from 'react';
import UserService from '../../../api/UserService';
import { UserContextProvider } from '../../contexts/UserContext';
import User from '../../../interfaces/User';
import useTextFieldErrors from '../../../hooks/UseTextFieldErrors';
import { validateEmailLogin, validatePasswordLogin } from '../../../validators/LoginValidators';
import { MediatorEventsIdentifiers } from '../../../events/EventsIdentifiers';
import { GridColorStyled, GridGlobalStyled, GridStyled } from '../common/StyledComponents';
import Mediator from '../../../events/Mediator';
import { TextFieldRegisterUserStyled, TitleStyled } from './StyledComponents';

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

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <UserContextProvider>
      <GridGlobalStyled container spacing={2} columns={2} id='loginForm'>
        <GridColorStyled item xs={4}>
          <TitleStyled variant='h5' id='loginFormTitle'>
            Log-in
          </TitleStyled>
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='loginFormEmailField'
            required
            label='Email'
            name={LoginFormFields.email}
            helperText={email.errors}
            error={email.hasErrors}
            onChange={onInputChange}
            onBlur={email.validate}
            value={email.value}
            variant='outlined'
            placeholder='johndoe@yahoo.com'
            autoComplete='off'
          />
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='loginFormPasswordField'
            required
            label='Password'
            name={LoginFormFields.password}
            helperText={password.errors}
            error={password.hasErrors}
            onChange={onInputChange}
            onBlur={password.validate}
            onKeyUp={handleKeyPress}
            value={password.value}
            variant='outlined'
            type='password'
            placeholder='******'
            autoComplete='off'
          />
        </GridColorStyled>
        <GridStyled item xs={4}>
          <Button
            variant='contained'
            id='loginFormSubmitButton'
            disabled={!(email.value && password.value) || password.hasErrors || email.hasErrors}
            onClick={handleClick}
            type='submit'
          >
            Login
          </Button>
        </GridStyled>
      </GridGlobalStyled>
      <Snackbar
        id='errorMessageForLoginSnackbar'
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert id='errorMessageForLogin' onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {backendError}
        </Alert>
      </Snackbar>
    </UserContextProvider>
  );
}
