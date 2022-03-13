import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import "./styles.scss";

function DefaultLayout() {
  return (
    <div className="default-layout">
      <Header />
      <section className="default-layout-section">
        <Outlet />
      </section>
    </div>
  );
}

export default DefaultLayout;
