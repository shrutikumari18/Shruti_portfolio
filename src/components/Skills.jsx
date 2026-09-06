import { createElement, useEffect, useRef } from 'react';
import { BarChart3, BrainCircuit, Braces, Wrench } from 'lucide-react';
import './Skills.css';

const skillGroups = [
  { icon: BarChart3, title: 'Data Analytics', accent: 'analytics', items: ['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'Data Visualization'] },
  { icon: BrainCircuit, title: 'Data Science & AI', accent: 'science', items: ['NumPy', 'Scikit-learn', 'NLP', 'Machine Learning', 'OpenCV', 'MediaPipe'] },
  { icon: Braces, title: 'Full-Stack Development', accent: 'development', items: ['React', 'JavaScript', 'Node.js', 'Flask', 'MySQL', 'HTML & CSS'] },
  { icon: Wrench, title: 'Tools & Fundamentals', accent: 'tools', items: ['Git', 'GitHub', 'Jupyter', 'Figma', 'DBMS', 'Data Structures'] },
];

export default function Skills() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <section id="skills" ref={sectionRef} className="skills-section"><div className="container">
    <div className="section-header reveal"><div className="section-label">Expertise</div><h2 className="section-title">Skills I Bring to the Table</h2><p className="section-subtitle">A practical toolkit spanning data, intelligent systems, and modern web development.</p></div>
    <div className="skills-showcase-grid">
      {skillGroups.map(({ icon: Icon, title, accent, items }) => <article className={`skills-showcase-card glass-card reveal ${accent}`} key={title}>
        <div className="skills-card-icon">{createElement(Icon, { size: 21 })}</div><h3>{title}</h3>
        <div className="skills-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      </article>)}
    </div>
  </div></section>;
}
