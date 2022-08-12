import { styled } from '@mui/system';
import { Box, Button, FormHelperText, InputLabel, Typography } from '@mui/material';
import { TextFieldStyled } from '../../common/StyledComponents';

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

export const ButtonStyled = styled(Button)(() => {
  return {
    marginTop: '15px'
  };
});

export const TextFieldEventStyled = styled(TextFieldStyled)(() => {
  return {
    paddingTop: '0.5%',
    width: '100%'
  };
});
export const DescriptionTextFieldStyled = styled(TextFieldStyled)(() => {
  return {
    paddingTop: '10%',
    width: '100%',
    '& fieldset': {
      borderRadius: 30
    }
  };
});

export const TitleStyled = styled(Typography)(({ theme }) => {
  return {
    paddingTop: '70px',
    paddingLeft: '300px',
    textAlign: 'center',
    color: theme.palette.primary.light
  };
});

export const CreateEventStyled = styled(InputLabel)(({ theme }) => {
  return {
    width: '70%',
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
