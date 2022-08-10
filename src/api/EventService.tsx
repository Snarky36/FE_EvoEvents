import EventObject from '../interfaces/Event';
import { PaginatedRequest } from '../interfaces/PaginatedRequest';
import ReservationInfo from '../interfaces/ReservationInfo';
import ApiService from './ApiService';

class EventService {
  addEvent(obj: EventObject) {
    return ApiService.postReq('/api/event/create-event', obj);
  }

  viewEvent(id: number) {
    return ApiService.getReq('/api/event/' + id);
  }

  registerToEvent(obj: ReservationInfo) {
    return ApiService.postReq('/api/event/' + obj.eventId + '/register ', obj);
  }
  viewAllEvents(itemsPerPage: number, pageNumber: number) {
    const paginationModel: PaginatedRequest = { paginationModel: { pageNumber, itemsPerPage } };
    return ApiService.postReq('api/event/view-all-events', paginationModel);
  }
}

export default new EventService();
