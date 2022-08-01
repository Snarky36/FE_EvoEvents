import { Button, Typography, Snackbar, Alert } from '@mui/material';
import React, { useCallback, useState } from 'react';
import UserService from '../../../api/UserService';
import { GridStyled, TextFieldStyled, GridColorStyled, GridGlobalStyled } from './StyleComponent';
import { InfoButton } from '../common/InfoButton';

const validEmailRegex = /^\s*\w+@\w+\.[Cc][Oo][Mm]\s*$/;
const validNameRegex = /^(\s*([A-Za-z]+\s*-?))*((\s)*[A-Za-z]+\s*)$/;
const validCompanyRegex = /\s*[a-zA-Z0-9]{2,}\s*$/;
const noWhiteSpaces = /^\S*$/;

export default function RegisterUser() {
  const [firstName, setFirstName] = useState('');
  const [firstNameErrorText, setFirstNameErrorText] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameErrorText, setLastNameErrorText] = useState('');
  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [company, setCompany] = useState('');
  const [companyErrorText, setCompanyErrorText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = async () => {
    try {
      await UserService.registerUser({ firstName, lastName, email, company, password });
      setOpen(true);
    } catch (e) {
      setEmailErrorText('Email must be unique');
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = useCallback((event) => {
    if (event.target.value.length > 6 && event.target.value.length < 75) {
      if (event.target.value.match(validEmailRegex)) {
        setEmailErrorText('');
      } else {
        setEmailErrorText('Email should have a valid format {alphanumeric and underline}@{string}.com');
      }
    } else {
      setEmailErrorText('Email should have between 7 and 74 characters');
    }
  }, []);

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const validateFirstName = useCallback((event) => {
    setFirstName(event.target.value);
    if (event.target.value.length > 1 && event.target.value.length < 101 && event.target.value.match(validNameRegex)) {
      setFirstNameErrorText('');
    } else {
      setFirstNameErrorText('First Name should have between 2 and 100 alpha characters, including "-" and " "');
    }
  }, []);

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const validateLastName = useCallback((event) => {
    if (event.target.value.match(validNameRegex) && event.target.value.length > 1 && event.target.value.length < 101) {
      setLastNameErrorText('');
    } else {
      setLastNameErrorText('Last Name should have between 2 and 100 alpha characters, including "-" and " "');
    }
  }, []);

  const onChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const validateCompany = useCallback((event) => {
    if (
      event.target.value.match(validCompanyRegex) &&
      event.target.value.length > 1 &&
      event.target.value.length < 101
    ) {
      setCompanyErrorText('');
    } else {
      setCompanyErrorText('Company should have between 2 and 100 alphanumeric characters');
    }
  }, []);

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validatePassword = useCallback((event) => {
    if (event.target.value.length > 1 && event.target.value.length < 101) {
      if (event.target.value.match(noWhiteSpaces)) {
        setPasswordErrorText('');
      } else {
        setPasswordErrorText('Password should not have whitespaces');
      }
    } else {
      setPasswordErrorText('Password should have between 2 and 100 characters');
    }
  }, []);

  return (
    <div>
      <GridGlobalStyled container spacing={2} columns={2}>
        <GridColorStyled item xs={4}>
          <Typography variant='h4' component='h4'>
            Request log-in credentials
          </Typography>
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldStyled
            id='outlined-basic'
            label='First Name'
            helperText={firstNameErrorText}
            error={firstNameErrorText !== ''}
            onChange={onChangeFirstName}
            onBlur={validateFirstName}
            value={firstName}
            variant='outlined'
            placeholder='John'
          />
          <InfoButton title='between 2-100 alpha characters, including "-" and " "' />
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldStyled
            id='outlined-basic'
            label='Last Name'
            helperText={lastNameErrorText}
            error={lastNameErrorText !== ''}
            onChange={onChangeLastName}
            onBlur={validateLastName}
            value={lastName}
            variant='outlined'
            placeholder='Doe'
          />
          <InfoButton title='between 2-100 alpha characters, including "-" and " "' />
        </GridColorStyled>
        <GridColorStyled item xs={4}>
          <TextFieldStyled
            id='outlined-basic'
            label='Email'
            helperText={emailErrorText}
            error={emailErrorText !== ''}
            onChange={onChangeEmail}
            onBlur={validateEmail}
            value={email}
            variant='outlined'
            placeholder='john_doe@yahoo.com'
          />
          <InfoButton title='between 7-74 characters and {alphanumeric and underline}@{string}.com format' />
        </GridColorStyled>
        <GridStyled item xs={4}>
          <TextFieldStyled
            id='outlined'
            label='Company'
            helperText={companyErrorText}
            error={companyErrorText !== ''}
            onChange={onChangeCompany}
            onBlur={validateCompany}
            value={company}
            variant='outlined'
            placeholder='evozon'
          />
          <InfoButton title='between 2-100 alphanumeric characters' />
        </GridStyled>
        <GridColorStyled item xs={4}>
          <TextFieldStyled
            id='outlined-basic'
            label='Password'
            helperText={passwordErrorText}
            error={passwordErrorText !== ''}
            onChange={onChangePassword}
            onBlur={validatePassword}
            value={password}
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
              !(email && password && firstName && lastName && company) ||
              (passwordErrorText || companyErrorText || firstNameErrorText || lastNameErrorText || emailErrorText) !==
                ''
            }
            onClick={handleClick}
          >
            Save
          </Button>
        </GridStyled>
      </GridGlobalStyled>
      <Snackbar
        open={open}
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
