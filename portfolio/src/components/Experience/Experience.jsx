import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((item, index) => (
            <li key={index} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${item.role}, ${item.organisation}`}</h3>
                <p>{`${item.startDate} - ${item.endDate}`}</p>
                <p>{`${item.experiences}`}</p>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};