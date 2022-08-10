import { EventObjectTemp } from "./EventObject";

export default interface PaginatedEvents {
  readonly eventList: EventObjectTemp[];
  readonly totalNoEvents: number;
}