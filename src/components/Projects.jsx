import { useEffect, useRef } from 'react';
import { BarChart3, Code2, Cpu, ExternalLink, Globe } from 'lucide-react';
import './Projects.css';

const github = 'https://github.com/shrutikumari18';
const projects = [
  { title: 'SYNEX GEN', description: 'A full-stack platform combining technology news, AI insights, events, Q&A, careers and hackathons in one practical experience.', tags: ['React', 'Node.js', 'AI'], github: 'https://github.com/HimanshuRajGiri/SYNEX_GEN', icon: <Globe size={19} /> },
  { title: 'Gesture & Face Recognition', description: 'A computer-vision system for real-time gesture and face recognition using camera input and touch-free interaction.', tags: ['Python', 'OpenCV', 'MediaPipe'], github: `${github}/GestureFace_Control`, icon: <Cpu size={19} /> },
  { title: 'IPL Power BI Dashboard', description: 'An interactive dashboard exploring IPL matches, teams, players, venues, seasons and performance trends.', tags: ['Power BI', 'DAX', 'Data Analytics'], github: `${github}/IPL_Data_Analysis_Dashboard`, icon: <BarChart3 size={19} /> },
  { title: 'Loan Approval Prediction', description: 'A machine-learning model that predicts loan approval from financial and asset-related applicant features.', tags: ['Python', 'ML', 'Decision Tree'], github: `${github}/LoanApproval_Prediction-Decision_Tree_`, icon: <Code2 size={19} /> },
];

function ProjectCard({ project }) {
  return <article className="project-card glass-card">
    <div className="project-card-icon">{project.icon}</div>
    <h3 className="project-card-title">{project.title}</h3>
    <p className="project-card-desc">{project.description}</p>
    <div className="project-tags">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
    <div className="project-links">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open ${project.title} on GitHub`}><Code2 size={15} /> GitHub <ExternalLink size={12} /></a>
    </div>
  </article>;
}

export default function Projects() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: 0.06 });
    sectionRef.current?.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <section id="projects" ref={sectionRef}><div className="container">
    <div className="section-header reveal"><div className="section-label">Portfolio</div><h2 className="section-title">My Projects</h2><p className="section-subtitle">A few projects I have built across data, AI and web development.</p></div>
    <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
    <div className="projects-profile-link"><a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Code2 size={16} /> Want to view all projects? <ExternalLink size={14} /></a></div>
  </div></section>;
}
