import React, { useCallback, useContext, useEffect } from 'react';
import { Box, CardContent, Grid } from '@mui/material';
import eventPicture from '../../../../assets/img/eventPicture.jpeg';
import { useNavigate, useParams } from 'react-router-dom';
import EventService from '../../../../api/EventService';
import { EventContext } from '../../../contexts/EventContext';
import { EventTypes } from '../../../../enums/EventTypes';
import { CityEnum } from '../../../../enums/CityEnum';
import { CountryEnum } from '../../../../enums/CountryEnum';
import ResponsiveAppBar from '../../common/NavBar';
import {
  CalendarMonthIconStyled,
  CenteredButtonStyled,
  EventCardContentStyled,
  EventCardStyled,
  EventItemStyled,
  EventNameStyled,
  EventTypeStyled,
  LocationCityIconStyled,
  LocationOnIconStyled,
  MainGridStyled,
  PermContactCalendarIconStyled
} from './StyledComponents';
import { EventObjectTemp } from '../../../../interfaces/EventObject';
import RegisterToEventForm from './register/EventRegistrationDialog';

export function EventPage() {
  const { eventObject, setEventObjectData } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEvent = useCallback(async () => {
    try {
      const res = await EventService.viewEvent(Number(id));
      const currentEvent: EventObjectTemp = {
        name: res.data.name,
        eventType: res.data.eventType,
        description: res.data.description,
        maxNoAttendees: res.data.maxNoAttendees,
        address: res.data.address,
        fromDate: res.data.fromDate,
        toDate: res.data.toDate,
        eventImage: res.data.eventImage
      };
      setEventObjectData(currentEvent);
    } catch (e) {
      navigate('/error', { replace: true });
    }
  }, [id]);

  useEffect(() => {
    fetchEvent();
  }, []);

  const addZ = (date) => {
    const utcDate = date + 'Z';
    const newDate = new Date(utcDate);
    return newDate;
  };

  return (
    <>
      <ResponsiveAppBar />
      <MainGridStyled container spacing={10}>
        <Grid item xs={4}>
          <img src={`data:image/jpeg;base64,${eventObject.eventImage}`} height='310px' width='430px' />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <EventNameStyled>{eventObject.name}</EventNameStyled>
            </Grid>
            <Grid item>
              <EventTypeStyled>{EventTypes[eventObject.eventType]}</EventTypeStyled>
            </Grid>
            <Grid item>
              <EventCardStyled variant='outlined'>
                <CardContent>
                  <EventCardContentStyled container>
                    <Grid item>
                      <p>Event details</p>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item>
                              <LocationOnIconStyled />
                            </Grid>
                            <Grid item>
                              <EventItemStyled>
                                {CityEnum[eventObject.address.city]}, {CountryEnum[eventObject.address.country]}
                              </EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item>
                              <PermContactCalendarIconStyled />
                            </Grid>
                            <Grid item>
                              <EventItemStyled>{eventObject.maxNoAttendees} attendees</EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item>
                              <CalendarMonthIconStyled />
                            </Grid>
                            <Grid item>
                              <EventItemStyled>{addZ(eventObject.fromDate).toLocaleString('ro-RO')}</EventItemStyled>
                              <EventItemStyled>{addZ(eventObject.toDate).toLocaleString('ro-RO')}</EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item>
                              <LocationCityIconStyled />
                            </Grid>
                            <Grid item>
                              <EventItemStyled>{eventObject.address.location}</EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </EventCardContentStyled>
                </CardContent>
              </EventCardStyled>
            </Grid>
          </Grid>
        </Grid>
        <CenteredButtonStyled item xs={4}>
          <RegisterToEventForm />
        </CenteredButtonStyled>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} sx={{ wordWrap: 'break-word' }}>
          {eventObject.description}
        </Grid>
        <Grid item xs={4}></Grid>
      </MainGridStyled>
    </>
  );
}
