import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useContextGlobal } from "../Context/Context";

const Layout = () => {
  const { state } = useContextGlobal();

  return (
    <div
      style={{
        backgroundColor: state.theme.background,
        color: state.theme.font,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
