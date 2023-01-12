import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailCharacter } from "../../ReduxSlice/marvelSlice";
import styles from "./DetailCard.module.scss";
import { Loading } from "../Loading/Loading.js";
import { Error } from "../Error/Error";

export const DetailCard = () => {
  const [comics, setComics] = useState();
  const detailCharacter = useSelector(
    (state) => state.marvel.detailCharacter.data
  );
  const isLoading = useSelector((state) => state.marvel.isLoading);
  const error = useSelector((state) => state.marvel.error);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailCharacter(id));
    setComics(detailCharacter?.results[0].comics.items);
  }, [id]);
  return (
    <div>
      {" "}
      {isLoading && <Loading />}
      {error && <Error />}
      {detailCharacter?.results.map((item) => (
        <div key={item.id}>
          <div className={styles.detailTopCard}>
            <img
              alt={item.name}
              className={styles.image}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            />{" "}
            <div className={styles.charName}>{item.name}</div>{" "}
          </div>
          <div className={styles.detailBottomCard}>
            <div className={styles.leftText}>
              <span className={styles.hr} />
              <div className={styles.bioText}>COMICS</div>
            </div>
            <div className={styles.Description}>
              {comics?.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
