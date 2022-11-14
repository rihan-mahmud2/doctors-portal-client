import React from "react";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div className="text-center">
      <h4 className="text-xl text-primary">Contact Us</h4>
      <h1 className="text-3xl">Stay Connected With Us</h1>

      <div className="flex justify-center flex-col">
        <input
          type="email"
          placeholder="Email"
          className="border-none w-1/2 h-16 rounded-lg p-5 outline-none mt-5"
        />

        <input
          type="text"
          placeholder="Subject"
          className="border-none w-1/2 h-16 rounded-lg p-5 outline-none mt-5"
        />
        <input
          type="message"
          placeholder="Type here"
          className="border-none w-1/2 h-32 p-5 outline-none mt-5"
        />
      </div>

      <PrimaryButton>Submit</PrimaryButton>
    </div>
  );
};

export default Contact;
