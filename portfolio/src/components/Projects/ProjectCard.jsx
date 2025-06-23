import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

import cryptocurrency from "../../asserts/Projects/cryptocurrency.png";
import expense from "../../asserts/Projects/money.png";
import quiz from "../../asserts/Projects/quiz.png";

const imageMap = {
  "projects/cryptocurrency.png": cryptocurrency,
  "projects/money.png": expense,
  "projects/quiz.png": quiz,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[imageSrc]}
        alt={title}
        loading="lazy"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
