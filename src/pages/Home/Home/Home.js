import React from "react";
import Banner from "./Banner";
import Consult from "./Consult/Consult";
import ItemCard from "./HomeCard/ItemCard";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="px-20">
      <Banner></Banner>
      <ItemCard></ItemCard>
      <Services></Services>
      <Consult></Consult>
    </div>
  );
};

export default Home;
