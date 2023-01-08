import React from "react";
import styles from "./LandingPage.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header";

export const LandingPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Outlet />
    </div>
  );
};
