import { useEffect, useState } from 'react'
import * as Icons from 'lucide-react'
import {
  SiAppwrite, SiCplusplus, SiCss, SiDocker, SiExpress, SiGit, SiGithub,
  SiHtml5, SiJavascript, SiLeetcode, SiLinux, SiMongodb, SiMysql,
  SiNodedotjs, SiPostman, SiReact, SiRedis, SiSocketdotio, SiTailwindcss,
} from 'react-icons/si'
import { FaAws, FaLinkedin } from 'react-icons/fa6'
import { GrOracle } from 'react-icons/gr'
import { VscVscode } from 'react-icons/vsc'
import { personal, projects, skills } from './data'
import './App.css'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
const rotatingWords = ['web applications', 'useful products', 'scalable systems', 'digital experiences']
const technologyIcons = {
  SiAppwrite, SiCplusplus, SiCss, SiDocker, SiExpress, SiGit, SiGithub,
  SiHtml5, SiJavascript, SiLinux, SiMongodb, SiMysql, SiNodedotjs,
  SiPostman, SiReact, SiRedis, SiSocketdotio, SiTailwindcss,
  FaAws, FaLinkedin, GrOracle, VscVscode,
}
const technologyColors = {
  SiAppwrite: '#F02E65',
  SiCplusplus: '#00599C',
  SiCss: '#1572B6',
  SiDocker: '#2496ED',
  SiExpress: '#FFFFFF',
  SiGit: '#F05032',
  SiGithub: '#FFFFFF',
  SiHtml5: '#E34F26',
  SiJavascript: '#F7DF1E',
  SiLinux: '#FCC624',
  SiMongodb: '#47A248',
  SiMysql: '#4479A1',
  SiNodedotjs: '#5FA04E',
  SiPostman: '#FF6C37',
  SiReact: '#61DAFB',
  SiRedis: '#FF4438',
  SiSocketdotio: '#FFFFFF',
  SiTailwindcss: '#06B6D4',
  FaAws: '#FF9900',
  GrOracle: '#F80000',
  VscVscode: '#007ACC',
}
const socialIcons = {
  github: { Icon: SiGithub, color: '#FFFFFF', label: 'GitHub' },
  linkedin: { Icon: FaLinkedin, color: '#0A66C2', label: 'LinkedIn' },
  leetcode: { Icon: SiLeetcode, color: '#FFA116', label: 'LeetCode' },
}

function SkillIcon({ name }) {
  const Icon = technologyIcons[name] || Icons[name] || Icons.Code2
  return <Icon size={24} color={technologyColors[name] || '#C0C0C0'} aria-hidden="true" />
}

