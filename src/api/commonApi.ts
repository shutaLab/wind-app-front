import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const API_ROUTES = {
  AUTH: {
    CSRF: "/sanctum/csrf-cookie",
    LOGIN: "/api/login",
    LOGOUT: "/api/logout",
    REGISTER: "/api/register",
    USER: "/api/user",
  },
  DEPARTURE: {
    LIST: "/api/departures",
    BASE: "/api/departure",
    RANKINGS: "/api/departures/rankings",
    STATUS: "/api/departures/status",
  },
  ANSWER: {
    LIST: "/api/answers",
    BASE: "/api/answer",
  },
  CALENDAR: {
    LIST: "/api/calendars",
    CREATE: "/api/calendar",
    BASE: "/api/calendar",
  },
  INTRA_CLAIM: {
    LIST: "/api/intraClaims",
    BASE: "/api/intraClaim",
    APPROVE: "/api/approveClaim",
    REJECT: "/api/rejectClaim",
  },
  WIND_NOTE: {
    LIST: "/api/windNotes",
    BASE: "/api/windNote",
    FAVORITES: "/api/windNote",
    FAVORITE: "/api/windNote",
  },
  NOTIFICATION: {
    LIST: "/api/notifications",
    READ: "/api/notification",
    ALL_READ: "/api/notifications/read-all",
  },
  QUESTION: {
    LIST: "/api/questions",
    BASE: "/api/question",
  },
  USER: {
    PROFILE: "/api/profile",
    SENIOR_USERS: "/api/users/gradeFilter",
  },
} as const;
