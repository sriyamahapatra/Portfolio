import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuBtn from "../../asserts/navbar/menuIcon.png";
import closeBtn from "../../asserts/navbar/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <span className={styles.cosmicText}>Portfolio</span>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeBtn : menuBtn}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#Education" className={styles.menuLink}>
              <span className={styles.linkText}>Education</span>
              <span className={styles.linkHover}></span>
            </a>
          </li>
          <li>
            <a href="#experience" className={styles.menuLink}>
              <span className={styles.linkText}>Experience</span>
              <span className={styles.linkHover}></span>
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.menuLink}>
              <span className={styles.linkText}>Skills</span>
              <span className={styles.linkHover}></span>
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.menuLink}>
              <span className={styles.linkText}>Projects</span>
              <span className={styles.linkHover}></span>
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.menuLink}>
              <span className={styles.linkText}>Contact</span>
              <span className={styles.linkHover}></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};