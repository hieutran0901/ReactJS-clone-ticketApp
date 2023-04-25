import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PlaneTicket from "../pages/PlaneTicket";
import SearchTicker from "../pages/SearchTicker";
import bannerVNAirlines from "../assets/images/bannerVNAirlines.jpg";
import bannerVietjet from "../assets/images/bannerVietjet.jpg";
import bannerBamboo from "../assets/images/bannerBamboo.jpg";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ve-may-bay" />} />
      <Route exact path="/ve-may-bay" element={<PlaneTicket />} />
      <Route exact path="/ve-may-bay/tim-chuyen" element={<SearchTicker />} />
      <Route exact path="/ve-may-bay/vietnam-airlines" element={<PlaneTicket banner={bannerVNAirlines}/>} />
      <Route exact path="/ve-may-bay/vietjet-air" element={<PlaneTicket banner={bannerVietjet}/>} />
      <Route exact path="/ve-may-bay/bamboo-airways" element={<PlaneTicket banner={bannerBamboo}/>} />
    </Routes>
  );
};

export default Routers;
