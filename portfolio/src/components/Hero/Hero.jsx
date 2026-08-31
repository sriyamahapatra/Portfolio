import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../../asserts/hero/heroImage.jpg";
import styles from "./Hero.module.css";

const MotionAnchor = motion.a;
const MotionDiv = motion.div;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;
const MotionSpan = motion.span;

const RESUME_URL =
  "https://drive.google.com/file/d/13XJ7gISM6Y-YfpS08Q0jjjHV2DSdz8c7/view";

const roles = [
  "Computer Science Engineer",
  1800,
  "Backend Developer",
  1800,
  "Problem Solver",
  1800,
  "Full Stack Builder",
  1800,
];

const stats = [
  ["10+", "Shipped builds"],
  ["2", "Internships"],
  ["15+", "Tech tools"],
];

const socialLinks = [
  { href: "https://github.com/sriyamahapatra", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/sriya-mahapatra-b79354271/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  { href: "mailto:sriyamahapatra767@gmail.com", label: "Email", Icon: FaEnvelope },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55 } },
};

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.skyline} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <MotionDiv
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionSpan className={styles.kicker} variants={itemVariants}>
          <span className={styles.liveDot} />
          Available for backend and full stack roles
        </MotionSpan>

        <MotionHeading className={styles.title} variants={itemVariants}>
          Hi, I am <span>Sriya Mahapatra</span>
        </MotionHeading>

        <MotionDiv className={styles.role} variants={itemVariants}>
          <TypeAnimation sequence={roles} wrapper="span" speed={48} repeat={Infinity} />
        </MotionDiv>

        <MotionParagraph className={styles.description} variants={itemVariants}>
          BTech CSE student at Vellore Institute of Technology, focused on
          scalable APIs, database-backed systems, and clean web experiences.
        </MotionParagraph>

        <MotionDiv className={styles.actions} variants={itemVariants}>
          <MotionAnchor
            href={RESUME_URL}
            className={styles.primaryBtn}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </MotionAnchor>
          <MotionAnchor
            href="#projects"
            className={styles.secondaryBtn}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </MotionAnchor>
        </MotionDiv>

        <MotionDiv className={styles.stats} variants={itemVariants}>
          {stats.map(([value, label]) => (
            <div className={styles.stat} key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </MotionDiv>

        <MotionDiv className={styles.socialLinks} variants={itemVariants}>
          {socialLinks.map((link) => {
            const isMail = link.href.startsWith("mailto:");
            return (
              <MotionAnchor
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.94 }}
              >
                <link.Icon aria-hidden="true" />
              </MotionAnchor>
            );
          })}
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        className={styles.portrait}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.2 }}
      >
        <img src={heroImage} alt="Sriya Mahapatra" />
      </MotionDiv>
    </section>
  );
};
