import styles from "./App.module.css";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
