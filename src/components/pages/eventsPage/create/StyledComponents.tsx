import { styled } from '@mui/system';
import { Box, Button, FormHelperText, Grid, InputLabel, Typography } from '@mui/material';
import { GridColorStyled, TextFieldStyled } from '../../common/StyledComponents';

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
    width: '100%'
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

export const GridCreateEventStyled = styled(Grid)(({ theme }) => {
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
    marginRight: '90px'
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
    width: '400px'
  };
});

export const EndingDateGridStyled = styled(Grid)(() => {
  return {
    width: '400px',
    marginLeft: '20px'
  };
});
