import { motion as Motion } from 'motion/react';
import { ArrowDown, BarChart3, Check, Code2, Link2, Mail, Sparkles } from 'lucide-react';
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
  return (
    <section id="home" className="hero">
      <div className="container">
        <Motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Motion.div className="hero-badge" variants={fadeInUp}>
            <Sparkles size={13} />
            <span>Available for meaningful work</span>
          </Motion.div>

          <h1 className="hero-title">
            <Motion.span className="hero-greeting" variants={fadeInUp}>Hi, I am</Motion.span>
            <Motion.span className="hero-name hero-person-name" variants={fadeInUp}>Shruti Kumari</Motion.span>
            <Motion.span className="hero-name hero-idea-line" variants={fadeInUp}>I turn ideas<br /><span className="gradient-text">into impact.</span></Motion.span>
            <Motion.span className="hero-tagline" variants={fadeInUp}>
              Data analyst, developer &amp; curious problem-solver.
            </Motion.span>
          </h1>

          <Motion.p className="hero-description" variants={fadeInUp}>
            I build clear, useful digital experiences where thoughtful design meets
            reliable code, turning complex problems into simple products people enjoy using.
          </Motion.p>

          <Motion.div className="hero-actions" variants={fadeInUp}>
            <a href="#projects" className="btn btn-primary">
              Explore my work
              <ArrowDown size={15} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let’s connect
            </a>
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

        <Motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="work-card glass-card">
            <div className="work-card-topline">
              <span className="window-dots"><i /><i /><i /></span>
              <span>shruti / portfolio</span>
              <span className="status-dot" />
            </div>
            <div className="work-card-heading">
              <div className="avatar-circle"><span>S</span></div>
              <div>
                <p className="work-kicker">My approach</p>
                <h2>Ideas into<br /><span>useful products.</span></h2>
              </div>
            </div>
            <div className="work-chart" aria-hidden="true">
              <BarChart3 size={22} />
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className="work-details">
              <div><strong>Data</strong><small>find the story</small></div>
              <div><strong>Code</strong><small>build the solution</small></div>
              <div className="work-available"><Check size={15} /><small>design with purpose</small></div>
            </div>
          </div>
        </Motion.div>
      </div>

      <Motion.a
        href="#about" 
        className="scroll-hint" 
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-icon" />
      </Motion.a>
    </section>
  );
}
