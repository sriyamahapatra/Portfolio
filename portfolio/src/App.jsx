import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={styles.App}>
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
