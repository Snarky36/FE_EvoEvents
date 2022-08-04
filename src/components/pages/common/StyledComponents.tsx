import { styled } from '@mui/system';
import { Alert, AppBar, Avatar, Box, Button, FormHelperText, IconButton, Typography } from '@mui/material';

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

export const FormBoxStyled = styled(Box)(() => {
  return {
    width: '100%',
    display: 'flex', 
    justifyContent: 'center',
    alignContent: 'center' 
  };
});

export const FormHelperTextStyled = styled(FormHelperText)(({ theme }) => {
  return {
    color: theme.palette.primary.light
  };
});

export const AlertStyled = styled(Alert)(() => {
  return {
    width: '100%' 
  };
});


export const ButtonStyled = styled(Button)(() => {
  return {
    marginTop: '15px'
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
  }
})

export const UserBoxStyled = styled(Box)(() => {
  return {
    display: 'flex',
    flowDirection: 'row',
    width: '180px',
    alignItems: 'center',
    marginRight: '20px' 
  }
})


export const CreateEventBoxStyled = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    flowDirection: 'column'
  }
})