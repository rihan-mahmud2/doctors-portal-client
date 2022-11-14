import React from "react";
import Banner from "./Banner";
import Consult from "./Consult/Consult";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ItemCard from "./HomeCard/ItemCard";
import MakeanAppoinment from "./MakeanAppoinment/MakeanAppoinment";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="px-20">
      <Banner></Banner>
      <ItemCard></ItemCard>
      <Services></Services>
      <Consult></Consult>
      <MakeanAppoinment></MakeanAppoinment>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
