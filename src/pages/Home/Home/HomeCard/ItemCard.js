import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import ItemCards from "./ItemCards";

const ItemCard = () => {
  const cardInfo = [
    {
      id: 1,
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      title: "Opening Hours",
      description: "Opens from 9.00am to 4.00pm",
    },
    {
      id: 2,
      icon: marker,
      bgClass: "bg-neutral",
      title: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
    },
    {
      id: 3,
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      title: "Contact us now",
      description: "+000 123 456789",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-2 lg:grid-cols-3">
      {cardInfo.map((card) => (
        <ItemCards key={card.id} card={card}></ItemCards>
      ))}
    </div>
  );
};

export default ItemCard;
