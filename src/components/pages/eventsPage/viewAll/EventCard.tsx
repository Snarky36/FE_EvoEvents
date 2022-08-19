import { CardContent, Grid, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CityEnum } from '../../../../enums/CityEnum';
import { CountryEnum } from '../../../../enums/CountryEnum';
import { EventTypes } from '../../../../enums/EventTypes';
import { EventObjectTemp } from '../../../../interfaces/EventObject';
import {
  EventCardStyled,
  EventCardContentStyled,
  EventTypeStyled,
  EventNameStyled,
  EventDetailsStyled,
  PermContactCalendarIconStyled,
  EventItemStyled,
  LocationOnIconStyled,
  LocationCityIconStyled,
  EventDescriptionStyled,
  CalendarMonthIconStyled,
  MoreInfoButtonStyled
} from './StyledComponents';

export interface EventCardProps {
  readonly event: EventObjectTemp;
}

export function EventCard({ event }: EventCardProps) {
  const navigate = useNavigate();

  const truncateDescription = (description) => {
    if (description.length === 150) {
      return description.substring(0, 146) + '...';
    }

    return description;
  };

  const addZ = (date) => {
    const utcDate = date + 'Z';
    const newDate = new Date(utcDate);
    return newDate;
  };

  return (
    <EventCardStyled variant='outlined'>
      <CardContent>
        <EventCardContentStyled container spacing={2}>
          <Grid item>
            <EventTypeStyled>{EventTypes[event.eventType]}</EventTypeStyled>
            <EventNameStyled>{event.name}</EventNameStyled>
            <EventDetailsStyled container spacing={2} direction='row'>
              <Grid item>
                <Grid container direction='row'>
                  <Grid item>
                    <CalendarMonthIconStyled />
                  </Grid>
                  <Grid item>
                    <EventItemStyled>{addZ(event.fromDate).toLocaleString('ro-RO')}</EventItemStyled>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='row'>
                  <Grid item>
                    <PermContactCalendarIconStyled />
                  </Grid>
                  <Grid item>
                    <EventItemStyled>{event.maxNoAttendees} attendees</EventItemStyled>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='row'>
                  <Grid item>
                    <LocationOnIconStyled />
                  </Grid>
                  <Grid item>
                    <EventItemStyled>
                      {CityEnum[event.address.city]}, {CountryEnum[event.address.country]}
                    </EventItemStyled>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='row'>
                  <Grid item>
                    <LocationCityIconStyled />
                  </Grid>
                  <Grid item>
                    <EventItemStyled>{event.address.location}</EventItemStyled>
                  </Grid>
                </Grid>
              </Grid>
            </EventDetailsStyled>
            <EventDescriptionStyled>{truncateDescription(event.description)}</EventDescriptionStyled>
          </Grid>
          <Grid item xs={4}>
            <MoreInfoButtonStyled onClick={() => navigate('/event/' + Number(event.id))}>
              More info
            </MoreInfoButtonStyled>
          </Grid>
        </EventCardContentStyled>
      </CardContent>
    </EventCardStyled>
  );
}
