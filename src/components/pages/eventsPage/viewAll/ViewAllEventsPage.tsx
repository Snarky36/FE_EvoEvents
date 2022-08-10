import { Card, CardContent, Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EventService from '../../../../api/EventService';
import { CityEnum } from '../../../../enums/CityEnum';
import { CountryEnum } from '../../../../enums/CountryEnum';
import { EventTypes } from '../../../../enums/EventTypes';
import { EventObjectTemp } from '../../../../interfaces/EventObject';
import PaginatedEvents from '../../../../interfaces/PaginatedEvents';

export function ViewAllEventsPage() {
  const { currentPage } = useParams();
  const ITEMS_PER_PAGE = 5;
  const [eventList, setEventList] = useState([]);
  const [totalNoEvents, setTotalNoEvents] = useState(0);
  const [totalNoPages, setTotalNoPages] = useState(0);
  const navigate = useNavigate();

  const fetchAllEvents = useCallback(
    async (currentPage) => {
      try {
        const res = await EventService.viewAllEvents(ITEMS_PER_PAGE, Number(currentPage));
        const eventListObject: PaginatedEvents = {
          eventList: res.data.items,
          totalNoEvents: res.data.totalNoItems
        };
        setEventList(eventListObject.eventList);
        setTotalNoEvents(eventListObject.totalNoEvents);
        setTotalNoPages(Math.ceil(eventListObject.totalNoEvents / ITEMS_PER_PAGE));
      } catch (e) {
        navigate('/error', { replace: true });
      }
    },
    [currentPage]
  );

  useEffect(() => {
    fetchAllEvents(currentPage);
  }, []);

  const handleClick = async (event: React.ChangeEvent<unknown>, value: number) => {
    fetchAllEvents(value);
  };

  return (
    <>
      <h1>All events</h1>
      <h5>{totalNoEvents} results</h5>
      <Grid container spacing={2} columns={1}>
        {eventList.map((event: EventObjectTemp) => {
          return (
            <Grid item xs={4} key={event.id}>
              <Card variant='outlined'>
                <CardContent>
                  <Typography>{event.name}</Typography>
                  <Typography>{EventTypes[event.eventType]}</Typography>
                  <Typography>{event.description}</Typography>
                  <Typography>{event.maxNoAttendees} attendees</Typography>
                  <Typography>{CityEnum[event.address.city]}</Typography>
                  <Typography>{CountryEnum[event.address.country]}</Typography>
                  <Typography>{event.address.location}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        page={Number(currentPage)}
        count={totalNoPages}
        onChange={handleClick}
        renderItem={(item) => <PaginationItem component={Link} to={`/events/${item.page}`} {...item} />}
      />
    </>
  );
}
