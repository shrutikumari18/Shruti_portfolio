import { useEffect, useRef } from 'react';
import './About.css';

const skills = [
  { category: 'Data & Analytics', items: ['Python', 'SQL', 'Power BI', 'Excel', 'Pandas'] },
  { category: 'AI & Machine Learning', items: ['Scikit-learn', 'NLP', 'OpenCV', 'MediaPipe', 'NumPy'] },
  { category: 'Full Stack', items: ['React', 'JavaScript', 'Flask', 'Node.js', 'MySQL'] },
  { category: 'Core & Tools', items: ['DSA', 'DBMS', 'Git', 'GitHub', 'Figma'] },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="reveal">
              <div className="section-label">About Me</div>
              <h2 className="section-title">Data, AI &amp; Full-Stack<br />Solutions That Matter</h2>
            </div>
            <p className="about-bio reveal">
              I am a B.Tech Computer Science &amp; Engineering student focused on Data Analytics,
              Data Science, AI/ML, and Full-Stack Development. I enjoy turning data and ideas
              into useful dashboards, intelligent systems, and modern web applications.
            </p>
            <p className="about-bio reveal">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source, or building civic-tech projects like <strong className="highlight">Pragatidrishti</strong> — an
              AI-driven platform for government transparency.
            </p>
            <div className="about-stats reveal">
              <div className="about-stat">
                <span className="about-stat-num gradient-text">15+</span>
                <span className="about-stat-label">Projects</span>
              </div>
              <div className="about-divider" />
              <div className="about-stat">
                <span className="about-stat-num gradient-text">∞</span>
                <span className="about-stat-label">Curiosity</span>
              </div>
            </div>
          </div>

          <div className="about-right reveal">
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.category} className="skill-group glass-card">
                  <h4 className="skill-category">{group.category}</h4>
                  <div className="skill-tags">
                    {group.items.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
