import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import WindNoteList from "./routes/WindNoteList";
import Home from "./routes/Home";
import WindCalendar from "./routes/WindCalendar";
import MyPage from "./routes/MyPage";
import Departure from "./routes/Departure";
import Meta from "./components/Meta";
import NoteTimeline from "./routes/NoteTimeline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuestionList from "./routes/QuestionList";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Answer from "./routes/Answer";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Meta />
      <BrowserRouter>
        <ToastContainer hideProgressBar={true} />
        <Routes>
          <Route index element={<App />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/windNote" element={<WindNoteList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<WindCalendar />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/departure" element={<Departure />} />
          <Route path="/question" element={<QuestionList />} />
          <Route path="/timeline" element={<NoteTimeline />} />
          <Route path="/question/:id/answer" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
