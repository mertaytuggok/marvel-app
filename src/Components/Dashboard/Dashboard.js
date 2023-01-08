import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharaters } from "../../ReduxSlice/characterSlice";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const characters = useSelector((state) => state.characters.character.data);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharaters());
  }, []);
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={styles.mainDashboard}>
      <div className={styles.infoCard}>
        {characters?.results.map((item) => (
          <Link
            key={item.id}
            className={styles.linkText}
            to={`/char/${item.id}`}
          >
            <div className={styles.card}>
              <img
                className={styles.image}
                alt={item.name}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />

              <div>{item.name}</div>
              <div>Desc</div>
              <div>Button</div>
            </div>
          </Link>
        ))}{" "}
      </div>
    </div>
  );
};
