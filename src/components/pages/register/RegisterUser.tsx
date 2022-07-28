import { Box, Button, Grid, IconButton, TextField, Tab, Tooltip, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import UserService from '../../../api/UserService';

const validEmailRegex = /^\s*\w+@\w+\.[Cc][Oo][Mm]\s*$/;
const validNameRegex = /^(\s*([A-Za-z]+\s*-?))*((\s)*[A-Za-z]+\s*)$/;
const validCompanyRegex = /\s*[a-zA-Z0-9]{2,}\s*$/;

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
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = useCallback(
    (event) => {
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

  const validateFirstName = useCallback(
    (event) => {
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

  const validateLastName = useCallback(
    (event) => {
      if (event.target.value.match(validNameRegex) && event.target.value.length > 1 && event.target.value.length < 101) {
        setLastNameErrorText('');
      } else {
        setLastNameErrorText('Last Name should have between 2 and 100 alpha characters, including "-" and " "');
      }
    }, []);

  const onChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const validateCompany = useCallback(
    (event) => {
      if (event.target.value.match(validCompanyRegex) && event.target.value.length > 1 && event.target.value.length < 101) {
        setCompanyErrorText('');
      } else {
        setCompanyErrorText('Company should have between 2 and 100 alphanumeric characters');
      }
    }, []);

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validatePassword = useCallback(
    (event) => {
      if (event.target.value.length > 1 && event.target.value.length < 101) {
        setPasswordErrorText('');
      } else {
        setPasswordErrorText('Password should have between 2 and 100 characters');
      }
    }, []);

  return (
    <div>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <TabContext value={value}>
          <Box sx={{
            borderTop: 1,
            borderColor: 'divider',
            position: 'fixed',
            bottom: 0
          }}>
            <TabList onChange={handleChange}>
              <Tab label='Register' value='1' />
              <Tab label='Login' value='2' />
            </TabList>
          </Box>
          <TabPanel value='1'><Grid container spacing={2} columns={2}
            sx={{
              width: '50%',
              height: '80%',
              backgroundColor: 'gold',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'justify',
              borderRadius: 3
            }}>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <Typography variant='h4' component='h4'>Request log-in credentials</Typography>
            </Grid>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <TextField
                sx={{
                  width: '70%'
                }}
                id='outlined-basic'
                label='First Name'
                helperText={firstNameErrorText}
                error={firstNameErrorText !== ''}
                onChange={onChangeFirstName}
                onBlur={validateFirstName}
                value={firstName}
                variant='outlined'
                placeholder='John' />
              <Tooltip title='between 2-100 alpha characters, including "-" and " "'>
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <TextField
                sx={{
                  width: '70%'
                }}
                id='outlined-basic'
                label='Last Name'
                helperText={lastNameErrorText}
                error={lastNameErrorText !== ''}
                onChange={onChangeLastName}
                onBlur={validateLastName}
                value={lastName}
                variant='outlined'
                placeholder='Doe' />
              <Tooltip title='between 2-100 alpha characters, including "-" and " "'>
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <TextField
                sx={{
                  width: '70%'
                }}
                id='outlined-basic'
                label='Email'
                helperText={emailErrorText}
                error={emailErrorText !== ''}
                onChange={onChangeEmail}
                onBlur={validateEmail}
                value={email}
                variant='outlined'
                placeholder='john_doe@yahoo.com' />
              <Tooltip title='between 7-74 characters and {alphanumeric and underline}@{string}.com format'>
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <TextField
                sx={{
                  width: '70%'
                }}
                id='outlined'
                label='Company'
                helperText={companyErrorText}
                error={companyErrorText !== ''}
                onChange={onChangeCompany}
                onBlur={validateCompany}
                value={company}
                variant='outlined'
                placeholder='evozon' />
              <Tooltip title='between 2-100 alphanumeric characters'>
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <TextField
                sx={{
                  width: '70%'
                }}
                id='outlined-basic'
                label='Password'
                helperText={passwordErrorText}
                error={passwordErrorText !== ''}
                onChange={onChangePassword}
                onBlur={validatePassword}
                value={password}
                variant='outlined'
                type='password'
                placeholder='******' />
              <Tooltip title='between 2-100 characters'>
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4}
              sx={{
                textAlign: 'center'
              }}>
              <Button
                variant='contained'
                disabled={!(email && password && firstName && lastName && company) || (passwordErrorText || companyErrorText || firstNameErrorText || lastNameErrorText || emailErrorText) !== ''}
                onClick={() => {
                  UserService.registerUser({ firstName, lastName, email, company, password });
                }}
              >Save</Button>
            </Grid>
          </Grid></TabPanel>
          <TabPanel value='2'>Login</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};