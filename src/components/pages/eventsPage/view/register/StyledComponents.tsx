import { styled } from '@mui/system';
import { Button, DialogTitle, Grid, RadioGroup, TextField } from '@mui/material';
import { TextFieldStyled } from '../../../common/StyledComponents';

export const DialogTitleStyled = styled(DialogTitle)(({ theme }) => {
  return {
    paddingTop: '30px',
    paddingLeft: '30px',
    fontSize: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
    // color: '#446291',
    fontFamily: 'Work Sans'
  };
});

export const DialogLittleTitlesStyled = styled(DialogTitle)(({ theme }) => {
  return {
    fontFamily: 'Work Sans',
    fontSize: '30px',
    fontWeight: 'bold',
    paddingLeft: 0
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
    alignContent: 'center'
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

export const TextFieldRegisterEventStyled = styled(TextFieldStyled)(() => {
  return {
    paddingTop: '0.5%',
    minWidth: '300px',
    width: '100%',
    marginBottom: '7px'
  };
});

export const PersonalInfoRegisterEventStyled = styled(TextField)(({ theme }) => {
  return {
    paddingTop: '0.5%',
    minWidth: '300px',
    width: '100%',
    marginBottom: '7px',
    '& .MuiInputBase-input.Mui-disabled': {
      WebkitTextFillColor: 'theme.palette.primary.main'
    },
    '& .MuiInputBase-root.Mui-disabled': {
      '& > fieldset': {
        borderColor: theme.palette.primary.main
      }
    },

    '& fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
      borderRadius: 0
    },
    '& label': {
      color: 'black'
    },
    input: {
      '&:disabled': {
        color: 'red'
      }
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      }
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.main
    }
  };
});
