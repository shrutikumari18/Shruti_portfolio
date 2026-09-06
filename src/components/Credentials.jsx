import { createElement, useEffect, useRef } from 'react';
import { Award, BadgeCheck, BarChart3, ExternalLink, FolderKanban, ShieldCheck, Trophy } from 'lucide-react';
import './Credentials.css';

const certifications = [
  { icon: BarChart3, title: 'Data Analyst Bootcamp', detail: 'Udemy — from basic to advanced level', href: 'https://drive.google.com/file/d/1fm_ArOV6mlwVoiclOGgh8hhxaK2aGEI7/view?usp=drive_link' },
  { icon: Award, title: 'Data Science, ML, DL & NLP Bootcamp', detail: 'Udemy comprehensive learning bootcamp', href: 'https://drive.google.com/file/d/1ToLYNuDpLjYmwSHPs6Z94wEYe4ffMFOB/view?usp=drive_link' },
  { icon: BarChart3, title: 'Data Structures Certificate', detail: 'Udemy learning credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/data%20structure%20-%20udemy.jpeg' },
  { icon: FolderKanban, title: 'Full-Stack Development Certificate', detail: 'Udemy web development credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/fullstack%20-%20udemy.jpeg' },
  { icon: BadgeCheck, title: 'Introduction to Data Science', detail: 'Cisco Networking Academy', href: 'https://drive.google.com/file/d/11iI3UnroRCIwxUt4ntGTGDepizG9jf4k/view?usp=drive_link' },
  { icon: ShieldCheck, title: 'PHP & MySQL Peer Learning', detail: 'Organized by SIET', href: 'https://drive.google.com/file/d/19erClsbUAB05HFPwFScIiEnalkktol8J/view?usp=sharing' },
  { icon: Award, title: 'E-Certificate', detail: 'Certificate repository credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/E-certificate.pdf' },
  { icon: Trophy, title: 'Bhartiya Antariksha Hackathon 2025', detail: 'Certificate of acknowledgement', href: 'https://www.linkedin.com/posts/shruti-kumari-a6a727291_isro-hackathon-spacetechnology-activity-7386748912075829248-slL2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbDuzIBEfbKsOcUzM4KHgl3v9snL6YvP1M' },
  { icon: BadgeCheck, title: 'LCAT Participation Certificate', detail: 'Labmentix Common Aptitude Test', href: 'https://github.com/shrutikumari18/certificate/blob/main/LCAT_Certificate_Shruti_Kumari.pdf' },
  { icon: Award, title: 'AWS Certificate', detail: 'Cloud learning credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/E%20Certificate%20(1).pdf%20aws.pdf' },
  { icon: ShieldCheck, title: 'Cyber Security Certificate', detail: 'Cybersecurity learning credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/E-Certificate.pdf%20cyber%20security.pdf' },
  { icon: BadgeCheck, title: 'Data Science Certificate', detail: 'Data science learning credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/IntrotoDataScienceUpdate20260223-31-1szmzf.pdf' },
  { icon: Award, title: '56 Challenge Certificate', detail: 'Participation certificate', href: 'https://github.com/shrutikumari18/certificate/blob/main/56challange.pdf' },
  { icon: Trophy, title: 'Innovex Storm Certificate', detail: 'SRMIST Chennai participation certificate', href: 'https://github.com/shrutikumari18/certificate/blob/main/innovex%20storm%20%20SRMIST%20chennai.pdf' },
  { icon: ShieldCheck, title: 'Blockchain Certificate', detail: 'Blockchain learning credential', href: 'https://github.com/shrutikumari18/certificate/blob/main/shruti.blockchain.pdf' },
  { icon: Award, title: 'Technophilia Certificate', detail: 'Workshop participation certificate', href: 'https://github.com/shrutikumari18/certificate/blob/main/technophilia.pdf' },
  { icon: Trophy, title: 'SIH Internal Certificate', detail: 'Internal Smart India Hackathon certificate', href: 'https://drive.google.com/file/d/18jJRdt8fnrV8NOkQs2BX7FEBB8TDLQ7t/view?usp=sharing' },
  { icon: BarChart3, title: 'Kharagpur Data Science Hackathon', detail: 'Data Science project participation certificate', href: 'https://drive.google.com/file/d/1yXrXE49SFlzZuuUgpykwRPvyklzrScs4/view?usp=sharing' },
];
const achievements = [
  { icon: Trophy, value: 'Winner', label: 'Internal Smart India Hackathon 2025 — among 30+ teams and 180+ participants', href: 'https://drive.google.com/file/d/18jJRdt8fnrV8NOkQs2BX7FEBB8TDLQ7t/view?usp=sharing' },
  { icon: BadgeCheck, value: 'Final Pitch', label: 'Selected for Round 3 of Aarambh’26, The Innovation Challenge at DMS, IIT Delhi', href: 'https://www.linkedin.com/posts/shruti-kumari-a6a727291_innovation-iitdelhi-aarambh26-activity-7452276551850835968-dTmR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbDuzIBEfbKsOcUzM4KHgl3v9snL6YvP1M' },
  { icon: FolderKanban, value: 'Grand Finale', label: 'Shortlisted for the offline grand finale of HackCraft 3.0 at GITM Gurugram', href: 'https://drive.google.com/file/d/1ybHjwALVkn_pcreLnfMerbd6lrNd5k2K/view?usp=sharing' },
  { icon: Trophy, value: 'TenzorX 2026', label: 'Received a gift box as a token of appreciation in the National AI Hackathon', href: 'https://www.linkedin.com/posts/shruti-kumari-a6a727291_ai-hackathon-tenzorx-activity-7475891242992812033-bYuB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbDuzIBEfbKsOcUzM4KHgl3v9snL6YvP1M' },
  { icon: BarChart3, value: '85+ DSA', label: 'Solved LeetCode problems to strengthen data structures and problem-solving skills', href: 'https://leetcode.com/u/shrutikumari1803/' },
];
export default function Credentials() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <section id="credentials" ref={sectionRef} className="credentials-section"><div className="container">
    <div className="credentials-intro"><div className="section-label reveal">Credentials</div><h2 className="section-title reveal">Certifications &amp; Achievements</h2><p className="section-subtitle reveal">A focused learning path backed by hands-on work and a growing public portfolio.</p></div>
    <div className="credentials-grid">
      <div className="credentials-column"><div className="credentials-heading reveal"><span className="credentials-heading-icon"><Award size={18} /></span><div><h3>Certificates</h3><span>{certifications.length} learning credentials</span></div></div>
        <div className="certification-list">{certifications.map(({ icon: Icon, title, detail, href }) => <article className="certification-card glass-card reveal" key={title}><span className="certification-icon">{createElement(Icon, { size: 19 })}</span><div><h3>{title}</h3><p>{detail}</p>{href ? <a href={href} target="_blank" rel="noopener noreferrer">View certificate <ExternalLink size={13} /></a> : <span className="certification-source">Listed in resume</span>}</div></article>)}</div>
      </div>
      <div className="credentials-column"><div className="credentials-heading reveal"><span className="credentials-heading-icon achievements-icon"><Trophy size={18} /></span><div><h3>Achievements</h3><span>{achievements.length} highlights</span></div></div><div className="achievement-list">{achievements.map(({ icon: Icon, value, label, href }) => <article className="achievement-card glass-card reveal" key={value}>{createElement(Icon, { size: 21 })}<div className="achievement-content"><strong className="gradient-text">{value}</strong><p>{label}</p>{href ? <a className="achievement-link" href={href} target="_blank" rel="noopener noreferrer">View certificate <ExternalLink size={13} /></a> : <span className="achievement-source">Details in resume</span>}</div></article>)}</div></div>
    </div>
  </div></section>;
}
