import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronDown,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Backend Intern ",
    organisation: "Bajaj Life Insurance pvt Ltd.",
    location: "Pune, India",
    period: "February 2026 - Present",
    description:
      "Working on scalable backend solutions for financial applications that handle high-volume transactions.",
    stack: ["PL/SQL", "Oracle SQL", "Java Springboot","Middleware", "REST APIs", "Git"],
    points: [
      "Developed and optimized PL/SQL procedures, functions, and packages.",
      "Improved API response time through query tuning and indexing.",
      "Contributed to deployment and maintenance of Oracle SQL and Java Springboot backend services.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    organisation: "Prinstone Smart Engineers",
    location: "Hybrid, Bengaluru",
    period: "June 2024 - July 2024",
    description:
      "Built responsive full-stack web applications for early-stage startup clients.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    points: [
      "Created responsive React interfaces with modern hooks.",
      "Developed REST APIs with authentication and role-based access.",
      "Improved app performance through cleaner reusable code.",
    ],
  },
];

const MotionButton = motion.button;
const MotionDiv = motion.div;

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.kicker}>
          <FaBriefcase aria-hidden="true" />
          Experience
        </span>
        <h2>Work that shaped how I build</h2>
        <p>Backend engineering, full-stack delivery, and production-minded problem solving.</p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((experience, index) => {
          const isActive = activeIndex === index;

          return (
            <MotionDiv
              className={`${styles.card} ${isActive ? styles.active : ""}`}
              key={experience.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <MotionButton
                className={styles.cardButton}
                type="button"
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                aria-expanded={isActive}
              >
                <span className={styles.dot} />
                <span className={styles.cardText}>
                  <strong>{experience.role}</strong>
                  <span>{experience.organisation}</span>
                </span>
                <FaChevronDown className={styles.chevron} aria-hidden="true" />
              </MotionButton>

              <div className={styles.meta}>
                <span>
                  <FaCalendarAlt aria-hidden="true" />
                  {experience.period}
                </span>
                <span>
                  <FaMapMarkerAlt aria-hidden="true" />
                  {experience.location}
                </span>
              </div>

              <p className={styles.description}>{experience.description}</p>

              <AnimatePresence initial={false}>
                {isActive && (
                  <MotionDiv
                    className={styles.details}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className={styles.stack}>
                      <FaCode aria-hidden="true" />
                      {experience.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
};
