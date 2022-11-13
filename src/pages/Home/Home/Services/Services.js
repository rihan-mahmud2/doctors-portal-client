import React from "react";
import Service from "./Service";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import fluoride from "../../../../assets/images/fluoride.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: fluoride,
      ititle: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      ititle: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      ititle: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h1 className="text-primary">OUR SERVICES</h1>
        <h1 className="text-4xl text-[#3A4256]">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {servicesData.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
