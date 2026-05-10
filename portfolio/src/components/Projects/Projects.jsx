import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.kicker}>Selected Work</span>
        <h2>Projects with product thinking</h2>
        <p>Real apps, clean interfaces, secure flows, and API-driven features.</p>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
