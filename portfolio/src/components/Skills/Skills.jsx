import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from "react-icons/fa";
import skills from "../../data/skills.json";
import apiImg from "../../asserts/skills/API.webp";
import cssImg from "../../asserts/skills/css.png";
import expressImg from "../../asserts/skills/express.png";
import gitImg from "../../asserts/skills/git-logo.png";
import htmlImg from "../../asserts/skills/html.png";
import javaImg from "../../asserts/skills/java.webp";
import jsImg from "../../asserts/skills/javascript.png";
import mongodbImg from "../../asserts/skills/mongodb.png";
import mysqlImg from "../../asserts/skills/mysql.png";
import nodeImg from "../../asserts/skills/node.webp";
import postgreSQLImg from "../../asserts/skills/postgreSQL.png";
import pythonImg from "../../asserts/skills/python-logo.jpg";
import reactImg from "../../asserts/skills/react.png";
import springBootImg from "../../asserts/skills/Springboot.png";
import tailwindImg from "../../asserts/skills/tailwind.png";
import styles from "./Skills.module.css";

const imageMap = {
  "skills/API.webp": apiImg,
  "skills/css.png": cssImg,
  "skills/express.png": expressImg,
  "skills/git.png": gitImg,
  "skills/html.png": htmlImg,
  "skills/java.webp": javaImg,
  "skills/js.png": jsImg,
  "skills/mongodb.png": mongodbImg,
  "skills/mysql.png": mysqlImg,
  "skills/node.webp": nodeImg,
  "skills/postgreSQL.png": postgreSQLImg,
  "skills/python-logo.jpg": pythonImg,
  "skills/react.png": reactImg,
  "skills/Springboot.png": springBootImg,
  "skills/tailwind.png": tailwindImg,
};

const categories = [
  { title: "Frontend", Icon: FaCode, skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"] },
  { title: "Backend", Icon: FaLayerGroup, skills: ["node", "express", "Java SpringBoot", "api"] },
  { title: "Database", Icon: FaDatabase, skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "Core Tools", Icon: FaTools, skills: ["Java", "Python", "Git"] },
];

const MotionDiv = motion.div;

export const Skills = () => {
  const skillByTitle = new Map(skills.map((skill) => [skill.title, skill]));

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.kicker}>Toolkit</span>
        <h2>Skills with practical range</h2>
        <p>Languages, frameworks, databases, and tools I use to build reliable products.</p>
      </div>

      <div className={styles.categories}>
        {categories.map((category, index) => (
          <MotionDiv
            className={styles.category}
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className={styles.categoryHeader}>
              <category.Icon aria-hidden="true" />
              <h3>{category.title}</h3>
            </div>
            <div className={styles.chips}>
              {category.skills.map((skillName) => {
                const skill = skillByTitle.get(skillName);
                if (!skill) return null;

                return (
                  <span className={styles.chip} key={skillName}>
                    <img src={imageMap[skill.imageSrc]} alt="" loading="lazy" />
                    {skill.title}
                  </span>
                );
              })}
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className={styles.skillWall}>
        {skills.map((skill, index) => (
          <MotionDiv
            className={styles.skill}
            key={skill.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.025 }}
            whileHover={{ y: -5 }}
          >
            <img src={imageMap[skill.imageSrc]} alt={skill.title} loading="lazy" />
            <span>{skill.title}</span>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
