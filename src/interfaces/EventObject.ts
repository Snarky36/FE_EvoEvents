import { EventTypes } from "../enums/EventTypes";
import Address from "./Address";

export interface EventObjectTemp {
  readonly id?: number;
  readonly eventType: EventTypes;
  readonly name: string;
  readonly description?: string;
  readonly maxNoAttendees: number;
  readonly address: Address;
}