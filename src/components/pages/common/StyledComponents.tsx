import { styled } from '@mui/system';
import { Alert, AppBar, Avatar, Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const FullNameStyled = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.light,
    fontFamily: 'Work Sans',
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

export const TextFieldStyled = styled(TextField)(() => {
  return {
    '& fieldset': {
      borderColor: '#42a5f5',
      borderWidth: 2,
      borderRadius: 9999
    },
    '& label': {
      color: '#42a5f5'
    },
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'black'
      },
      color: 'black !important',
      backgroundColor: '#64b5f6',
      borderRadius: 9999
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#42a5f5'
      }
    },
    '& label.Mui-focused': {
      color: '#42a5f5'
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
    color: 'black',
    marginTop: '10px',
    borderColor: theme.palette.primary.main
  };
});

export const GridCreateEventStyled = styled(Grid)(({ theme }) => {
  return {
    textAlign: 'center',
    color: 'black'
  };
});

export const GridGlobalStyled = styled(Grid)(() => {
  return {
    width: '70%',
    height: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'black',
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

export const LinkStyled = styled(Link)(() => {
  return {
    textDecoration: 'none'
  };
});

export const PictureBoxStyled = styled('img')(() => {
  return {
    maxHeight: '50px',
    marginLeft: '40px',
    marginRight: '10px'
  };
});

export const EventTitleStyled = styled(Typography)(() => {
  return {
    fontWeight: 'bold',
    fontSize: '40px',
    color: 'white',
    fontFamily: 'Work Sans',
    marginTop: '50px'
  };
});

export const ButtonUploadImageEventStyled = styled(Button)(() => {
  return {
    marginTop: '15px',
    height: '50px',
    width: '200px',
    fontFamily: 'Work Sans',
    borderWidth: 'thick'
  };
});
