import React from "react";

const AppoinmentOptions = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-lg text-primary">{name}</h2>
        <p className="text-center">
          {slots.length > 1 ? slots[0] : "No date avilable"}
        </p>
        <p className="text-center">
          {slots.length > 1
            ? `${slots.length} spaces are avilabel`
            : `${slots.length} space is avilable`}
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="my-modal-3"
            onClick={() => setTreatment(service)}
            className="btn btn-primary"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOptions;
