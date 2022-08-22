import { EventTypes } from '../enums/EventTypes';
import Address from './Address';

export interface EventObjectTemp {
  readonly id?: number;
  readonly eventType: EventTypes;
  readonly name: string;
  readonly description?: string;
  readonly maxNoAttendees: number;
  readonly address: Address;
  readonly fromDate?: Date;
  readonly toDate?: Date;
  readonly eventImage?: string;
}

export const emptyEvent: EventObjectTemp = {
  id: 0,
  eventType: 0,
  name: '',
  description: '',
  maxNoAttendees: 0,
  address: { city: 0, country: 0, location: '' },
  fromDate: new Date(), 
  toDate: new Date() 
};