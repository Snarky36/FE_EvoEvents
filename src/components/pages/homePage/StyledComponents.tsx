import { styled } from '@mui/system';
import { Box, Tab, Typography } from '@mui/material';
import { TextFieldStyled } from '../common/StyledComponents';

// to add one TextFieldStyled component in common styled components

//overwrite one here for the homepage
//overwrite one for the register
//overwrite one for the create

export const TextFieldRegisterUserStyled = styled(TextFieldStyled)(({ theme }) => {
  return {
    paddingTop: '0.5%',
    width: '75%',
    '& fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2
    },
    '& label': {
      color: theme.palette.primary.main
    },
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: theme.palette.primary.main
      },
      color: theme.palette.primary.main,
      backgroundColor: 'white'
    }
  };
});

export const ContainerStyled = styled(Box)(() => {
  return {
    width: '50%',
    height: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'black',
    border: '1px solid #42a5f5',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'justify',
    borderRadius: 3
  };
});

export const TabBoxStyled = styled(Box)(() => {
  return {
    borderTop: 1,
    borderColor: 'divider',
    position: 'fixed',
    top: '3.3%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  };
});

export const TabStyled = styled(Tab)(({ theme }) => {
  return {
    '&.Mui-selected': {
      color: theme.palette.primary.light,
      backgroundColor: '#64b5f6'
    }
  };
});

export const TitleStyled = styled(Typography)(() => {
  return {
    fontFamily: 'Work Sans',
    fontWeight: '25px'
  };
});
