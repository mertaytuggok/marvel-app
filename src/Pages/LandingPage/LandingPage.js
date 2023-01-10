import React from "react";
import styles from "./LandingPage.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export const LandingPage = () => {
  return (
    <div className={styles.mainPage}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
