import React from "react";

const Service = ({ service }) => {
  const { img, description, title } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
