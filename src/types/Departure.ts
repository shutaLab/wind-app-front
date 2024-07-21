import { User } from "./user";

export interface Departure {
    id?: string;
    intra_user_id: number;
    start: string;
    end: string;
    description: string;
    user: any
    intra_user: User
}