import React from "react";
import bannerDefault from "../assets/images/banner.jpg";
import "../styles/planeticket.scss";
import Hero from "../components/UI/hero";
import Advertisement from "../components/UI/advertisement";
import StickyButton from "../components/UI/stickybutton"
import Search from "../components/UI/search";
import CarouselGuide from "../components/UI/carouselguide";
import SecurePayment from "../components/UI/securepayment";
import Question from "../components/UI/question";

const PlaneTicket = (props) => {
  const {banner} = props;
  
  return (
    <>
      <div className="banner">
        <img src={banner || bannerDefault} alt="" className="w-100 h-auto" />
      </div>
      <Search></Search>
      <Hero />
      <Advertisement></Advertisement>
      <Question></Question>
      <StickyButton></StickyButton>
      <CarouselGuide></CarouselGuide>
      <SecurePayment></SecurePayment>
    </>
  );
};

export default PlaneTicket;
