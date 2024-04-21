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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/windNote" element={<WindNoteList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<WindCalendar />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/departure" element={<Departure />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
