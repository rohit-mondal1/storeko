import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../page/shared/Footer";
import Header from "../../page/shared/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-50">
          <Header></Header>
        </div>

        <div style={{ minHeight: "100vh" }}>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
