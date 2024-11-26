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
dayjs.locale("ja");

const Departure = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);

  const isSunday = dayjs().day() === 0;
  console.log(isSunday);

  const { data: departureStatuses } = useGetDepartureStatus(isSunday);
  console.log(departureStatuses?.notified);
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
        {departureStatuses && (
          <div>
            <p>今週の未連絡の未出艇者</p>
            <div className="flex flex-wrap space-x-3">
              {departureStatuses?.no_notification ? (
                <>
                  {departureStatuses?.no_notification.map((notified) => (
                    <p key={notified.id}>{notified.user_profile?.name}</p>
                  ))}
                </>
              ) : (
                <p>未連絡の未出艇者はいません</p>
              )}
            </div>
            <p>今週の連絡があった未出艇者</p>
            {departureStatuses?.no_notification ? (
              <>
                {departureStatuses?.notified.map((notifiedEvent) => (
                  <div key={notifiedEvent.user.id} className="flex space-x-3">
                    <p>{notifiedEvent.user.user_profile?.name}</p>
                    {notifiedEvent.events.map((event) => (
                      <div key={event.id} className="flex space-x-3">
                        <p>{event.title}</p>
                        <p>{event.content}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <p>連絡のあった未出艇者はいません</p>
            )}
          </div>
        )}
        <div className="mt-52"></div>
        <DepartureChartDrawer open={chartOpen} handleClose={clickChartClose} />
      </RequireAuth>
    </Layout>
  );
};

export default Departure;
