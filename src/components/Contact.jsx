import { useState } from 'react';
import { Mail, Code2, Link2, Send } from 'lucide-react';
import './Contact.css';

const socials = [
  { icon: <Code2 size={20} />, label: 'GitHub', href: 'https://github.com/shrutikumari18', id: 'contact-github' },
  { icon: <Link2 size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/shruti-kumari-a6a727291/', id: 'contact-linkedin' },
  { icon: <Code2 size={20} />, label: 'LeetCode', href: 'https://leetcode.com/u/shrutikumari1803/', id: 'contact-leetcode' },
  { icon: <Mail size={20} />, label: 'Email Me', href: 'mailto:shrutikumari18032005@gmail.com?subject=Let%27s%20connect', id: 'contact-email' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/shrutikumari18032005@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Portfolio message from ${form.name}`, _template: 'table', _captcha: 'false' }),
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
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-simple">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <div className="contact-socials">
              {socials.map(s => (
                <a key={s.id} id={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label={s.label}>
                  {s.icon}
                  <span>{s.label === 'Email Me' ? 'Email' : s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit} id="contact-form">
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input id="name" name="name" type="text" className="form-input" placeholder="Shruti" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input id="email" name="email" type="email" className="form-input" placeholder="hello@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-input form-textarea" placeholder="Tell me about your project..." rows={4} value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className={`btn btn-primary form-submit ${sent ? 'sent' : ''}`} disabled={sending}>
              {sent ? 'Message Sent!' : sending ? 'Sending...' : <><Send size={15} />Send Message</>}
            </button>
            {error && <p className="form-error" role="alert">{error} <a href="mailto:shrutikumari18032005@gmail.com">Email directly</a></p>}
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-copy">© 2026 Shruti Kumari</span>
        </div>
      </footer>
    </section>
  );
}
