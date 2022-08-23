import { useCallback, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventService from '../../../../api/EventService';
import { ITEMS_PER_PAGE } from '../../../../constants/CommonConstants';
import { MediatorEventsIdentifiers } from '../../../../events/EventsIdentifiers';
import Mediator from '../../../../events/Mediator';
import PaginatedEvents from '../../../../interfaces/PaginatedEvents';
import { PaginatedRequest } from '../../../../interfaces/PaginatedRequest';
import { FilterContext } from '../../../contexts/FilterContext';
import { UserContext } from '../../../contexts/UserContext';

export default function AllEventFetchTrigger() {
  const { eventType, attending, viewAll } = useContext(FilterContext);
  const { user } = useContext(UserContext);
  const { currentPage } = useParams();
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
        Mediator.publish(MediatorEventsIdentifiers.newEventsFetched, eventListObject);
      } catch (e) {
        navigate('/error', { replace: true });
      }
    },
    [currentPage]
  );

  const fetchFilteredEvents = async () => {
    try {
      const paginationModel: PaginatedRequest = {
        paginationModel: { pageNumber: Number(currentPage), itemsPerPage: ITEMS_PER_PAGE },
        filters: { eventType: eventType }
      };
      if (viewAll === false) {
        paginationModel.filters.email = user.email;
        paginationModel.filters.attending = attending;
      }
      const res = await EventService.viewAllEvents(paginationModel);
      const eventListObject: PaginatedEvents = {
        eventList: res.data.items,
        totalNoEvents: res.data.totalNoItems
      };
      Mediator.publish(MediatorEventsIdentifiers.newEventsFetched, eventListObject);
    } catch (e) {
      navigate('/error', { replace: true });
    }
  };

  useEffect(() => {
    if (eventType === 0 && viewAll) {
      fetchAllEvents(currentPage);
      return;
    }
    fetchFilteredEvents();
  }, [currentPage, eventType, attending, viewAll]);

  useEffect(() => {
    navigate('/events/1');
  }, [eventType, attending, viewAll]);

  return null;
}
