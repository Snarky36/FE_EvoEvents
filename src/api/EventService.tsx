import EventObject from '../interfaces/Event';
import ApiService from './ApiService';

class EventService {
  addEvent(obj: EventObject) {
    return ApiService.postReq('/api/event/create-event', obj);
  }
}

export default new EventService();
