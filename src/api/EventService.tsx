import { EmailModel } from '../interfaces/EmailModel';
import EventObject from '../interfaces/Event';
import { PaginatedRequest } from '../interfaces/PaginatedRequest';
import ReservationInfo from '../interfaces/ReservationInfo';
import ApiService from './ApiService';

class EventService {
  addEvent(obj: EventObject) {
    const formData = new FormData();
    formData.append('name', obj.name);
    formData.append('eventType', obj.eventType.toString());
    formData.append('description', obj.description);
    formData.append('maxNoAttendees', obj.maxNoAttendees.toString());
    formData.append('city', obj.city.toString());
    formData.append('country', obj.country.toString());
    formData.append('location', obj.location);
    formData.append('dateRangeModel[fromDate]', obj.dateRangeModel.fromDate.toLocaleString());
    formData.append('dateRangeModel[toDate]', obj.dateRangeModel.toDate.toLocaleString());
    formData.append('eventImage', obj.eventImage);
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
