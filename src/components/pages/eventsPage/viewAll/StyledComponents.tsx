import { Card, Grid, Pagination, Typography } from '@mui/material';
import { styled } from '@mui/system';
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
    margin: '0 250px',
    gap: '215px'
  };
});

export const EventsGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'Work Sans',
    minWidth: '70%'
  };
});

export const EventCardStyled = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'left',
    fontFamily: 'Work Sans',
    width: '700px'
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

export const EventNameStyled = styled(Typography)(() => {
  return {
    fontWeight: 'bold',
    fontSize: '20px',
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

export const EventDetailsStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Work Sans'
  };
});

export const EventItemStyled = styled(Typography)(() => {
  return {
    fontFamily: 'Work Sans'
  };
});

export const EventDescriptionStyled = styled(Typography)(() => {
  return {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    hyphens: 'auto',
    fontFamily: 'Work Sans'
  };
});

export const CenteredPaginationStyled = styled(Pagination)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  };
});

export const CenteredTitlesStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'left',
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

export const StickyFilterMenuStyled = styled(Grid)(() => {
  return {
    position: 'sticky',
    top: '9%',
    alignSelf: 'flex-start'
  };
});
