import React from "react";
import ContactUs from "../ContactUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Map from "../Map";
import Photos from "../photo collage";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Photos />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
