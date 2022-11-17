import React from "react";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import bg from "../../../../assets/images/appointment.png";
const Contact = () => {
  return (
    <div className="flex justify-center" style={{ background: `url(${bg})` }}>
      <div>
        <h4 className="text-xl text-primary">Contact Us</h4>
        <h1 className="text-3xl text-white">Stay Connected With Us</h1>
        <input
          type="email"
          placeholder="Email"
          className="border-none h-16 rounded-lg p-5 outline-none mt-5 block"
        />

        <input
          type="text"
          placeholder="Subject"
          className="border-none h-16 rounded-lg p-5 outline-none mt-5 block"
        />
        <input
          type="message"
          placeholder="Type here"
          className="border-none  h-32 p-5 outline-none mt-5 block"
        />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
