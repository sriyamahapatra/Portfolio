import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import cryptocurrency from "../../asserts/Projects/cryptocurrency.png";
import forest from "../../asserts/Projects/forestimg.png";
import expense from "../../asserts/Projects/money.png";
import quiz from "../../asserts/Projects/quiz.png";
import skillswap from "../../asserts/Projects/SkillSwap.png";
import styles from "./ProjectCard.module.css";

const imageMap = {
  "projects/cryptocurrency.png": cryptocurrency,
  "projects/forestimg.png": forest,
  "projects/money.png": expense,
  "projects/quiz.png": quiz,
  "projects/SkillSwap.png": skillswap,
};

const MotionAnchor = motion.a;
const MotionArticle = motion.article;

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const hasDemo = demo && demo !== "#";

  return (
    <MotionArticle
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
    >
      <img className={styles.image} src={imageMap[imageSrc]} alt={title} loading="lazy" />

      <div className={styles.content}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className={styles.links}>
          {hasDemo && (
            <MotionAnchor
              href={demo}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.96 }}
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Demo
            </MotionAnchor>
          )}
          <MotionAnchor href={source} target="_blank" rel="noreferrer" whileTap={{ scale: 0.96 }}>
            <FaGithub aria-hidden="true" />
            Code
          </MotionAnchor>
        </div>
      </div>
    </MotionArticle>
  );
};
