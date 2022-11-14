import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appointment from "../../../../assets/images/appointment.png";

const MakeanAppoinment = () => {
  return (
    <div
      className="hero mt-20 bg-base-100"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero-content   flex-col lg:flex-row">
        <img
          src={doctor}
          alt=""
          className="w-1/2 hidden -mt-32 md:block rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-primary font-bold">Appointment</h2>
          <h1 className="text-4xl text-white font-bold">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MakeanAppoinment;
