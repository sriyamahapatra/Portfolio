
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

// ✅ Import all image files manually
import javaImg from "../../asserts/skills/java.webp";
import pythonImg from "../../asserts/skills/python-logo.jpg";
import htmlImg from "../../asserts/skills/html.png";
import cssImg from "../../asserts/skills/css.png";
import jsImg from "../../asserts/skills/javascript.png";
import reactImg from "../../asserts/skills/react.png";
import tailwindImg from "../../asserts/skills/tailwind.png";
import mongodbImg from "../../asserts/skills/mongodb.png";
import mysqlImg from "../../asserts/skills/mysql.png";
import rImg from "../../asserts/skills/r.jpg";
import tableauImg from "../../asserts/skills/tableau.png";
import powerbiImg from "../../asserts/skills/powerbi.jpg";
import gitImg from "../../asserts/skills/git-logo.png";

// ✅ Create a map to resolve string to image import
const imageMap = {
  "skills/java.webp": javaImg,
  "skills/python-logo.jpg": pythonImg,
  "skills/html.png": htmlImg,
  "skills/css.png": cssImg,
  "skills/js.png": jsImg,
  "skills/react.png": reactImg,
  "skills/tailwind.png": tailwindImg,
  "skills/mongodb.png": mongodbImg,
  "skills/mysql.png": mysqlImg,
  "skills/r.png": rImg,
  "skills/tableau.png": tableauImg,
  "skills/powerbi.png": powerbiImg,
  "skills/git.png": gitImg
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src={imageMap[skill.imageSrc]}
                alt={skill.title}
                loading="lazy"
              />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
