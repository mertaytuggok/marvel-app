import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComics } from "../../ReduxSlice/marvelSlice";
import styles from "./Comics.module.scss";

export const Comics = () => {
  const comics = useSelector((state) => state.marvel.comic.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComics());
  }, []);

  console.log(comics);

  return (
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
              <span className={styles.comicsDate}>Comic Date</span>
            </div>
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
