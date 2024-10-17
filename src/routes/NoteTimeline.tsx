import React from "react";
import Footer from "../components/Footer";
import NoteHeader from "../components/NoteHeader";
import RequireAuth from "../components/RequireAuth";

const NoteTimeline = () => {
  return (
    <RequireAuth>
      <NoteHeader />
      <h1>タイムライン</h1>
      <Footer />
    </RequireAuth>
  );
};

export default NoteTimeline;
