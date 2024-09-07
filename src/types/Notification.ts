import { DepartureType } from "./Departure";
import { IntraClaim } from "./IntraClaim";

interface NotificationData {
  intraClaim: IntraClaim;
  comment: string;
  departure: DepartureType;
  type: string | null;
}

export interface NotificationItem {
  id: string;
  notifiable_id: number;
  notifiable_type: string;
  type: string;
  data: NotificationData;
  created_at: string;
  updated_at: string;
  read_at: string | null;
}
