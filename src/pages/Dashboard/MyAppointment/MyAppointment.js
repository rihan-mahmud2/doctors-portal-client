import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../Contexts/ContextProvider";

const MyAppointment = () => {
  const { user } = useContext(authContext);

  const uri = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookingInfo = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(uri)
        .then((res) => res.json())
        .then((result) => result),
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">My Appointment</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>appointmentDate</th>
              <th>treatment</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookingInfo.map((booking, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{booking.patientName}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.treatment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
