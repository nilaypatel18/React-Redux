import React from "react";
import HeroBanner from "../section/Herobanner";
import Expertise from "../section/Expertise";
import Service from "../section/Services";
import Whychooseus from "../section/Whychooseus";
import Portfolio from "../section/Portfolio";
import Testimonial from "../section/Testimonial";

import { useSelector } from "react-redux";

function Home() {
  const HomeData = useSelector((state) => state.HomeReducer.homeData);

  return HomeData != null ? (
    <>
      <HeroBanner />
      <Expertise />
      <Whychooseus />
      <Service />
      <Portfolio />
      <Testimonial />
    </>
  ) : (
    <div className="loaderdiv" style={{height:'100vh'}}></div>
  );
}

export default Home;
