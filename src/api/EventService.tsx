import EventObject from '../interfaces/Event';
import ApiService from './ApiService';

class EventService {
  addEvent(obj: EventObject) {
    return ApiService.postReq('/api/event/create-event', obj);
  }

  viewEvent(id: number) {
    return ApiService.getReq('/api/event/' + id);
  }
}

export default new EventService();
