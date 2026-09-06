import { useEffect, useRef } from 'react';
import { BarChart3, Code2, Cpu, ExternalLink, Globe, Layers, Map, Shield } from 'lucide-react';
import './Projects.css';

const github = 'https://github.com/shrutikumari18';
const icon = { data: <BarChart3 size={19} />, ml: <Cpu size={19} />, full: <Globe size={19} />, other: <Code2 size={19} /> };
const colours = { data: '#fbbf24', ml: '#f472b6', full: '#60a5fa', other: '#a78bfa' };
const descriptions = {
  'IPL Analysis Dashboard': 'Interactive Power BI analysis of IPL matches, teams, players, venues, seasons, and performance trends.',
  'Blinkit Analysis Dashboard': 'A Power BI dashboard that turns Blinkit data into clear business and performance insights.',
  'Data Analyst Series': 'A hands-on Python series exploring data-analysis libraries and their practical implementation.',
  'Student Course Management': 'A SQL-based system for structured student, course, and database record management.',
  KAYAK: 'A React hospital-intelligence dashboard for tracking patient data, wait times, staff activity, and alerts.',
  'AI Chatbot': 'A web chatbot built with Flask and the OpenAI API, featuring a responsive interface and secure key handling.',
  'AI Chatbot Terminal': 'A lightweight Python terminal chatbot demonstrating conversational AI interactions.',
  'Email Spam Detection': 'An NLP classifier that labels messages as spam or ham using Multinomial Naive Bayes.',
  'Loan Approval Comparison': 'A comparison of Decision Tree, Random Forest, Logistic Regression, and KNN for loan approval prediction.',
  'Loan Approval Prediction': 'A Decision Tree model that predicts loan approval from financial and asset-related features.',
  'IRIS Classification': 'A supervised machine-learning model trained and evaluated on the classic IRIS dataset.',
  'NLP with Shruti': 'A learning repository documenting NLP projects, experiments, and code practice.',
  'AI Bank Management': 'An AI-focused banking-management project repository.',
  'Complaint Box': 'A Flask and MySQL web app for user registration, complaint submission, and admin review.',
  'Library Management': 'A responsive React interface for managing books, members, and issue/return records.',
  'Shruti Portfolio': 'A personal portfolio website showcasing projects, skills, and professional interests.',
  RealtimeMap: 'A React mapping platform that visualizes project locations through dynamic markers and map data.',
  'Computer Science Quiz': 'A terminal quiz for Python, DSA, OS, DBMS, and Computer Networks using API-fetched questions.',
  Notepad: 'A browser notes app with create, search, edit, and delete features.',
  Calculator: 'A frontend calculator for basic arithmetic operations and live result display.',
};

const majorProjects = [
  { id: 'synex-gen', title: 'SYNEX_GEN', subtitle: 'Collaborative technology platform', description: 'A collaborative hub for technology news, AI insights, events, Q&A, careers, hackathons, and interactive experiences.', tags: ['React', 'Node.js', 'AI'], github: 'https://github.com/HimanshuRajGiri/SYNEX_GEN', type: 'full', icon: <Layers size={19} /> },
  { id: 'gesture-face', title: 'Gesture & Face Control', subtitle: 'Touch-free computer vision control', description: 'A real-time gesture and face-recognition system for touch-free controls, camera processing, and API-based actions.', tags: ['Python', 'OpenCV', 'MediaPipe'], github: `${github}/GestureFace_Control`, type: 'ml', icon: <Cpu size={19} /> },
  { id: 'pragati', title: 'PragatiDrishti', subtitle: 'Civic-tech transparency platform', description: 'A role-based public-infrastructure platform for citizen reporting, fund tracking, project updates, and audit alerts.', tags: ['React', 'Vite', 'Context API'], github: `${github}/PragatiDrishti`, type: 'full', icon: <Map size={19} /> },
];

