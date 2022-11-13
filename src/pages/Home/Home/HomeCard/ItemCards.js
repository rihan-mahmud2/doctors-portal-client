import React from "react";

const ItemCards = ({ card }) => {
  const { icon, description, title, bgClass } = card;
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl py-8 px-7 text-white ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemCards;
