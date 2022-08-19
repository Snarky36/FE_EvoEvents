import { Button, Typography, Snackbar, Alert } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import UserService from '../../../api/UserService';
import { TextFieldRegisterUserStyled } from './StyledComponents';
import { InfoButton } from '../common/InfoButton';
import useTextFieldErrors from '../../../hooks/UseTextFieldErrors';
import {
  validateFirstNameRegister,
  validateLastNameRegister,
  validateEmailRegister,
  validateCompanyRegister,
  validatePasswordRegister
} from '../../../validators/RegisterValidators';
import { GridColorStyled, GridGlobalStyled, GridStyled } from '../common/StyledComponents';

enum RegisterFormFields {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  company = 'company',
  password = 'password'
}

export function RegisterUser() {
  const firstName = useTextFieldErrors('', validateFirstNameRegister);
  const lastName = useTextFieldErrors('', validateLastNameRegister);
  const email = useTextFieldErrors('', validateEmailRegister);
  const company = useTextFieldErrors('', validateCompanyRegister);
  const password = useTextFieldErrors('', validatePasswordRegister);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [backendError, setBackendError] = useState('');

  const truncateName = useCallback((event) => {
    return event.replace(/\s+/g, ' ').trim();
  }, []);

  const handleClick = async () => {
    try {
      await UserService.registerUser({
        firstName: truncateName(firstName.value),
        lastName: truncateName(lastName.value),
        email: email.value,
        company: company.value,
        password: password.value
      });
      setIsSnackbarOpen(true);
    } catch (e) {
      setBackendError(e.data);
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
      [RegisterFormFields.firstName]: firstName,
      [RegisterFormFields.lastName]: lastName,
      [RegisterFormFields.email]: email,
      [RegisterFormFields.company]: company,
      [RegisterFormFields.password]: password
    }),
    [firstName, lastName, email, company, password]
  );

  const onInputChange = useCallback(
    (ev) => {
      formFieldsManagers[ev.target.name].setValue(ev.target.value);
    },
    [formFieldsManagers]
  );

  return (
    <div>
      <GridGlobalStyled container spacing={2} columns={2}>
        <GridColorStyled item xs={4}>
          <Typography variant='h4' component='h4'>
            Request log-in credentials
          </Typography>
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='outlined-basic'
            label='First Name'
            name={RegisterFormFields.firstName}
            helperText={firstName.errors}
            error={firstName.hasErrors}
            onChange={onInputChange}
            onBlur={firstName.validate}
            value={firstName.value}
            variant='outlined'
            placeholder='John'
          />
          <InfoButton title='between 2-100 alpha characters, including "-" and " "' />
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='outlined-basic'
            label='Last Name'
            name={RegisterFormFields.lastName}
            helperText={lastName.errors}
            error={lastName.hasErrors}
            onChange={onInputChange}
            onBlur={lastName.validate}
            value={lastName.value}
            variant='outlined'
            placeholder='Doe'
          />
          <InfoButton title='between 2-100 alpha characters, including "-" and " "' />
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='outlined-basic'
            label='Email'
            name={RegisterFormFields.email}
            helperText={email.errors || backendError}
            error={email.hasErrors || backendError !== ''}
            onChange={onInputChange}
            onBlur={email.validate}
            value={email.value}
            variant='outlined'
            placeholder='john_doe@yahoo.com'
          />
          <InfoButton title='between 7-74 characters and {alphanumeric and underline}@{string}.com format' />
        </GridColorStyled>
        <GridStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='outlined'
            label='Company'
            name={RegisterFormFields.company}
            helperText={company.errors}
            error={company.hasErrors}
            onChange={onInputChange}
            onBlur={company.validate}
            value={company.value}
            variant='outlined'
            placeholder='evozon'
          />
          <InfoButton title='between 2-100 alphanumeric characters' />
        </GridStyled>
        <GridColorStyled item xs={4}>
          <TextFieldRegisterUserStyled
            id='outlined-basic'
            label='Password'
            name={RegisterFormFields.password}
            helperText={password.errors}
            error={password.hasErrors}
            onChange={onInputChange}
            onBlur={password.validate}
            value={password.value}
            variant='outlined'
            type='password'
            placeholder='******'
          />
          <InfoButton title='between 2-100 characters and no whitespaces' />
        </GridColorStyled>
        <GridStyled item xs={4}>
          <Button
            variant='contained'
            disabled={
              !(email.value && password.value && firstName.value && lastName.value && company.value) ||
              password.hasErrors ||
              company.hasErrors ||
              firstName.hasErrors ||
              lastName.hasErrors ||
              email.hasErrors
            }
            onClick={handleClick}
          >
            Save
          </Button>
        </GridStyled>
      </GridGlobalStyled>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Registration was successful!
        </Alert>
      </Snackbar>
    </div>
  );
}
