import { CityEnum } from '../enums/CityEnum';
import { CountryEnum } from '../enums/CountryEnum';
import { EventTypes } from '../enums/EventTypes';

export default interface EventObject {
  readonly id?: number;
  readonly eventType: EventTypes;
  readonly name: string;
  readonly description?: string;
  readonly maxNoAttendees: number;
  readonly city: CityEnum;
  readonly country: CountryEnum;
  readonly location?: string;
}

export const emptyEvent: EventObject = { id:0, eventType:0, name:'', description:'', maxNoAttendees:0, city: 0, country: 0, location: '' };
