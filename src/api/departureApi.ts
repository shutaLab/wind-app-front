import axios from "axios";
import { Departure } from "../types/Departure";

export const getDepartures = async () => {
    const { data } = await axios.get<Departure[]>(
        "http://localhost:8000/api/departures"
    );
    return data;
}
