import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Welcome from "../Components/Welcome";
import About from "../Components/About";

const EnglishPage = () => {
  return (
    <>
      <Header
        home="Home"
        contact="About Us"
        branches="Our Branches"
        partners="partners"
      />
      <Home />
      <Welcome />
      <About />
      <Footer
        secTitle="Contact us"
        title1="Get In Touch"
        title2="Message Us"
        description="Always keep in touch with us through e-mail or WhatsApp and we
                will respond to you as soon as possible."
        building="Name of Business"
        buildingDesc="TIBA SWISS GMBH"
        location="Location"
        locationDesc="Poststrasse 17 2504 Biel/Bienne , Switzerland"
        placeholder1="Name"
        placeholder2="Subject"
        placeholder3="Message"
        submit="Send Message"
      />
    </>
  );
};

export default EnglishPage;
