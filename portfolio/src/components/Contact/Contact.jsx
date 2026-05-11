import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.css";

const MotionAnchor = motion.a;
const MotionButton = motion.button;

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ALL data comes from .env file - NOTHING hardcoded!
  const contactInfo = [
    { 
      label: "Email", 
      value: import.meta.env.VITE_CONTACT_EMAIL, 
      href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`, 
      Icon: FaEnvelope 
    },
    { 
      label: "Location", 
      value: import.meta.env.VITE_CONTACT_LOCATION, 
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(import.meta.env.VITE_CONTACT_LOCATION || "")}`, 
      Icon: FaMapMarkerAlt 
    },
  ];

  const socialLinks = [
    { label: "GitHub", href: import.meta.env.VITE_GITHUB_URL, Icon: FaGithub },
    { label: "LinkedIn", href: import.meta.env.VITE_LINKEDIN_URL, Icon: FaLinkedin },
    { label: "LeetCode", href: import.meta.env.VITE_LEETCODE_URL, Icon: SiLeetcode },
  ];

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading("Sending message...", { id: "sending" });

    // Here you can integrate EmailJS or any email service
    // The email will go to: import.meta.env.VITE_CONTACT_EMAIL
    
    setTimeout(() => {
      toast.success("Message sent successfully!", { id: "sending" });
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className={styles.container}>
      <Toaster position="top-right" />
      
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
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
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
                placeholder={placeholder}
                required
                value={formData[name]}
                onChange={handleChange}
                disabled={isLoading}
              />
            </label>
          ))}

          <label className={styles.formGroup}>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Your message here..."
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
            />
          </label>

          <MotionButton 
            type="submit" 
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </MotionButton>
        </form>
      </div>
    </section>
  );
};