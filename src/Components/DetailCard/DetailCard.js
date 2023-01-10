import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailCard.module.scss";

export const DetailCard = () => {
  const [char, setChar] = useState(null);
  const [comics, setComics] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2af4b4a2bfad80f5782cf0036e849d6c&hash=ec590c972daa14a7d1b022799e7c53dd`
    )
      .then((res) => res.data)
      .then((data) => setChar(data.data.results))
      .finally(() => setLoading(false));
    axios(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=2af4b4a2bfad80f5782cf0036e849d6c&hash=ec590c972daa14a7d1b022799e7c53dd`
    )
      .then((res) => res.data)
      .then((data) => setComics(data.data.results))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {" "}
      {loading && <div>Loading..</div>}
      {char && (
        <>
          <div className={styles.detailTopCard}>
            <img
              alt={char[0].name}
              className={styles.image}
              src={`${char[0].thumbnail.path}.${char[0].thumbnail.extension}`}
            />{" "}
            <div className={styles.charName}>{char[0].name}</div>{" "}
          </div>
          <div className={styles.detailBottomCard}>
            <div className={styles.leftText}>
              <span className={styles.hr} />
              <div className={styles.bioText}>COMICS</div>
            </div>
            <div className={styles.Description}>
              {comics?.map((item) => (
                <div key={item.id}>{item.title}</div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
