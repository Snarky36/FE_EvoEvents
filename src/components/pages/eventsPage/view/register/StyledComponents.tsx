import { styled } from '@mui/system';
import { Button, DialogTitle, Grid, RadioGroup } from '@mui/material';
import { TextFieldStyled } from '../../../common/StyledComponents';

export const DialogTitleStyled = styled(DialogTitle)(({ theme }) => {
  return {
    paddingTop: '30px',
    paddingLeft: '30px',
    fontSize: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark
  };
});

export const ButtonRegisterEventStyled = styled(Button)(() => {
  return {
    marginTop: '15px',
    height: '50px',
    weigth: '1000px'
  };
});

export const MainGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'justify',
    alignContent: 'center',
    marginLeft: '75px'
  };
});

export const PersonalInfoGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column'
  };
});

export const AccompanyingGridStyled = styled(Grid)(() => {
  return {
    width: '50%',
    paddingLeft: '30px'
  };
});

export const RadioGroupStyled = styled(RadioGroup)(() => {
  return {
    display: 'flex',
    flexDirection: 'row'
  };
});

export const TextFieldRegisterEventStyled = styled(TextFieldStyled)(({ theme }) => {
  return {
    paddingTop: '0.5%',
    minWidth: '300px',
    width: '100%',
    marginBottom: '7px'
  };
});
