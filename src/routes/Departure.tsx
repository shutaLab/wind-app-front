// Departure.jsx

import React, { useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DepartureTable from "../components/DepartureTable";
import NoteHeader from "../components/NoteHeader";
import CreateDepartureModal from "../components/CreateDepartureModal";
import RequireAuth from "../components/RequireAuth";
import DepartureChartDrawer from "../components/DepartureChartDrawer";
import { NavLink } from "react-router-dom";

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
      <div className="flex justify-center mb-3">
        <NavLink
          id="tab"
          className="p-1 border rounded-lg w-[30%] text-center ml-2"
          to="/departure"
        >
          出艇
        </NavLink>
        <NavLink
          id="tab"
          className="p-1 border rounded-lg w-[30%] text-center ml-2"
          to="/departure/ranking"
        >
          ランキング
        </NavLink>
      </div>
      <DepartureTable />
      <div className="px-3 my-3">
        <Button
          className="w-full bg-custom-gray mt-3 text-white"
          text="チャート"
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
