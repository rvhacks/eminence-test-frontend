import React from "react";
import HomeSlider from "./Homeslider";
import "./homepage.scss";
import SpecialOffers from "./SpecialOffers";
import banner from "../../../assets/images/auth/specia.webp";

const Homepage = () => {
  return (
    <div>
      <HomeSlider />
      <div className="banner">
        <img src={banner} alt={banner} />
      </div>
      <SpecialOffers />
    </div>
  );
};

export default Homepage;
