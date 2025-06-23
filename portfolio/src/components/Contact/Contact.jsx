import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import emailIcon from "../../asserts/contacts/emailIcon.png";
import linkedinIcon from "../../asserts/contacts/linkedinIcon.png";
import githubIcon from "../../asserts/contacts/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>

          <img  src={emailIcon}
           alt="Email icon" />
          <a href="sriyamahapatra767@gmail.com">sriyamahapatra767@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sriya-mahapatra-b79354271/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/sriyamahapatra">Github</a>
        </li>
      </ul>
    </footer>
  );
};