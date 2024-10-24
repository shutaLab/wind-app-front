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
import Answer from "./routes/AnswerList";
import WindNote from "./routes/WindNote";
import SignIn from "./routes/Login";
import { MyPage } from "./routes/MyPage";
import IntraList from "./components/IntraList";
import MyPageDepartureList from "./components/MyPageDepartureList";
import MyPageNoteList from "./components/MyPageNoteList";
import MyPageQuestionList from "./components/MyPageQuestionList";
import MyPageAnswerList from "./components/MyPageAnswerList";
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
  <QueryClientProvider client={queryClient}>
    <Meta />
    <BrowserRouter>
      <ToastContainer hideProgressBar={true} />
      <Routes>
        <Route index element={<App />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/windNote" element={<WindNoteList />} />
        <Route path="/windNote/:id" element={<WindNote />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<WindCalendar />} />
        <Route path="/myPage" element={<MyPage />}>
          <Route path="intra" element={<IntraList />} />
          <Route path="note" element={<MyPageNoteList />} />
          <Route path="question" element={<MyPageQuestionList />} />
          <Route path="answer" element={<MyPageAnswerList />} />
          <Route path="departure" element={<MyPageDepartureList />} />
        </Route>
        <Route path="/departure" element={<Departure />} />
        <Route path="/question" element={<QuestionList />} />
        <Route path="/timeline" element={<NoteTimeline />} />
        <Route path="/question/:id/answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
