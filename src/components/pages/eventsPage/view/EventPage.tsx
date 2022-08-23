import React, { useCallback, useContext, useEffect } from 'react';
import { CardContent, Grid } from '@mui/material';
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
import { UserContext } from '../../../contexts/UserContext';
import { EmailModel } from '../../../../interfaces/EmailModel';
import UnregisterFromEventForm from './unregister/EventUnregistrationDialog';

export function EventPage() {
  const { eventObject, setEventObjectData } = useContext(EventContext);
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEvent = useCallback(async () => {
    try {
      const emailModel: EmailModel = { userEmail: user.email };
      const res = await EventService.viewEvent(Number(id), emailModel);
      const currentEvent: EventObjectTemp = {
        name: res.data.name,
        eventType: res.data.eventType,
        description: res.data.description,
        maxNoAttendees: res.data.maxNoAttendees,
        address: res.data.address,
        fromDate: res.data.fromDate,
        toDate: res.data.toDate,
        eventImage: res.data.eventImage,
        attending: res.data.attending
      };
      setEventObjectData(currentEvent);
    } catch (e) {
      navigate('/error', { replace: true });
    }
  }, [id]);

  useEffect(() => {
    fetchEvent();
  }, [eventObject]);

  const addZ = (date) => {
    const utcDate = date + 'Z';
    const newDate = new Date(utcDate);
    return newDate;
  };

  const renderElement = (attending: boolean) => {
    if (attending === false) {
      return <RegisterToEventForm />;
    }
    return <UnregisterFromEventForm />;
  };

  return (
    <>
      <ResponsiveAppBar />
      <MainGridStyled container spacing={10} id='eventContainer'>
        <Grid item xs={4} id='eventImageContainer'>
          <img id='eventImage' src={`data:image/jpeg;base64,${eventObject.eventImage}`} height='310px' width='430px' />
        </Grid>
        <Grid item xs={4} id='eventDetailsContainer'>
          <Grid container spacing={2} direction='column' id='eventDetails'>
            <Grid item id='eventNameContainer'>
              <EventNameStyled id='eventName'>{eventObject.name}</EventNameStyled>
            </Grid>
            <Grid item id='eventTypeContainer'>
              <EventTypeStyled id='eventType'>{EventTypes[eventObject.eventType]}</EventTypeStyled>
            </Grid>
            <Grid item>
              <EventCardStyled variant='outlined' id='eventInformationCard'>
                <CardContent>
                  <EventCardContentStyled container id='eventInformation'>
                    <Grid item>
                      <p id='eventDetailsHeader'>Event details</p>
                      <Grid container spacing={2} id='eventInformationItems'>
                        <Grid item xs={6} id='eventCityAndCountry'>
                          <Grid container>
                            <Grid item id='eventCityAndCountryIcon'>
                              <LocationOnIconStyled />
                            </Grid>
                            <Grid item id='eventCityAndCountryDetails'>
                              <EventItemStyled>
                                {CityEnum[eventObject.address.city]}, {CountryEnum[eventObject.address.country]}
                              </EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} id='eventAttendees'>
                          <Grid container>
                            <Grid item id='eventAttendeesIcon'>
                              <PermContactCalendarIconStyled />
                            </Grid>
                            <Grid item id='eventAttendeesDetails'>
                              <EventItemStyled>{eventObject.maxNoAttendees} attendees</EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} id='eventDateAndTime'>
                          <Grid container>
                            <Grid item id='eventDateAndTimeIcon'>
                              <CalendarMonthIconStyled />
                            </Grid>
                            <Grid item id='eventDateAndTimeDetails'>
                              <EventItemStyled>{addZ(eventObject.fromDate).toLocaleString('ro-RO')}</EventItemStyled>
                              <EventItemStyled>{addZ(eventObject.toDate).toLocaleString('ro-RO')}</EventItemStyled>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} id='eventLocation'>
                          <Grid container>
                            <Grid item id='eventLocationIcon'>
                              <LocationCityIconStyled />
                            </Grid>
                            <Grid item id='eventLocationDetails'>
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
        <CenteredButtonStyled item xs={4} id='registerToEventButton'>
          <div>{renderElement(eventObject.attending)}</div>
        </CenteredButtonStyled>

        <Grid item xs={4} id='emptyColumnLeft'></Grid>
        <Grid item xs={4} sx={{ wordWrap: 'break-word' }} id='eventDescriptionWrapped'>
          {eventObject.description}
        </Grid>
        <Grid item xs={4} id='emptyColumnRight'></Grid>
      </MainGridStyled>
    </>
  );
}
