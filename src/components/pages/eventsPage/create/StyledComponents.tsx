import { styled } from '@mui/system';
import { Box, Button, FormHelperText, Grid, InputLabel, Typography } from '@mui/material';
import { ButtonUploadImageEventStyled, GridColorStyled, TextFieldStyled } from '../../common/StyledComponents';

export const FormBoxStyled = styled(Box)(() => {
  return {
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

export const FormHelperTextCapacityStyled = styled(FormHelperText)(({ theme }) => {
  return {
    color: theme.palette.primary.light,
    marginLeft: '10px'
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
    width: '100%',
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'black'
      },
      color: 'black !important',
      backgroundColor: 'transparent',
      borderRadius: 9999
    }
  };
});
export const DescriptionTextFieldStyled = styled(TextFieldStyled)(() => {
  return {
    '& label': {
      paddingTop: '20px'
    },
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
    minWidth: '100%',
    '& fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      borderRadius: 9999
    },
    '& label': {
      color: theme.palette.primary.main
    },
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'white'
      },
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.light,
      borderRadius: 9999
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      }
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.main
    },
    borderColor: theme.palette.primary.main
  };
});

export const GridCreateEventStyled = styled(Grid)(({ theme }) => {
  return {
    backgroundColor: 'white',
    border: '1px solid',
    boxShadow: '5px 5px 20px 3px #393C3F',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'justify',
    borderColor: theme.palette.primary.main
  };
});

export const EventInfoStyled = styled(Grid)(({ theme }) => {
  return {
    width: '35%',
    height: '75%',
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

export const CreateEventGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'justify',
    alignContent: 'center',
    marginTop: '50px',
    marginLeft: '90px'
  };
});

export const MainInfoEventGridStyled = styled(Grid)(() => {
  return {
    width: '300px'
  };
});

export const LocationGridStyled = styled(Grid)(() => {
  return {
    width: '300px',
    marginLeft: '60px'
  };
});

export const DescriptionGridStyled = styled(GridColorStyled)(() => {
  return {
    marginLeft: '90px',
    marginRight: '110px'
  };
});

export const DateGridStyled = styled(Grid)(() => {
  return {
    marginLeft: '90px',
    marginTop: '40px',
    marginBottom: '20px'
  };
});

export const StartingDateGridStyled = styled(Grid)(() => {
  return {
    width: '300px'
  };
});

export const EndingDateGridStyled = styled(Grid)(() => {
  return {
    width: '400px',
    marginLeft: '80px'
  };
});

export const SaveButtonStyled = styled(ButtonUploadImageEventStyled)(() => {
  return {
    marginTop: '40px',
    marginRight: '25px',
    marginBottom: '30px'
  };
});
