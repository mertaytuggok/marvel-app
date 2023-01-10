import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharaters } from "../../ReduxSlice/marvelSlice";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const characters = useSelector((state) => state.marvel.character.data);
  const error = useSelector((state) => state.marvel.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharaters());
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className={styles.mainDashboard}>
        <div className={styles.infoCard}>
          {characters?.results.map((item) => (
            <Link
              key={item.id}
              className={styles.linkText}
              to={`/char/${item.id}`}
            >
              <img
                className={styles.image}
                alt={item.name}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
              <div className={styles.cardText}>
                <span>{item.name}</span>
                <span className={styles.grayText}>
                  {item.comics.available} Comics
                </span>
              </div>
            </Link>
          ))}{" "}
        </div>
      </div>
    </>
  );
};
