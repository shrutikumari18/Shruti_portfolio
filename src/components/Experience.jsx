import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    title: 'Full-Stack Developer',
    org: 'Freelance / Open Source',
    period: '2023 – Present',
    description:
      'Building web applications and civic-tech tools. Led development of Pragatidrishti, an AI-powered government transparency platform for HackCraft.',
    tech: ['React', 'Node.js', 'Python', 'PostgreSQL'],
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    org: 'Tech Startup',
    period: '2022 – 2023',
    description:
      'Developed responsive UI components and design systems. Improved page load performance by 40% through code-splitting and optimization.',
    tech: ['React', 'TypeScript', 'CSS', 'Figma'],
  },
];

const education = [
  {
    type: 'edu',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'University / College',
    period: '2021 – 2025',
    description:
      'Focused on algorithms, distributed systems, and web technologies. Active member of the coding club and hackathon participant.',
    tech: ['Data Structures', 'OS', 'DBMS', 'Computer Networks'],
  },
];

const timeline = [...experiences, ...education];

export default function Experience() {
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
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Experience</div>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            A timeline of my professional experience and academic background.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-item reveal`} id={`exp-${i}`}>
              <div className="timeline-connector">
                <div className="timeline-icon">
                  {item.type === 'edu' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                </div>
                {i < timeline.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className={`timeline-type-badge ${item.type}`}>
                    {item.type === 'edu' ? 'Education' : 'Work'}
                  </span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tech">
                  {item.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
