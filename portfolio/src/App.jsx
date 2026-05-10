import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const MotionDiv = motion.div;

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${mouseX}px ${mouseY}px, rgba(21, 200, 168, 0.18), transparent 64%)`;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className={styles.App}>
      <MotionDiv className={styles.globalSpotlight} style={{ background: spotlight }} />
      <Navbar />
      <section id="home" data-aos="fade-up">
        <Hero />
      </section>
      <section id="experience" data-aos="fade-up">
        <Experience />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
    </div>
  );
}

export default App;
