import { useState } from 'react';
import { motion as Motion } from 'motion/react';
import { Code2, Download, Link2, Mail } from 'lucide-react';
import './Hero.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="container">
        <Motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h1 className="hero-title">
            <Motion.span className="hero-greeting" variants={fadeInUp}>Hi, I&apos;m</Motion.span>
            <Motion.span className="hero-name hero-person-name" variants={fadeInUp}>Shruti Kumari</Motion.span>
            <Motion.span className="hero-tagline" variants={fadeInUp}>
              Data Analyst | Data Science &amp; Full Stack Developer
            </Motion.span>
          </h1>

          <Motion.p className="hero-description" variants={fadeInUp}>
            I build data-driven solutions and practical web applications using modern technologies.
          </Motion.p>

          <Motion.div className="hero-actions" variants={fadeInUp}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <div className="resume-options">
              <button type="button" className="btn btn-outline" onClick={() => setResumeOpen(!resumeOpen)} aria-expanded={resumeOpen}>
                View Resume
              </button>
              {resumeOpen && <div className="resume-downloads">
                <a href="/resumes/SHRUTI%20KUMARI-RESUME-Data%20Science.pdf" className="btn btn-outline" download>
                  <Download size={16} />
                  Data Science Resume
                </a>
                <a href="/resumes/SHRUTI%20KUMARI-RESUME-data%20analyst.pdf" className="btn btn-outline" download>
                  <Download size={16} />
                  Data Analyst Resume
                </a>
              </div>}
            </div>
          </Motion.div>

          <Motion.div className="hero-socials" variants={fadeInUp}>
            {[
              { href: "https://github.com/shrutikumari18", icon: <Code2 size={18} />, label: "GitHub", id: "github" },
              { href: "https://linkedin.com/in/shruti-kumari-a6a727291/", icon: <Link2 size={18} />, label: "LinkedIn", id: "linkedin" },
              { href: "https://leetcode.com/u/shrutikumari1803/", icon: <Code2 size={18} />, label: "LeetCode", id: "leetcode" },
              { href: "mailto:shrutikumari18032005@gmail.com", icon: <Mail size={18} />, label: "Email", id: "email" }
            ].map((social) => (
              <Motion.a
                key={social.id}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label={`Visit Shruti's ${social.label} profile`}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
                <span>{social.label}</span>
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}
