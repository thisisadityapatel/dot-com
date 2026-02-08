import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container">
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Toggle theme"
        />
        <span className="slider"></span>
      </label>
      
      <h1>Aditya Patel</h1>
      
      <nav className="links">
        <a href="https://github.com/thisisadityapatel" target="_blank" rel="noopener noreferrer">github</a>
        <a href="https://linkedin.com/in/thisisadityapatel" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="https://blog.aditya-patel.com" rel="noopener noreferrer">blog <span className="dot-ripple">●</span>
        </a>
      </nav>

      <p>
        Interested about developing distributed systems, solving optimization problems and building scalable backend infrastructure that stands up over time.
        I like challenging myself to do things I've never accomplished before and I strive to learn, build and engineer stuff.
      </p>

      <p>
        Currently improving on my golf swing, picked up bouldering and halfway 
        into reading <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" target="_blank" rel="noopener noreferrer">Designing Data-Intensive Applications</a>. 
        I'll also try to document more of my thoughts and ideas on this <a href="https://blog.aditya-patel.com" target="_blank" rel="noopener noreferrer">blog</a> in the future.</p>

      <p className="email">
        email me: adityakdpatel[at]gmail[dot]com
      </p>

      <section className="section">
        <h3 class="experience-header">Work</h3>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Software Engineer Intern</h3>
              <p className="company">
                <a href="https://www.wealthsimple.com/en-ca" target="_blank" rel="noopener noreferrer">
                  Wealthsimple
                </a> — Distributed Trading Systems
              </p>
            </div>
            <span className="date">may 2025 — dec 2025</span>
          </div>
          <p className="tech-stack">python, sql, temporal, aws, kubernetes, docker, airflow</p>
        </article>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Software Engineer Intern</h3>
              <p className="company">
                <a href="https://www.wealthsimple.com/en-ca" target="_blank" rel="noopener noreferrer">
                  Wealthsimple
                </a> — Order Generation
              </p>
            </div>
            <span className="date">may 2024 — aug 2024</span>
          </div>
          <p className="tech-stack">python, ruby on rails, react, graphql, aws</p>
        </article>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Software Engineer Intern</h3>
              <p className="company">
                <a href="https://rbcborealis.com/" target="_blank" rel="noopener noreferrer">
                  RBC Borealis AI
                </a> — ML & Data Platform
              </p>
            </div>
            <span className="date">may 2023 — apr 2024</span>
          </div>
          <p className="tech-stack">python, c++, spark, kafka, airflow, tensorflow, aws, langchain</p>
        </article>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Trading Floor Software Developer Intern</h3>
              <p className="company">
                <a href="https://www.gbm.scotiabank.com/en.html" target="_blank" rel="noopener noreferrer">
                  Scotiabank Capital Markets
                </a> — Trade Desk Tooling
              </p>
            </div>
            <span className="date">may 2022 — aug 2022</span>
          </div>
          <p className="tech-stack">c#, sql, javascript</p>
        </article>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Lead Full Stack Developer</h3>
              <p className="company">Stealth Startup</p>
            </div>
            <span className="date">aug 2021 — feb 2022</span>
          </div>
          <p className="tech-stack">java spring, react, typescript, terraform, aws</p>
        </article>
      </section>
      <section className="section">
        <h3 className="experience-header">Projects</h3>

        <article className="project">
          <p className="project-description">
            <strong>kepler</strong> — LLM inference workbench orchestrating containerized llama.cpp (Docker) for benchmarking and evaluating models on GPU/CPU.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/kepler" target="_blank" rel="noopener noreferrer">link</a> — python, llama.cpp, docker
          </p>
        </article>

        <article className="project">
          <p className="project-description">
            <strong>botblitz</strong> — C++ game engine with OpenGL-based graphics pipeline for object modeling & real-time physics simulations.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/botblitz" target="_blank" rel="noopener noreferrer">link</a> — c++, opengl
          </p>
        </article>

        <article className="project">
          <p className="project-description">
            <strong>deskgenius</strong> — Got bored on a 14 hour flight (Toronto - Mumbai), ended up building this 3D desktop setup visulization tool out of boredom.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/deskgenius" target="_blank" rel="noopener noreferrer">link</a> — react, three fiber, mathematical vector calculations
          </p>
        </article>

        <article className="project">
          <p className="project-description">
            <strong>just-servers</strong> — Low-level Go network servers (TCP/UDP network protocol), Terraform orchestrated on AWS EC2.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/just-servers" target="_blank" rel="noopener noreferrer">link</a> — go, terraform, aws, networking
          </p>
        </article>
      </section>

      <footer className="footer">
        <p className="footer-text">
          <span className="dot-ripple">●</span> Checkout what my folks <a href="https://www.nish7.io/" target="_blank" rel="noopener noreferrer">Nishil</a> & <a href="https://www.linkedin.com/in/neelfaganiya/" target="_blank" rel="noopener noreferrer">Neel</a> are up to.
        </p>
        <div className="footer-links">
          <span>© {new Date().getFullYear()}</span>
          <a href="https://github.com/thisisadityapatel" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/thisisadityapatel" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://blog.aditya-patel.com" target="_blank" rel="noopener noreferrer">blog</a>
        </div>
      </footer>
    </div>
  )
}

export default App
