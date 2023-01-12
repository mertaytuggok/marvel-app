import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComics } from "../../ReduxSlice/marvelSlice";
import { Error } from "../Error/Error";
import { Loading } from "../Loading/Loading";
import styles from "./Comics.module.scss";

export const Comics = () => {
  const comics = useSelector((state) => state.marvel.comic.data);
  const isLoading = useSelector((state) => state.marvel.isLoading);
  const error = useSelector((state) => state.marvel.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComics());
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      <div className={styles.mainComics}>
        <div className={styles.infoCardComics}>
          {" "}
          {comics?.results.map((item) => (
            <div key={item.id} className={styles.comicsCard}>
              <img
                className={styles.image}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.title}
              />
              <div className={styles.comicCardBottom}>
                <span>{item.title}</span>
                <span className={styles.comicsDate}>
                  {item.pageCount} Pages
                </span>
              </div>
            </div>
          ))}{" "}
        </div>{" "}
      </div>
    </>
  );
};
