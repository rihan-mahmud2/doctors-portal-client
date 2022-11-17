import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentBannar from "./AppointmentBannar";
import AvilableAppoinment from "./AvilableAppoinment/AvilableAppoinment";
import BookingModal from "./BookingModal/BookingModal";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");
  // const [avilableServices, setAvilableServices] = useState([]);
  const {
    data: avilableServices = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  return (
    <>
      <div className="my-16">
        <AppointmentBannar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppointmentBannar>
        <AvilableAppoinment
          avilableServices={avilableServices}
          isLoading={isLoading}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
        ></AvilableAppoinment>
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          setTreatment={setTreatment}
          treatment={treatment}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </>
  );
};

export default Appoinment;
