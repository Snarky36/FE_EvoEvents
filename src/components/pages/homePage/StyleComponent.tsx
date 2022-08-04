import { styled } from '@mui/system';
import { TextField, Grid, Box, Tab, InputLabel, Typography } from '@mui/material';

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


export const TitleStyled = styled(Typography)(({ theme }) => {
  return {
    paddingTop: '70px',
    paddingLeft: '300px',
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

export const TextFieldStyled = styled(TextField)(({ theme }) => {
  return {
    
    width: '75%',
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


export const TextFieldEventStyled = styled(TextField)(({ theme }) => {
  return {
    paddingTop:'0.5%',
    width: '100%',
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

export const DescriptionTextFieldStyled = styled(TextField)(({ theme }) => {
  return {
    paddingTop: '10%',
    width: '100%',
    '& fieldset': {
      borderColor: theme.palette.primary.light,
      borderWidth: 2,
      borderRadius: 10
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
      color: 'white',
      '&.Mui-selected': {
        color: theme.palette.primary.light,
        backgroundColor: '#64b5f6'
      }
    }
  }   
});