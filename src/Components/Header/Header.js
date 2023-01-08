import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.mainHeadder}>
      {" "}
      <NavLink className={styles.headerText} to="dashboard">
        Ana Sayfa
      </NavLink>
      <NavLink className={styles.headerText} to="detail">
        Detail
      </NavLink>
    </div>
  );
};