const projectGroups = [
  {
    title: 'Data Science & Analytics', type: 'data',
    projects: [
      { title: 'IPL Analysis Dashboard', tags: ['Power BI', 'DAX'], github: `${github}/IPL_Data_Analysis_Dashboard` },
      { title: 'Blinkit Analysis Dashboard', tags: ['Power BI', 'Analytics'], github: `${github}/Blinkit_Analysis_Dashboard` },
      { title: 'Data Analyst Series', tags: ['Python', 'Pandas'], github: `${github}/DataAnalyst_series_with_Shruti` },
      { title: 'Student Course Management', tags: ['SQL', 'DBMS'], github: `${github}/Student_Course_Management_System` },
      { title: 'KAYAK', tags: ['React', 'Hospital Analytics'], github: `${github}/KAYAK` },
    ],
  },
  {
    title: 'AI & Machine Learning', type: 'ml',
    projects: [
      majorProjects[1],
      { title: 'AI Chatbot', tags: ['Python', 'Flask', 'OpenAI API'], github: `${github}/Chatbot` },
      { title: 'AI Chatbot Terminal', tags: ['Python', 'Conversational AI'], github: `${github}/AIchatbot-TERMINAL` },
      { title: 'Email Spam Detection', tags: ['Python', 'NLP', 'Naive Bayes'], github: `${github}/Email_Spam_Detection` },
      { title: 'Loan Approval Comparison', tags: ['Scikit-learn', 'ML'], github: `${github}/LoanApproval_Model_Comparison` },
      { title: 'Loan Approval Prediction', tags: ['Decision Tree', 'Python'], github: `${github}/LoanApproval_Prediction-Decision_Tree_` },
      { title: 'IRIS Classification', tags: ['Python', 'Scikit-learn'], github: `${github}/IRIS_classification` },
      { title: 'NLP with Shruti', tags: ['NLP', 'Jupyter'], github: `${github}/NLP_with_Shruti` },
      { title: 'AI Bank Management', tags: ['AI', 'Banking'], github: `${github}/AI_powered_Bank_Management_System` },
    ],
  },
  {
    title: 'Full-Stack Development', type: 'full',
    projects: [
      majorProjects[0],
      majorProjects[2],
      { title: 'Complaint Box', tags: ['Flask', 'MySQL'], github: `${github}/Complaint_Box`, icon: <Shield size={19} /> },
      { title: 'Library Management', tags: ['React', 'JavaScript'], github: `${github}/Library_Management_System`, icon: <Layers size={19} /> },
      { title: 'Shruti Portfolio', tags: ['Portfolio', 'Web'], github: `${github}/Shruti_portfolio` },
    ],
  },
  {
    title: 'Other Projects', type: 'other',
    projects: [
      { title: 'RealtimeMap', tags: ['React', 'Maps API'], github: `${github}/RealtimeMap`, icon: <Globe size={19} /> },
      { title: 'Computer Science Quiz', tags: ['Python', 'APIs'], github: `${github}/Computer_Science_Quiz` },
      { title: 'Notepad', tags: ['HTML', 'CSS', 'JavaScript'], github: `${github}/Notepad` },
      { title: 'Calculator', tags: ['HTML', 'CSS', 'JavaScript'], github: `${github}/Calculator` },
    ],
  },
];

function ProjectCard({ project, type, major = false }) {
  const projectType = project.type || type;
  return <article className={`project-card glass-card ${major ? 'major-project-card' : ''}`} style={{ '--proj-color': colours[projectType] }}>
    <div className="project-card-icon">{project.icon || icon[projectType]}</div>
    <h3 className="project-card-title">{project.title}</h3>
    {project.subtitle && <p className="project-card-subtitle">{project.subtitle}</p>}
    {major && <p className="major-project-description">{project.description}</p>}
    {!major && <p className="project-card-desc">{project.description || descriptions[project.title]}</p>}
    <div className="project-tags">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
    {major ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline major-project-link" aria-label={`View ${project.title} source code on GitHub`}><Code2 size={14} /> View Project <ExternalLink size={13} /></a> : <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label={`Open ${project.title} on GitHub`}><Code2 size={15} /><ExternalLink size={12} /></a>}
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
    <div className="section-header projects-section-header reveal"><div><div className="section-label">Portfolio</div><h2 className="section-title">My Projects</h2><p className="section-subtitle">Data analytics, AI/ML, and full-stack applications built from real problems.</p></div><div className="projects-count"><strong className="gradient-text">15+</strong><span>Projects Built</span></div></div>
    <h3 className="projects-category-title reveal">Major Projects</h3>
    <div className="projects-grid major-projects-grid reveal">{majorProjects.map((project) => <ProjectCard key={project.id} project={project} type={project.type} major />)}</div>
    <div className="mini-projects-heading reveal"><span>Mini Projects</span><p>More work, grouped by domain.</p></div>
    {projectGroups.map((group) => <div className="project-group" key={group.title}><h3 className="projects-category-title reveal">{group.title}</h3><div className="projects-grid">{group.projects.map((project) => <ProjectCard key={project.github} project={project} type={group.type} />)}</div></div>)}
    <div className="projects-profile-link reveal"><a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Code2 size={16} /> View GitHub profile <ExternalLink size={14} /></a></div>
  </div></section>;
}
