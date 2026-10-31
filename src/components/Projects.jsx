import { useEffect, useRef } from 'react';
import { BarChart3, BrainCircuit, Code2, ExternalLink, Globe, Layers, MessageSquare, Repeat, Shield } from 'lucide-react';
import './Projects.css';

const github = 'https://github.com/shrutikumari18';

const majorProjects = [
  {
    id: 'synex-gen',
    title: 'SYNEX GEN',
    subtitle: 'Full-Stack Collaborative Platform',
    description:
      'A full-stack collaborative platform combining technology news, AI insights, events, Q&A, careers and hackathons in one seamless experience. Built with a scalable REST API backend and a dynamic React frontend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'AI'],
    icon: <Globe size={22} />,
    color: '#7c6af7',
    github: 'https://github.com/HimanshuRajGiri/SYNEX_GEN',
    live: null,
    category: 'Software Engineering',
  },
  {
    id: 'pragatidrishti',
    title: 'Pragatidrishti',
    subtitle: 'AI-Powered Civic-Tech Governance Platform',
    description:
      'A civic-tech platform enhancing transparency in public fund allocation and project monitoring. Features real-time geo-tracking, AI-based anomaly detection, fund-flow visualization, and citizen reporting modules.',
    tags: ['React', 'Node.js', 'Python', 'ML', 'PostgreSQL', 'Maps API'],
    icon: <Shield size={22} />,
    color: '#f472b6',
    github: `${github}`,
    live: null,
    category: 'Data Science + SWE',
  },
];

const miniProjectsSWE = [
  {
    id: 'url-shortener',
    title: 'URL Shortener API',
    subtitle: 'REST API Service',
    description: 'A full REST API for shortening URLs with redirect tracking, click analytics, and expiry support. Built with Node.js, Express and MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    icon: <Repeat size={19} />,
    color: '#34d399',
    github: `${github}`,
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat App',
    subtitle: 'WebSocket Application',
    description: 'A real-time group chat application with room-based messaging, online user tracking and instant message delivery powered by Socket.io.',
    tags: ['React', 'Socket.io', 'Node.js', 'Express'],
    icon: <MessageSquare size={19} />,
    color: '#60a5fa',
    github: `${github}`,
  },
  {
    id: 'dsa-tracker',
    title: 'DSA Problem Tracker',
    subtitle: 'Productivity Web App',
    description: 'A web app to track solved DSA problems with difficulty tags, topic filtering, notes, and progress visualization. Built with React and localStorage.',
    tags: ['React', 'JavaScript', 'LocalStorage', 'CSS'],
    icon: <Layers size={19} />,
    color: '#fbbf24',
    github: `${github}`,
  },
];

const miniProjectsDS = [
  {
    id: 'gesture-recognition',
    title: 'Gesture & Face Recognition',
    subtitle: 'Computer Vision System',
    description: 'A computer-vision system for real-time gesture and face recognition using camera input and touch-free interaction with MediaPipe and OpenCV.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'CV'],
    icon: <BrainCircuit size={19} />,
    color: '#a78bfa',
    github: `${github}/GestureFace_Control`,
  },
  {
    id: 'ipl-dashboard',
    title: 'IPL Power BI Dashboard',
    subtitle: 'Interactive Analytics Dashboard',
    description: 'An interactive dashboard exploring IPL matches, teams, players, venues, seasons and performance trends using DAX measures and Power BI visuals.',
    tags: ['Power BI', 'DAX', 'Data Analytics', 'SQL'],
    icon: <BarChart3 size={19} />,
    color: '#fb923c',
    github: `${github}/IPL_Data_Analysis_Dashboard`,
  },
  {
    id: 'loan-approval',
    title: 'Loan Approval Prediction',
    subtitle: 'ML Model Comparison',
    description: 'A machine-learning project predicting loan approval from financial and asset features. Implements and compares 4 ML algorithms for accuracy benchmarking.',
    tags: ['Python', 'Scikit-learn', 'Decision Tree', 'ML'],
    icon: <Code2 size={19} />,
    color: '#f472b6',
    github: `${github}/LoanApproval_Prediction-Decision_Tree_`,
  },
];

function MajorCard({ project }) {
  return (
    <article className="major-project-card glass-card reveal">
      <div className="major-project-icon" style={{ '--proj-color': project.color }}>
        {project.icon}
      </div>
      <div className="major-project-body">
        <span className="project-category-badge">{project.category}</span>
        <h3 className="major-project-title">{project.title}</h3>
        <p className="major-project-subtitle">{project.subtitle}</p>
        <p className="major-project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="major-project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" id={`${project.id}-github`}>
              <Code2 size={15} /> Source Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id={`${project.id}-live`}>
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function MiniCard({ project }) {
  return (
    <article className="mini-project-card glass-card reveal" style={{ '--proj-color': project.color }}>
      <div className="mini-card-top">
        <div className="mini-card-icon">{project.icon}</div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label={`Source code for ${project.title}`}>
          <Code2 size={15} />
        </a>
      </div>
      <h3 className="mini-card-title">{project.title}</h3>
      <p className="mini-card-subtitle">{project.subtitle}</p>
      <p className="mini-card-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A mix of software engineering and data science projects — from scalable full-stack apps to ML models and analytics dashboards.
          </p>
        </div>

        {/* ── Major Projects ── */}
        <h3 className="projects-category-title reveal">Major Projects</h3>
        <div className="major-projects-list">
          {majorProjects.map(p => <MajorCard key={p.id} project={p} />)}
        </div>

        {/* ── Mini: Software Engineering ── */}
        <h3 className="projects-category-title reveal" style={{ marginTop: '3rem' }}>
          Mini Projects — <span className="category-accent swe">Software Engineering</span>
        </h3>
        <div className="projects-grid">
          {miniProjectsSWE.map(p => <MiniCard key={p.id} project={p} />)}
        </div>

        {/* ── Mini: Data Science ── */}
        <h3 className="projects-category-title reveal" style={{ marginTop: '3rem' }}>
          Mini Projects — <span className="category-accent ds">Data Science</span>
        </h3>
        <div className="projects-grid">
          {miniProjectsDS.map(p => <MiniCard key={p.id} project={p} />)}
        </div>

        {/* GitHub Profile Link */}
        <div className="projects-profile-link reveal">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Code2 size={16} /> View all projects on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
