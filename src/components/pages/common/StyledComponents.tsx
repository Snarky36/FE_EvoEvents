import { styled } from '@mui/system';
import { Alert, AppBar, Avatar, Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';

export const FullNameStyled = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.light,
    fontFamily: 'Maven Pro',
    marginRight: '10px',
    alignItem: 'center'
  };
});

export const ProfilePicture = styled(Avatar)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    AlignItem: 'center'
  };
});

export const AppBarStyled = styled(AppBar)(() => {
  return {
    height: '8%',
    width: '100%',
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };
});

export const IconButtonStyled = styled(IconButton)(() => {
  return {
    paddingRight: '30px'
  };
});

//we can keep it here as SnackbarAlert will be a common new component
export const AlertStyled = styled(Alert)(() => {
  return {
    width: '100%'
  };
});

export const CreateEventButtonStyled = styled(Button)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    marginLeft: '5px'
  };
});

export const LogoFieldsStyled = styled(Box)(() => {
  return {
    display: 'flex',
    flowDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    paddingTop: '10px'
  };
});

export const UserBoxStyled = styled(Box)(() => {
  return {
    display: 'flex',
    flowDirection: 'row',
    width: '180px',
    alignItems: 'center',
    marginRight: '20px'
  };
});

export const TextFieldStyled = styled(TextField)(({ theme }) => {
  return {
    '& fieldset': {
      borderColor: theme.palette.primary.light,
      borderWidth: 2,
      borderRadius: 9999
    },
    '& label': {
      color: 'white'
    },
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'white'
      },
      color: 'white !important',
      backgroundColor: '#64b5f6',
      borderRadius: 9999
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    },
    '& label.Mui-focused': {
      color: 'white'
    }
  };
});

export const GridStyled = styled(Grid)(() => {
  return {
    textAlign: 'center'
  };
});

export const GridColorStyled = styled(Grid)(({ theme }) => {
  return {
    textAlign: 'center',
    color: theme.palette.primary.light
  };
});

export const GridGlobalStyled = styled(Grid)(({ theme }) => {
  return {
    width: '70%',
    height: '90%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'justify',
    marginTop: '4%',
    marginBottom: '4%'
  };
});
