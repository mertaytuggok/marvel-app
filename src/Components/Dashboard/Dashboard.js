import React from "react";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={styles.mainDashboard}>
      <div className={styles.infoCard}>
        <div className={styles.card}>
          <div>Fotoğraf</div>
          <div>Title</div>
          <div>Desc</div>
          <div>Button</div>
        </div>{" "}
      </div>
    </div>
  );
};
