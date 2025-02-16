import React from "react";
import Carousel from "./Carousel";
import GlassesTypes from "./GlassesTypes";
import ShopByGender from "./ShopByGender";
import EyeTest from "./EyeTest";
import NewArrival from "./NewArrival";
import MarqueeText from "./MarqueeText";
import Features from "./Features";
import Map from "./Map";

const HomeSection = () => {
  return (
    <>
      <Carousel />
      <GlassesTypes />
      <ShopByGender />
      <EyeTest />
      <NewArrival />
      <MarqueeText />
      <Features />
      <Map />
    </>
  );
};

export default HomeSection;
