import { CardContent, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CityEnum } from '../../../../enums/CityEnum';
import { CountryEnum } from '../../../../enums/CountryEnum';
import { EventTypes } from '../../../../enums/EventTypes';
import { EventObjectTemp } from '../../../../interfaces/EventObject';
import fallbackImage from '../../../../assets/img/fallbackImage.jpg';
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
    if (description === null) {
      return '';
    }

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

  const imageUrl = `data:image/jpeg;base64,${event.eventImage}`;
  const imageToDisplay = event.eventImage ? imageUrl : fallbackImage;

  return (
    <EventCardStyled variant='outlined' id='eventCardContainer'>
      <CardContent>
        <Grid container direction='row'>
          <Grid item xs={6} id='eventCardImageContainer'>
            <img id='eventCardImage' src={imageToDisplay} height='200px' width='300px' />
          </Grid>
          <Grid item xs={6} id='eventCardContentContainer'>
            <EventCardContentStyled container spacing={2} id='eventCardContent'>
              <Grid item id='eventCardContentDetails'>
                <EventTypeStyled id='eventCardType'>{EventTypes[event.eventType]}</EventTypeStyled>
                <EventNameStyled id='eventCardName'>{event.name}</EventNameStyled>
                <EventDetailsStyled container spacing={2} direction='row' id='eventCardDetails'>
                  <Grid item id='eventCardToDate'>
                    <Grid container direction='row'>
                      <Grid item id='eventCardToDateIcon'>
                        <CalendarMonthIconStyled />
                      </Grid>
                      <Grid item id='eventCardToDateDetails'>
                        <EventItemStyled>{addZ(event.fromDate).toLocaleString('ro-RO')}</EventItemStyled>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item id='eventCardAttendees'>
                    <Grid container direction='row'>
                      <Grid item id='eventCardAttendeesIcon'>
                        <PermContactCalendarIconStyled />
                      </Grid>
                      <Grid item id='eventCardAttendeesDetails'>
                        <EventItemStyled>{event.maxNoAttendees} attendees</EventItemStyled>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item id='eventCardCityAndCountry'>
                    <Grid container direction='row'>
                      <Grid item id='eventCardCityAndCountryIcon'>
                        <LocationOnIconStyled />
                      </Grid>
                      <Grid item id='eventCardCityAndCountryDetails'>
                        <EventItemStyled>
                          {CityEnum[event.address.city]}, {CountryEnum[event.address.country]}
                        </EventItemStyled>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item id='eventCardLocation'>
                    <Grid container direction='row'>
                      <Grid item id='eventCardLocationicon'>
                        <LocationCityIconStyled />
                      </Grid>
                      <Grid item id='eventCardLocationDetails'>
                        <EventItemStyled>{event.address.location}</EventItemStyled>
                      </Grid>
                    </Grid>
                  </Grid>
                </EventDetailsStyled>
                <EventDescriptionStyled id='eventCardDescriptionTruncated'>
                  {truncateDescription(event.description)}
                </EventDescriptionStyled>
              </Grid>
              <Grid item xs={4} id='eventCardMoreInforContainer'>
                <MoreInfoButtonStyled
                  id='eventCardMoreInfoButton'
                  onClick={() => navigate('/event/' + Number(event.id))}
                >
                  More info
                </MoreInfoButtonStyled>
              </Grid>
            </EventCardContentStyled>
          </Grid>
        </Grid>
      </CardContent>
    </EventCardStyled>
  );
}
