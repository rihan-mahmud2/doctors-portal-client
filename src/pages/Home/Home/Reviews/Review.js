import React from "react";

const Review = ({ review }) => {
  const { name, img, description, place } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex items-center">
          <img className="w-16 mr-6" src={img} alt="" />
          <div>
            <p>{name}</p>
            <p>{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
