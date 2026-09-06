import { useEffect, useRef } from 'react';
import { Download, FileText, Upload } from 'lucide-react';
import './Resumes.css';

const resumes = [
  { title: 'Data Analyst', description: 'Analytics, dashboards, SQL and business insights.', href: 'https://drive.google.com/file/d/1WXZAXYpn-sUVUfJdhYVOWYQdlcSKLElo/view?usp=sharing', action: 'View resume', available: true },
  { title: 'Data Science', description: 'Machine learning, AI and data-science projects.', href: 'https://drive.google.com/file/d/1TVW4wt1aWJ44I8I2G7Q61FBbFxoYmGkr/view?usp=sharing', action: 'View resume', available: true },
  { title: 'Full-Stack Developer', description: 'React, backend development and web applications.', href: '/resumes/shruti-kumari-full-stack-resume.pdf', action: 'Add resume PDF', available: false },
];

export default function Resumes() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <section id="resumes" ref={sectionRef} className="resumes-section"><div className="container">
    <div className="section-header resumes-header reveal"><div className="section-label">Resume</div><h2 className="section-title">Choose the Right Resume</h2><p className="section-subtitle">Download the version that best fits the opportunity.</p></div>
    <div className="resume-grid">{resumes.map((resume) => <article className={`resume-card glass-card reveal ${resume.available ? '' : 'resume-pending'}`} key={resume.title}><FileText size={25} /><div><h3>{resume.title}</h3><p>{resume.description}</p></div>{resume.available ? <a href={resume.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Download size={16} />{resume.action}</a> : <span className="resume-upload-note"><Upload size={15} /> Place PDF in <code>public/resumes</code></span>}</article>)}</div>
  </div></section>;
}
