import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Get system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  const [theme, setTheme] = useState(getSystemTheme)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

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
      
      <h1>Aditya</h1>
      
      <nav className="links">
        <a href="https://github.com/thisisadityapatel" target="_blank" rel="noopener noreferrer">github</a>
        <a href="https://linkedin.com/in/thisisadityapatel" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="https://blog.aditya-patel.com" rel="noopener noreferrer">blog <span className="dot-ripple">●</span>
        </a>
      </nav>

      <p>
        Interested about developing distributed systems, solving optimization problems and building scalable backend infrastructure that stands up over time.
      </p>

      <p>
        Currently improving on my golf swing, picked up bouldering and halfway 
        into reading <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" target="_blank" rel="noopener noreferrer">Designing Data-Intensive Applications</a>. 
        I'll also try to document more of my thoughts and ideas on this <a href="https://blog.aditya-patel.com" target="_blank" rel="noopener noreferrer">blog</a> in the future.</p>

      <div className="email">
        <span>email me: adityakdpatel[at]gmail[dot]com</span>
      </div>

      <section className="section">
        <h3 class="experience-header">Work</h3>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Software Engineering</h3>
              <p className="company">
                <a href="https://www.wealthsimple.com/en-ca" target="_blank" rel="noopener noreferrer">
                  Wealthsimple
                </a> — Distributed Algorithmic Trading Systems
              </p>
            </div>
            <span className="date">may 2025 — present</span>
          </div>
          <p className="tech-stack">python, sql, temporal, aws, kubernetes, docker, airflow</p>
        </article>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Software Engineering</h3>
              <p className="company">
                <a href="https://www.wealthsimple.com/en-ca" target="_blank" rel="noopener noreferrer">
                  Wealthsimple
                </a> — Order Generation Systems
              </p>
            </div>
            <span className="date">may 2024 — aug 2024</span>
          </div>
          <p className="tech-stack">python, ruby on rails, react, graphql, aws</p>
        </article>

        <article className="job">
          <div className="job-header">
            <div>
              <h3>Machine Learning Software Engineer</h3>
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
              <h3>Trading Desk Software Developer</h3>
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
              <h3>Member of Technical Staff - Platform Engineering</h3>
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
            <strong>kepler</strong> — LLM inference benchmarking CLI orchestrating containerized inference engines via Docker across macOS Metal GPUs.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/kepler" target="_blank" rel="noopener noreferrer">link</a> — python, llama.cpp, docker
          </p>
        </article>

        <article className="project">
          <p className="project-description">
            <strong>botblitz</strong> — C++ game engine with opengl-based graphics pipeline for object modeling & physics simulations.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/botblitz" target="_blank" rel="noopener noreferrer">link</a> — c++, opengl
          </p>
        </article>

        <article className="project">
          <p className="project-description">
            <strong>deskgenius</strong> — Got bored on a flight (toronto - mumbai), ended up building a 3D rendering tool for desktop visualization.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/deskgenius" target="_blank" rel="noopener noreferrer">link</a> — react, three fiber, mathematical vector calculations
          </p>
        </article>

        <article className="project">
          <p className="project-description">
            <strong>just-servers</strong> — Low level Golang network servers (tcp/udp network protocol), Terraform orchestrated on AWS EC2.
          </p>
          <p className="project-link">
            <a href="https://github.com/thisisadityapatel/just-servers" target="_blank" rel="noopener noreferrer">link</a> — go, terraform, aws, networking
          </p>
        </article>
      </section>

      <footer className="footer">
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