function SocialLinks({ className }) {
  return (
    <div className={className} aria-label="Social profiles">
      {Object.entries(socialIcons).map(([key, { Icon, color, label }]) => (
        <a key={key} href={personal[key]} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
          <Icon color={color} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

function SectionHeading({ label, title, intro }) {
  return (
    <header className="section-heading reveal">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

function ProjectPreview({ image, title }) {
  return (
    <div className="project-preview">
      <img src={image} alt={`${title} project screenshot`} loading="lazy" decoding="async" />
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [wordIndex, setWordIndex] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordVisible(false)
      window.setTimeout(() => {
        setWordIndex(index => (index + 1) % rotatingWords.length)
        setWordVisible(true)
      }, 300)
    }, 2700)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-35% 0px -55%' })
    navItems.forEach(name => {
      const section = document.getElementById(name.toLowerCase())
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Back to top">RUTIK RAUNDALE.</a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <a key={item} className={activeSection === item.toLowerCase() ? 'active' : ''} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a className="nav-resume" href={personal.resume} download><Icons.Download size={15} />Resume</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-content reveal">
            <p className="eyebrow">COMPUTER ENGINEERING · NASHIK, INDIA</p>
            <h1>Hello, I'm <span className="geo-regular-italic">Rutik.</span></h1>
            <p className="hero-secondary">I build digital experiences with purpose.</p>
            <p className="rotating-line">I enjoy building <span className={`rotating-word ${wordVisible ? 'visible' : ''}`}>{rotatingWords[wordIndex]}</span></p>
            <p className="hero-description">Final-year Computer Engineering student focused on full-stack development, backend engineering and solving real-world problems through software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore Projects <Icons.ArrowDown size={17} /></a>
              <a className="button button-secondary" href={personal.resume} download><Icons.Download size={17} /> Download Resume</a>
            </div>
            <SocialLinks className="social-row" />
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading label="ABOUT ME" title="A little about what I do." />
          <div className="about-grid reveal">
            <div>
              <p className="about-copy">I'm a final-year Computer Engineering student with hands-on experience building full-stack web applications and backend services. I enjoy working with JavaScript, Node.js, React and databases to develop practical solutions. Alongside development, I consistently practice data structures and algorithms using C++.</p>
              <div className="highlight-list">
                {['Computer Engineering', 'Full-stack development', 'Backend API integration', 'Problem-solving', 'Continuous learning'].map(item => (
                  <span key={item}><Icons.Check size={15} />{item}</span>
                ))}
              </div>
            </div>
            <aside className="academic-card">
              <p className="meta">EDUCATION · 2023 — PRESENT</p>
              <h3>B.E. Computer Engineering</h3>
              <p>MVP's KBT College of Engineering</p>
              <p>Savitribai Phule Pune University</p>
              <div className="cgpa"><span>CGPA</span><strong>8.25</strong><small>/10</small></div>
            </aside>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading label="TECHNICAL EXPERTISE" title="Tools I work with." />
          <div className="skills-grid reveal">
            {skills.map(group => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map(([name, icon]) => (
                    <div className="skill-item" key={name}>
                      <SkillIcon name={icon} />
                      <span>{name}</span>
                      {(name === 'Redis' || name === 'Docker') && <small>Learning</small>}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading label="SELECTED WORK" title="Things I've built." />
          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-info">
                  <p className="project-number">PROJECT / {project.number}</p>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="tech-row">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo <Icons.ArrowUpRight size={15} /></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer"><SiGithub size={15} aria-hidden="true" /> GitHub</a>}
                    {!project.live && !project.github && <span className="placeholder-link">Links not available</span>}
                  </div>
                </div>
                <ProjectPreview image={project.image} title={project.title} />
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading label="EXPERIENCE" title="Where I've worked." />
          <article className="experience-card reveal">
            <div className="experience-meta"><p className="meta">JAN 2026 — FEB 2026</p><p>Nashik, Maharashtra</p></div>
            <div className="experience-main">
              <h3>MERN Stack Developer Intern</h3>
              <p className="company">Uttirna Services LLP</p>
              <ul>
                <li>Integrated RESTful APIs and optimized backend middleware using Node.js and Express.js.</li>
                <li>Developed responsive React.js interfaces using reusable components and client-side routing.</li>
                <li>Worked with efficient state handling and frontend integration.</li>
                <li>Collaborated with stakeholders to support continuous solution delivery and software quality.</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="section compact-section" id="education">
          <SectionHeading label="EDUCATION" title="Academic foundation." />
          <div className="education-grid reveal">
            <article><p className="meta">2023 — PRESENT</p><h3>B.E. Computer Engineering</h3><p>MVP's KBT College of Engineering</p><p>Savitribai Phule Pune University</p><strong>CGPA 8.25/10</strong></article>
            <article><p className="meta">2023</p><h3>HSC</h3><p>Maharashtra State Board</p><strong>61.83%</strong></article>
            <article><p className="meta">2021</p><h3>SSC</h3><p>Maharashtra State Board</p><strong>90.60%</strong></article>
          </div>
        </section>

        <section className="section compact-section" id="achievements">
          <SectionHeading label="ACHIEVEMENTS & CERTIFICATIONS" title="Beyond the classroom." />
          <div className="achievement-grid reveal">
            <article><Icons.Code2 /><div><p className="meta">ACHIEVEMENT</p><h3>400+ DSA Problems</h3><p>Solved using C++ on LeetCode.</p></div></article>
            <article><Icons.Trophy /><div><p className="meta">HACKATHON</p><h3>Avinyathon Prototype</h3><p>Built an enterprise process automation system under strict deadlines.</p></div></article>
            <article><Icons.Cloud /><div><p className="meta">CERTIFICATION</p><h3>OCI 2025 Foundations</h3><p>Oracle Cloud Infrastructure Certified Foundations Associate.</p></div></article>
            <article><Icons.Cloud /><div><p className="meta">WORKSHOP</p><h3>AWS Cloud Computing</h3><p>IAM, EC2, S3, CloudWatch and auto scaling.</p></div></article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeading label="GET IN TOUCH" title="Have a project in mind?" intro="I'm always interested in discussing software development, interesting ideas and opportunities to build useful products." />
          <div className="contact-content reveal">
            <a className="contact-email" href={`mailto:${personal.email}`}>{personal.email} <Icons.ArrowUpRight /></a>
            <div className="contact-links">
              <a href={`tel:${personal.phone.replace(/\s/g, '')}`}><Icons.Phone size={16} /> {personal.phone}</a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"><SiGithub size={16} aria-hidden="true" /> GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={16} aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p>Rutik Raundale</p>
          <p>Designed and built with care.</p>
          <SocialLinks className="footer-social" />
          <small>© {new Date().getFullYear()}</small>
        </div>
      </footer>
    </>
  )
}

export default App
