import React, { useCallback, useContext, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import eventPicture from '../../../assets/img/eventPicture.jpeg';
import { useNavigate, useParams } from 'react-router-dom';
import EventService from '../../../api/EventService';
import EventObject from '../../../interfaces/Event';
import { EventContext } from '../../contexts/EventContext';
import { EventTypes } from '../../../enums/EventTypes';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export function EventPage() {
  const { eventObject, setEventObjectData } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEvent = useCallback(async () => {
    try {
      const res = await EventService.viewEvent(Number(id));
      const currentEvent: EventObject = {
        name: res.data.name,
        eventType: res.data.eventType,
        description: res.data.description,
        maxNoAttendees: res.data.maxNoAttendees
      };
      setEventObjectData(currentEvent);
    } catch (e) {
      navigate('/error', { replace: true });
    }
  }, [id]);

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <>
      <h1>Event {id}</h1>
      <Grid container spacing={2} columns={1}>
        <Grid item xs={4}>
          <Grid container spacing={2} direction='row'>
            <Grid item xs={4}>
              <Box component='img' src={eventPicture} />
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2} direction='column'>
                <Grid item xs={4}>
                  <Typography variant='h4'>{eventObject.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  {EventTypes[eventObject.eventType]}
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <PermContactCalendarIcon />
                    {eventObject.maxNoAttendees}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Button variant='contained'>Register</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={4}>
              {eventObject.description}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
