import { styled } from '@mui/system';
import { AppBar, Avatar, Typography } from '@mui/material';

export const FullNameStyled = styled(Typography)(({ theme }) => {
  return {
    textAlign: 'right',
    paddingTop: '0.4%',
    float: 'right',
    paddingRight: '1%',
    color: theme.palette.primary.light,
    fontFamily: 'Maven Pro'
  };
});

export const ProfilePicture = styled(Avatar)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main
  };
});

export const AppBarStyled = styled(AppBar)(() => {
  return {
    height: '8%',
    width: '100%',
    float: 'left',
    paddingTop: '10px',
    position: 'sticky',
    top: 0
  };
});

export const LogoStyled = styled(Typography)(() => {
  return {
    textAlign: 'left',
    marginLeft: '35px',
    paddingTop: '0.5%',
    width: '30%',
    float: 'left'
  };
});

export const IconPositionStyled = styled(Typography)(() => {
  return {
    textAlign: 'right',
    paddingTop: '0.4%',
    float: 'right',
    paddingRight: '3%'
  };
});
