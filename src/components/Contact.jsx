import { useEffect, useRef, useState } from 'react';
import { Mail, Code2, Link2, Send, MapPin } from 'lucide-react';
import './Contact.css';

const socials = [
  { icon: <Code2 size={20} />, label: 'GitHub', href: 'https://github.com/shrutikumari18', id: 'contact-github' },
  { icon: <Link2 size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/shruti-kumari-a6a727291/', id: 'contact-linkedin' },
  { icon: <Code2 size={20} />, label: 'LeetCode', href: 'https://leetcode.com/u/shrutikumari1803/', id: 'contact-leetcode' },
  { icon: <Mail size={20} />, label: 'Email Me', href: 'mailto:shrutikumari18032005@gmail.com?subject=Let%27s%20connect', id: 'contact-email' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/shrutikumari18032005@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) throw new Error('Message could not be sent');

      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError('Message send nahi ho paya. Please email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let's Work<br />Together</h2>
            <p className="contact-body">
              Have a project in mind, a role to fill, or just want to connect?
              My inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className="contact-info-row">
              <div className="contact-info-icon"><MapPin size={16} /></div>
              <span>India — Available Remote Worldwide</span>
            </div>

            <div className="contact-socials">
              {socials.map(s => (
                <a key={s.id} id={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label={s.label}>
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right reveal">
            <form className="contact-form glass-card" onSubmit={handleSubmit} id="contact-form">
              <h3 className="form-title">Send a Message</h3>

              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Shruti"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" id="send-message-btn" className={`btn btn-primary form-submit ${sent ? 'sent' : ''}`} disabled={sending}>
                {sent ? '✓ Message Sent!' : sending ? 'Sending...' : <><Send size={15} />Send Message</>}
              </button>
              {error && <p className="form-error" role="alert">{error} <a href="mailto:shrutikumari18032005@gmail.com">Email directly</a></p>}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-name gradient-text">Shruti</span>
          <a className="footer-email" href="mailto:shrutikumari18032005@gmail.com?subject=Let's%20connect">Email Me</a>
          <span className="footer-copy">© {new Date().getFullYear()} · Built with React & ❤️</span>
        </div>
      </footer>
    </section>
  );
}
