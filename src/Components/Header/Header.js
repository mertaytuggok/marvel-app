import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../Asset/Logo.svg";

export const Header = () => {
  return (
    <>
      {" "}
      <NavLink className={styles.topHeader} to="characters">
        {" "}
        <img src={Logo} />
      </NavLink>
      <div className={styles.bottomHeader}>
        <NavLink className={styles.headerText} to="characters">
          CHARACTERS
        </NavLink>
        <NavLink className={styles.headerText} to="comics">
          COMİCS
        </NavLink>
      </div>
    </>
  );
};
