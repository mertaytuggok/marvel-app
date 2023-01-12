import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

export const Error = () => {
  return (
    <div className={styles.ErrorMain}>
      <div>Oops Sorry, something went wrong!</div>
      <Link to="/" className={styles.Button}>
        Back to Home Page
      </Link>
    </div>
  );
};
