import React from "react";
import styles from "./Cards.module.css";
import EachCard from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <EachCard
        name="Confirmed"
        detail="have been confirmed"
        value={confirmed.value}
        className={styles.confirmed}
      />
      <EachCard
        name="Recovered"
        detail="have been recovered"
        value={recovered.value}
        className={styles.recovered}
      />
      <EachCard
        name="Deaths"
        detail="have died after being infected"
        value={deaths.value}
        className={styles.death}
      />
    </div>
  );
};

export default Cards;
