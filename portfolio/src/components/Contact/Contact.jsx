import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import styles from "./Contact.module.css";

const initialFormData = { name: "", email: "", message: "" };

const contactInfo = [
  { label: "Email", value: "sriyamahapatra767@gmail.com", href: "mailto:sriyamahapatra767@gmail.com", Icon: FaEnvelope },
  { label: "Location", value: "Pune,  Maharashtra", href: "https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra", Icon: FaMapMarkerAlt },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/sriyamahapatra", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sriya-mahapatra-b79354271/", Icon: FaLinkedin },
  { label: "LeetCode", href: "https://leetcode.com/sriyamahapatra/", Icon: SiLeetcode },
];

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "John Doe" },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com" },
];

const MotionAnchor = motion.a;
const MotionButton = motion.button;

export const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = useCallback(({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
    },
    [formData]
  );

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.kicker}>Contact</span>
        <h2>Let us build something useful</h2>
        <p>Have an opportunity, collaboration idea, or tech conversation in mind? Reach out.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.panel}>
          <h3>Connect directly</h3>
          <div className={styles.infoList}>
            {contactInfo.map((item) => (
              <MotionAnchor
                className={styles.infoItem}
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ x: 4 }}
              >
                <item.Icon aria-hidden="true" />
                <span>
                  <strong>{item.label}</strong>
                  {item.value}
                </span>
              </MotionAnchor>
            ))}
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <MotionAnchor
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                whileHover={{ y: -3 }}
              >
                <link.Icon aria-hidden="true" />
                {link.label}
              </MotionAnchor>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {fields.map(({ name, label, type, placeholder }) => (
            <label className={styles.formGroup} key={name}>
              <span>{label}</span>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
              />
            </label>
          ))}

          <label className={styles.formGroup}>
            <span>Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              required
            />
          </label>

          <MotionButton type="submit" whileTap={{ scale: 0.98 }}>
            Send Message
          </MotionButton>
        </form>
      </div>
    </section>
  );
};
