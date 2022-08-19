import { styled } from '@mui/system';
import { Card, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const MainGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'justify',
    alignContent: 'center',
    margin: '20px 10px'
  };
});

export const EventNameStyled = styled(Typography)(() => {
  return {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#446291',
    fontFamily: 'Work Sans'
  };
});

export const EventTypeStyled = styled(Typography)(() => {
  return {
    color: 'lightslategray',
    textTransform: 'uppercase',
    fontFamily: 'Work Sans'
  };
});

export const EventItemStyled = styled(Typography)(() => {
  return {
    fontFamily: 'Work Sans'
  };
});

export const PermContactCalendarIconStyled = styled(PermContactCalendarIcon)(({ theme }) => {
  return {
    color: theme.palette.primary.main
  };
});

export const LocationOnIconStyled = styled(LocationOnIcon)(({ theme }) => {
  return {
    color: theme.palette.primary.main
  };
});

export const LocationCityIconStyled = styled(LocationCityIcon)(({ theme }) => {
  return {
    color: theme.palette.primary.main
  };
});

export const CalendarMonthIconStyled = styled(CalendarMonthIcon)(({ theme }) => {
  return {
    color: theme.palette.primary.main
  };
});

export const EventCardStyled = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'center',
    fontFamily: 'Work Sans',
    width: '500px'
  };
});

export const EventCardContentStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'left'
  };
});

export const CenteredButtonStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  };
});
