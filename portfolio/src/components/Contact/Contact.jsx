import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.css";

const MotionAnchor = motion.a;
const MotionButton = motion.button;

const {
  VITE_CONTACT_EMAIL,
  VITE_CONTACT_LOCATION,
  VITE_GITHUB_URL,
  VITE_LINKEDIN_URL,
  VITE_LEETCODE_URL,
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

const hasEmailJsConfig =
  Boolean(VITE_EMAILJS_SERVICE_ID) &&
  Boolean(VITE_EMAILJS_TEMPLATE_ID) &&
  Boolean(VITE_EMAILJS_PUBLIC_KEY);

const sendWithFormSubmit = async ({ name, email, message }) => {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(VITE_CONTACT_EMAIL)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _replyto: email,
      _subject: `Portfolio message from ${name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const result = await response.json();

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "FormSubmit request failed.");
  }

  return result;
};

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    { 
      label: "Email", 
      value: VITE_CONTACT_EMAIL, 
      href: VITE_CONTACT_EMAIL ? `mailto:${VITE_CONTACT_EMAIL}` : "", 
      Icon: FaEnvelope 
    },
    { 
      label: "Location", 
      value: VITE_CONTACT_LOCATION, 
      href: VITE_CONTACT_LOCATION
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VITE_CONTACT_LOCATION)}`
        : "", 
      Icon: FaMapMarkerAlt 
    },
  ].filter((item) => item.value && item.href);

  const socialLinks = [
    { label: "GitHub", href: VITE_GITHUB_URL, Icon: FaGithub },
    { label: "LinkedIn", href: VITE_LINKEDIN_URL, Icon: FaLinkedin },
    { label: "LeetCode", href: VITE_LEETCODE_URL, Icon: SiLeetcode },
  ].filter((link) => link.href);

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

    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedFormData.name || !trimmedFormData.email || !trimmedFormData.message) {
      toast.error("Please fill in every field.");
      return;
    }

    if (!VITE_CONTACT_EMAIL) {
      toast.error("Contact email is not configured.");
      return;
    }

    setIsLoading(true);
    toast.loading("Sending message...", { id: "sending" });

    try {
      if (hasEmailJsConfig) {
        await emailjs.send(
          VITE_EMAILJS_SERVICE_ID,
          VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: trimmedFormData.name,
            from_email: trimmedFormData.email,
            reply_to: trimmedFormData.email,
            message: trimmedFormData.message,
            to_email: VITE_CONTACT_EMAIL,
          },
          VITE_EMAILJS_PUBLIC_KEY
        );
      } else {
        await sendWithFormSubmit(trimmedFormData);
      }

      toast.success(
        "Message sent successfully!",
        { id: "sending" }
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      toast.error("Message could not be sent. Please try the direct email link.", { id: "sending" });
    } finally {
      setIsLoading(false);
    }
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
