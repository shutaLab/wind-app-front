import React, { useState } from "react";
import Button from "../components/Button";
import DepartureTable from "../components/DepartureTable";
import NoteHeader from "../components/NoteHeader";
import CreateDepartureModal from "../components/CreateDepartureModal";
import DepartureChartDrawer from "../components/DepartureChartDrawer";
import DepartureTab from "../components/DepartureTab";
import { useGetDepartureStatus } from "../queries/DepartureQuery";
import dayjs from "dayjs";
import RequireAuth from "../components/RequireAuth";
import Layout from "../components/Layout";
import DepartureStatusTable from "../components/DepartureStatusTable";
dayjs.locale("ja");

const Departure = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);

  const isSunday = dayjs().day() === 5;

  const { data: departureStatuses } = useGetDepartureStatus(isSunday);
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
    <Layout>
      <RequireAuth>
        <NoteHeader />
        <DepartureTab />
        <DepartureTable />
        <div className="px-3 my-3">
          <Button
            className="w-full bg-custom-gray mt-3 text-white"
            text="チャート"
            onClick={clickChartOpen}
          />
        </div>

        <DepartureStatusTable />
        <DepartureChartDrawer open={chartOpen} handleClose={clickChartClose} />
      </RequireAuth>
    </Layout>
  );
};

export default Departure;
