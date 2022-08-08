import { EventTypes } from '../enums/EventTypes';

export default interface EventObject {
  readonly id?: number;
  readonly eventType: EventTypes;
  readonly name: string;
  readonly description?: string;
  readonly maxNoAttendees: number;
}

export const emptyEvent: EventObject = { id:0, eventType:0, name:'', description:'', maxNoAttendees:0 };
