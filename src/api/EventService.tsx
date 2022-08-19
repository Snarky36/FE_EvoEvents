import { EmailModel } from '../interfaces/EmailModel';
import EventObject from '../interfaces/Event';
import { PaginatedRequest } from '../interfaces/PaginatedRequest';
import ReservationInfo from '../interfaces/ReservationInfo';
import ApiService from './ApiService';

class EventService {
  addEvent(obj: FormData) {
    return ApiService.postReqForm('/api/event/create-event', obj);
  }

  viewEvent(id: number, obj: EmailModel) {
    return ApiService.postReq('/api/event/' + id, obj);
  }

  registerToEvent(obj: ReservationInfo) {
    if (obj.accompanyingPerson === '') obj.accompanyingPerson = null;

    return ApiService.postReq('/api/event/' + obj.eventId + '/register ', obj);
  }

  viewAllEvents(obj: PaginatedRequest) {
    return ApiService.postReq('api/event/view-all-events', obj);
  }

  unregisterFromEvent(id: number, obj: EmailModel) {
    return ApiService.postReq('api/event/' + id + '/unregister', obj);
  }
}

export default new EventService();
