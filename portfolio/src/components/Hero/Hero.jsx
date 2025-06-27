import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import heroImage from "../../asserts/hero/heroImage.jpg";

export const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starsArray = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3
    }));
    setStars(starsArray);
  }, []);

  return (
    <section className={styles.container}>
      {/* Cosmic background elements */}
      <div className={styles.cosmicBackground}>
        {stars.map(star => (
          <div 
            key={star.id}
            className={styles.star}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sriya Mahapatra</h1>
        <p className={styles.description}>
          I'm a BTech Student <br/>
          Computer Science Engineer<br/>
          Vellore Institute Of Technology
        </p>
        <a 
          href="https://drive.google.com/file/d/121iy--ZhkP88FQfH3ONaAmTjT0yCdXRL/view?usp=sharing" 
          className={styles.contactBtn}
        >
          Download Resume
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={heroImage} 
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.imageGlow} />
      </div>
    </section>
  );
};
