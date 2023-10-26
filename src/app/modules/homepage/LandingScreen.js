import React from "react";
import Header from "../../layouts/header";
import Homepage from "./Homepage";
import Footer from "../../layouts/footer/Footer";

const LandingScreen = () => {
  return (
    <div>
      <Header />
      <div
        className="landingScreen"
        style={{
          flexGrow: 1,
          padding: "10% 3% 3% 3%",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default LandingScreen;
