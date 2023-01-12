import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharaters } from "../../ReduxSlice/marvelSlice";
import { Error } from "../Error/Error";
import { Loading } from "../Loading/Loading";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const characters = useSelector((state) => state.marvel.character.data);
  const error = useSelector((state) => state.marvel.error);
  const isLoading = useSelector((state) => state.marvel.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharaters());
  }, []);

  return (
    <>
      {isLoading && <Loading />} {error && <Error />}
      <div className={styles.mainDashboard}>
        {" "}
        {isLoading && <Loading />}
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
