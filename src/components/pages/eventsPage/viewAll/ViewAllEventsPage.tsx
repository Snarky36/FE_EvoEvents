import React, { useEffect, useMemo, useState } from 'react';
import { Grid, PaginationItem } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { EventObjectTemp } from '../../../../interfaces/EventObject';
import { FilterContext, FilterContextProvider } from '../../../contexts/FilterContext';
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
import AllEventsFetchTrigger from './AllEventsFetchTrigger';
import Mediator from '../../../../events/Mediator';
import { MediatorEventsIdentifiers } from '../../../../events/EventsIdentifiers';

export function ViewAllEventsPage() {
  const { currentPage } = useParams();
  const ITEMS_PER_PAGE = 5;
  const [eventList, setEventList] = useState([]);
  const [totalNoEvents, setTotalNoEvents] = useState(0);

  useEffect(() => {
    const subscriber = Mediator.subscribe(MediatorEventsIdentifiers.newEventsFetched, (eventListObject) => {
      setEventList(eventListObject.eventList);
      setTotalNoEvents(eventListObject.totalNoEvents);

      document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    return () => {
      subscriber.unsubscribe();
    };
  }, []);

  const totalNoPages = useMemo(() => {
    return Math.ceil(totalNoEvents / ITEMS_PER_PAGE);
  }, [totalNoEvents]);

  return (
    <>
      <FilterContextProvider>
        <AllEventsFetchTrigger />
        <ResponsiveAppBar />
        <MainGridStyled container id='viewAllEventsPageContainer'>
          <StickyFilterMenuStyled item id='stickyFilterMenu'>
            <Grid container direction='column' spacing={2}>
              <Grid item id='fitlerMenuHeader'>
                <h1>Filters</h1>
              </Grid>
              <Grid item id='filterMenuContentContainer'>
                <Grid container direction='column'>
                  <Grid item id='filterMenuContent'>
                    <FilterMenu />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StickyFilterMenuStyled>
          <Grid item id='viewAllEventsContainer'>
            <CenteredTitlesStyled container id='viewAllEventsBasicInformation'>
              <Grid item id='allEventsHeader'>
                <h1>All events</h1>
              </Grid>
              <Grid item id='totalNoEventsHeader'>
                <h3>{totalNoEvents} results</h3>
              </Grid>
            </CenteredTitlesStyled>
            <EventsGridStyled container spacing={2} id='allEventsGridContainer'>
              {eventList.map((event: EventObjectTemp) => {
                return (
                  <Grid item key={event.id}>
                    <EventCard event={event} />
                  </Grid>
                );
              })}
            </EventsGridStyled>
            <FilterContext.Consumer>
              {() => (
                <CenteredPaginationStyled
                  id='paginationElement'
                  page={Number(currentPage)}
                  count={totalNoPages}
                  renderItem={(item) => <PaginationItem component={Link} to={`/events/${item.page}`} {...item} />}
                  hideNextButton={totalNoPages === 0}
                  hidePrevButton={totalNoPages === 0}
                />
              )}
            </FilterContext.Consumer>
          </Grid>
        </MainGridStyled>
      </FilterContextProvider>
    </>
  );
}
