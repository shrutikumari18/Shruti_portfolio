import { createElement, useEffect, useRef } from 'react';
import { BarChart3, BrainCircuit, Code2, Globe, Wrench } from 'lucide-react';
import './About.css';
import './Skills.css';

const skillGroups = [
  { icon: Code2, title: 'Programming', accent: 'programming', items: ['Python', 'C++', 'JavaScript'] },
  { icon: BarChart3, title: 'Data Analytics', accent: 'analytics', items: ['SQL', 'Excel', 'Power BI', 'Pandas'] },
  { icon: BrainCircuit, title: 'Machine Learning', accent: 'science', items: ['Scikit-learn', 'ML', 'Data Visualization'] },
  { icon: Globe, title: 'Web Development', accent: 'development', items: ['React', 'Node.js', 'Flask', 'MongoDB'] },
  { icon: Wrench, title: 'Tools', accent: 'tools', items: ['Git', 'GitHub', 'VS Code'] },
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
              <h2 className="section-title">A little about me</h2>
            </div>
            <p className="about-bio reveal">
              I am a Computer Science student specializing in Data Science. I am interested in
              Data Analytics, Machine Learning and Full Stack Development. I enjoy building
              practical solutions and working with data to solve real-world problems.
            </p>
            <div className="about-details reveal">
              <div>
                <h3>Education</h3>
                <p>
                  <strong>B.Tech - Computer Science &amp; Engineering (Data Science)</strong><br />
                  Shobhit University<br />
                  2023 - 2027<br />
                  CGPA: 8.70
                </p>
              </div>
              <div>
                <h3>Key Skills</h3>
                <p>Python, SQL, Power BI, MS Excel, Machine Learning, React and Node.js</p>
              </div>
            </div>
            <a
              className="certificates-link reveal"
              href="https://github.com/shrutikumari18/certificate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Want to see my certificates?
            </a>
          </div>
          <div className="about-right">
            <div className="section-header about-skills-header reveal">
              <div className="section-label">Skills</div>
              <h2 className="section-title">My Skills</h2>
            </div>
            <div className="skills-showcase-grid">
              {skillGroups.map(({ icon: Icon, title, accent, items }) => <article className={`skills-showcase-card glass-card reveal ${accent}`} key={title}>
                <div className="skills-card-icon">{createElement(Icon, { size: 21 })}</div>
                <h3>{title}</h3>
                <div className="skills-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
