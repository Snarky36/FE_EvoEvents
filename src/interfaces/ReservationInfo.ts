export default interface ReservationInfo {
  readonly eventId: number;
  readonly userEmail: string;
  accompanyingPerson: string | null;
}
