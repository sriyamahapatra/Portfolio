import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

const RESUME_URL =
  "https://drive.google.com/file/d/13XJ7gISM6Y-YfpS08Q0jjjHV2DSdz8c7/view";

const navItems = [
  { id: "home", label: "Home", Icon: FaHome },
  { id: "experience", label: "Experience", Icon: FaBriefcase },
  { id: "skills", label: "Skills", Icon: FaCode },
  { id: "projects", label: "Projects", Icon: FaProjectDiagram },
  { id: "contact", label: "Contact", Icon: FaEnvelope },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/sriyamahapatra" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sriya-mahapatra-b79354271/",
  },
];

const MotionAnchor = motion.a;
const MotionButton = motion.button;
const MotionDiv = motion.div;
const MotionNav = motion.nav;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = useMemo(() => navItems.map(({ id }) => id), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      setScrolled(window.scrollY > 24);

      const currentSection = sectionIds.findLast((id) => {
        const section = document.getElementById(id);
        return section && section.offsetTop <= scrollPosition;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const renderNavLink = (item, isMobile = false) => (
    <MotionAnchor
      key={item.id}
      href={`#${item.id}`}
      className={`${isMobile ? styles.mobileLink : styles.navLink} ${
        activeSection === item.id ? styles.active : ""
      }`}
      onClick={(event) => {
        event.preventDefault();
        handleNavClick(item.id);
      }}
      whileHover={{ y: isMobile ? 0 : -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <item.Icon aria-hidden="true" />
      <span>{item.label}</span>
    </MotionAnchor>
  );

  return (
    <>
      <MotionNav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, type: "spring", stiffness: 120 }}
      >
        <div className={styles.navContainer}>
          <a
            className={styles.logo}
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("home");
            }}
          >
            <span className={styles.logoMark}>S</span>
          </a>

          <div className={styles.desktopMenu}>
            {navItems.map((item) => renderNavLink(item))}
            <MotionAnchor
              className={styles.resumeBtn}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaUser aria-hidden="true" />
              Resume
            </MotionAnchor>
          </div>

          <MotionButton
            className={styles.menuToggle}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.92 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MotionButton>
        </div>
      </MotionNav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <MotionDiv
              className={styles.menuOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <MotionDiv
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 210 }}
            >
              <div className={styles.mobileHeader}>
                <span>Navigation</span>
                <button
                  className={styles.closeBtn}
                  type="button"
                  aria-label="Close navigation"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className={styles.mobileLinks}>
                {navItems.map((item) => renderNavLink(item, true))}
              </div>

              <a
                className={styles.mobileResume}
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUser aria-hidden="true" />
                Download Resume
              </a>

              <div className={styles.mobileSocial}>
                {socialLinks.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
