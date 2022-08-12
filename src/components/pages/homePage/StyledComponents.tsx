import { styled } from '@mui/system';
import { Box, Tab } from '@mui/material';
import { TextFieldStyled } from '../common/StyledComponents';

// to add one TextFieldStyled component in common styled components

//overwrite one here for the homepage
//overwrite one for the register
//overwrite one for the create

export const TextFieldRegisterUserStyled = styled(TextFieldStyled)(() => {
  return {
    width: '75%'
  };
});

export const ContainerStyled = styled(Box)(({ theme }) => {
  return {
    width: '50%',
    height: '95%',
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
    borderRadius: 3
  };
});

export const TabBoxStyled = styled(Box)(() => {
  return {
    borderTop: 1,
    borderColor: 'divider',
    position: 'fixed',
    top: '3.5%',
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
