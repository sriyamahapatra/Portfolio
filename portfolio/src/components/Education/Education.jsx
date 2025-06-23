import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";


export const Education = () => {
  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("Education/EducationImage.png")}
          alt="Me sitting with a laptop"
          className={styles.EducationImage}
        />
        <ul className={styles.EducationItems}>
          <li className={styles.EducationItem}>
            <div className={styles.EducationItemText}>
              <h3>Vellore Institute Of Technology</h3>
              <p>
                B Tech Computer Science Engineer
                <span className={styles.cgpa}>cgpa: 8.31</span>
              </p>
              <p>Andhra Pradesh</p>
            </div>
          </li>
          <li className={styles.EducationItem}>
            <div className={styles.EducationItemText}>
              <h3>Takshashila Residential School</h3>
              <p>Odisha
                <span className={styles.cgpa}>Cgpa: 8.0</span>
              </p>
            </div>
          </li>
          <li className={styles.EducationItem}>
            <div className={styles.EducationItemText}>
              <h3>K C Public School</h3>
              <p>
                Berhampur, Odisha
                <span className={styles.cgpa}>Cgpa : 8.3</span>
                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};