import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../../Contexts/ContextProvider";

const BookingModal = ({ treatment, refetch, selectedDate, setTreatment }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(authContext);

  const handleClick = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patientName: name,
      slot,
      email,
      phone,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Booking confirmed");
          refetch();
          setTreatment(null);
        } else {
          toast.error(data.message);
        }
      });

    //To do send the data to the server
    //Once the data is endt to the server close the modal and show a sucessful message
    //close the moadal
  };
  return (
    <form onSubmit={handleClick} className="gird grid-cols-1 gap-5 mt-5">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment && treatmentName}</h3>
          <input
            type="text"
            value={date}
            disabled
            className="input w-full mt-5 input-bordered"
          />
          <select name="slot" className="input w-full mt-5 input-bordered">
            <option>Pick your booking time</option>
            {slots.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            readOnly
            className="input w-full mt-5 input-bordered"
          />
          <input
            type="email"
            name="email"
            disabled
            defaultValue={user?.email}
            className="input w-full mt-5 input-bordered"
          />
          <input
            type="number"
            name="phone"
            placeholder="Type your phone number"
            className="input w-full mt-5 input-bordered"
          />
          <button
            type="submit"
            className="bg-[#3A4256] text-white rounded-md py-2 w-full mt-5 input-bordered"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingModal;
