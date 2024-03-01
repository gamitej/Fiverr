import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/pages/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
