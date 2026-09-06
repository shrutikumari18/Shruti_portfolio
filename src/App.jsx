import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Projects from './components/Projects';
import Resumes from './components/Resumes';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Credentials />
        <Projects />
        <Resumes />
        <Contact />
      </main>
    </>
  );
}

export default App;
