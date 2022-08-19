import { Grid, PaginationItem } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EventService from '../../../../api/EventService';
import { EventObjectTemp } from '../../../../interfaces/EventObject';
import PaginatedEvents from '../../../../interfaces/PaginatedEvents';
import { PaginatedRequest } from '../../../../interfaces/PaginatedRequest';
import { FilterContext, FilterContextProvider } from '../../../contexts/FilterContext';
import { UserContext } from '../../../contexts/UserContext';
import ResponsiveAppBar from '../../common/NavBar';
import { EventCard } from './EventCard';
import { FilterMenu } from './FilterMenu';
import {
  CenteredPaginationStyled,
  CenteredTitlesStyled,
  EventsGridStyled,
  MainGridStyled,
  StickyFilterMenuStyled
} from './StyledComponents';

export function ViewAllEventsPage() {
  const { user } = useContext(UserContext);
  const { currentPage } = useParams();
  const ITEMS_PER_PAGE = 5;
  const [eventList, setEventList] = useState([]);
  const [totalNoEvents, setTotalNoEvents] = useState(0);
  const [totalNoPages, setTotalNoPages] = useState(0);

  const navigate = useNavigate();

  const fetchAllEvents = useCallback(
    async (currentPage) => {
      try {
        const paginationModel: PaginatedRequest = {
          paginationModel: { pageNumber: Number(currentPage), itemsPerPage: ITEMS_PER_PAGE },
          filters: { eventType: 0 }
        };
        const res = await EventService.viewAllEvents(paginationModel);
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

  const fetchFilteredEvents = async (paginationModel) => {
    try {
      const res = await EventService.viewAllEvents(paginationModel);
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
  };

  const handleClick = async (page: number, eventType: number, attending: boolean, viewAll: boolean) => {
    const paginationModel: PaginatedRequest = {
      paginationModel: { pageNumber: page, itemsPerPage: ITEMS_PER_PAGE },
      filters: { eventType: eventType, attending: attending }
    };
    if (viewAll === false) {
      paginationModel.filters.email = user.email;
    }
    fetchFilteredEvents(paginationModel);
  };

  return (
    <>
      <FilterContextProvider>
        <ResponsiveAppBar />
        <MainGridStyled container>
          <StickyFilterMenuStyled item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <h1>Filters</h1>
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <Grid item>
                    <FilterMenu email={user.email} fetchFilteredEvents={fetchFilteredEvents} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StickyFilterMenuStyled>
          <Grid item>
            <CenteredTitlesStyled container>
              <Grid item>
                <h1>All events</h1>
              </Grid>
              <Grid item>
                <h3>{totalNoEvents} results</h3>
              </Grid>
            </CenteredTitlesStyled>
            <EventsGridStyled container spacing={2}>
              {eventList.map((event: EventObjectTemp) => {
                return (
                  <Grid item key={event.id}>
                    <EventCard event={event} />
                  </Grid>
                );
              })}
            </EventsGridStyled>
            <FilterContext.Consumer>
              {({ eventType, attending, viewAll }) => (
                <CenteredPaginationStyled
                  page={Number(currentPage)}
                  count={totalNoPages}
                  onChange={(_, page) => {
                    handleClick(page, eventType, attending, viewAll);
                  }}
                  renderItem={(item) => <PaginationItem component={Link} to={`/events/${item.page}`} {...item} />}
                />
              )}
            </FilterContext.Consumer>
          </Grid>
        </MainGridStyled>
      </FilterContextProvider>
    </>
  );
}
