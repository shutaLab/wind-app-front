import { DepartureType } from "./Departure";
import { User } from "./user";

export interface IntraClaim {
  id: number;
  intra_user_id: number;
  departure_id: number;
  departure: DepartureType;
  user: User;
}
