// Departure.jsx

import React, { useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DepartureTable from "../components/DepartureTable";
import NoteHeader from "../components/NoteHeader";
import CreateDepartureModal from "../components/CreateDepartureModal";
import RequireAuth from "../components/RequireAuth";
import DepartureChartDrawer from "../components/DepartureChartDrawer";

const Departure = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);

  const clickChartOpen = () => {
    setChartOpen(true);
  };
  const clickChartClose = () => {
    setChartOpen(false);
  };

  const clickModalOpen = () => {
    setModalOpen(true);
  };

  const clickModalClose = () => {
    setModalOpen(false);
  };

  return (
    <RequireAuth>
      <NoteHeader />
      <DepartureTable />
      <div className="px-3 mt-3 mb-5">
        <Button
          className="w-full bg-custom-green text-white"
          text="出艇する"
          onClick={clickModalOpen}
        />
        <Button
          className="w-full bg-custom-gray mt-3 text-white"
          text="チャートで見る"
          onClick={clickChartOpen}
        />
      </div>
      <div className="mt-15">
        <Footer />
      </div>
      <CreateDepartureModal open={modalOpen} handleClose={clickModalClose} />
      <DepartureChartDrawer open={chartOpen} handleClose={clickChartClose} />
    </RequireAuth>
  );
};

export default Departure;
