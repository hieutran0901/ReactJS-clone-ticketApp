import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from '../../routes/Routers.jsx'
const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
