import { Icon } from "@/components/Icon";
import { Sidebar } from "@/components/Sidebar";
import { experiences, projects, publications, skillGroups } from "@/data/portfolio";

function ProjectIcon({ type }: { type: "maze" | "vision" | "mobile" | "web" }) {
  return <Icon name={type} size={25} />;
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <Sidebar />
      <main className="main-content">
        <section className="hero section-anchor" id="home">
          <div className="hero-copy">
            <p className="terminal-line"><span>&gt;</span> HELLO, WORLD!<i className="terminal-cursor" /></p>
            <p className="eyebrow hero-eyebrow">COMPUTER SCIENCE GRADUATE <span>·</span> SOFTWARE DEVELOPMENT &amp; AI</p>
            <h1>Marijana<br /><span>Bandić</span></h1>
            <p className="hero-description">
              I like solving problems, building things and exploring how technology can make them better.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow-right" size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <Icon name="arrow-up-right" size={16} /></a>
            </div>
            <div className="hero-meta">
              <span className="status-pulse" />
              <span>PORTFOLIO / 2026</span>
              <span className="meta-divider">/</span>
              <span>GORNJI VAKUF–USKOPLJE, BIH</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract purple geometric illustration" role="img">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-grid" />
            <div className="cube cube-back"><span /></div>
            <div className="cube cube-front"><span /></div>
            <div className="cube cube-small"><span /></div>
            <div className="visual-cross cross-one">+</div>
            <div className="visual-cross cross-two">+</div>
            <div className="visual-label"><span className="label-dot" /> BUILDING / LEARNING / EXPLORING</div>
            <div className="visual-index">MB — 001</div>
          </div>
          <a className="hero-scroll" href="#overview"><span>SCROLL DOWN</span><Icon name="chevron-down" size={15} /></a>
        </section>

        <section className="overview section-anchor" id="overview" aria-label="Portfolio overview">
          <div className="overview-card">
            <div className="overview-icon"><Icon name="graduation" size={22} /></div>
            <div><span className="micro-label">EDUCATION</span><strong>Master's in Computer Science</strong><small>University of Mostar</small></div>
          </div>
          <div className="overview-card">
            <div className="overview-icon"><Icon name="code" size={22} /></div>
            <div><span className="micro-label">DEVELOPMENT</span><strong>Software &amp; Applications</strong><small>Java · Python · Web</small></div>
          </div>
          <div className="overview-card">
            <div className="overview-icon"><Icon name="brain" size={22} /></div>
            <div><span className="micro-label">RESEARCH</span><strong>AI &amp; Algorithms</strong><small>Computer vision · Q-learning</small></div>
          </div>
        </section>

        <section className="content-section section-anchor" id="projects">
          <div className="section-heading">
            <div><p className="section-kicker">01 / SELECTED WORK</p><h2>Featured <span>projects</span></h2><p className="section-intro">A selection of academic, research and software development projects.</p></div>
            <span className="section-count">[{String(projects.length).padStart(2, "0")}] PROJECTS</span>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card${project.featured ? " project-featured" : ""}`} key={project.number}>
                <div className="project-card-top"><span className="project-number">/{project.number}</span><span className="project-year">{project.year}</span></div>
                <div className="project-symbol"><ProjectIcon type={project.icon} /></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
                <div className="project-link-row">
                  {project.link ? <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel ?? "Explore"}<Icon name="arrow-up-right" size={15} /></a> : <span className="link-muted">PROJECT OVERVIEW</span>}
                  <span className="card-corner">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section research-section section-anchor" id="research">
          <div className="section-heading">
            <div><p className="section-kicker">02 / KNOWLEDGE &amp; DISCOVERY</p><h2>Research <span>&amp; publications</span></h2><p className="section-intro">Research work, experiments and contributions to scientific publications.</p></div>
            <span className="section-count">[02] PUBLICATIONS</span>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-card" key={publication.title}>
                <div className="publication-index">0{index + 1}</div>
                <div className="publication-main">
                  <div className="publication-meta"><span>{publication.type}</span><span className={`publication-status${publication.status === "PUBLISHED" ? " published" : " accepted"}`}>{publication.status}</span></div>
                  <h3>{publication.title}</h3>
                  <p className="publication-authors">{publication.authors}</p>
                  <p className="publication-venue">{publication.venue}</p>
                  <p className="publication-details">{publication.details}</p>
                  {"note" in publication && publication.note && <p className="publication-note">{publication.note}</p>}
                  {"doi" in publication && publication.doi && <p className="publication-doi">DOI: {publication.doi}</p>}
                </div>
                <div className="publication-action">
                  {publication.href ? <a className="icon-link" href={publication.href} target="_blank" rel="noreferrer" aria-label={publication.action}><Icon name="arrow-up-right" size={19} /></a> : <span className="publication-pending">IN PROCEEDINGS</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section experience-section section-anchor" id="experience">
          <div className="section-heading">
            <div><p className="section-kicker">03 / PROFESSIONAL JOURNEY</p><h2>Experience <span>&amp; education</span></h2><p className="section-intro">Learning through academic work, internships and practical development.</p></div>
          </div>
          <div className="experience-layout">
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item" key={`${experience.role}-${experience.organization}`}>
                  <div className="timeline-marker" />
                  <div className="timeline-period">{experience.period}</div>
                  <div className="timeline-content"><h3>{experience.role}</h3><p className="timeline-org">{experience.organization}</p><p>{experience.description}</p></div>
                </article>
              ))}
            </div>
            <aside className="education-card">
              <div className="education-card-icon"><Icon name="graduation" size={25} /></div>
              <p className="section-kicker">EDUCATION</p>
              <h3>Computer Science</h3>
              <p className="education-level">Master's degree · 2024–2026</p>
              <p className="education-school">University of Mostar<br />Faculty of Mechanical Engineering, Computing and Electrical Engineering</p>
              <div className="education-divider" />
              <p className="education-level">Bachelor's degree · 2021–2024</p>
              <p className="education-school">University of Mostar</p>
            </aside>
          </div>
        </section>

        <section className="content-section about-section section-anchor" id="about">
          <div className="about-panel">
            <div className="about-copy">
              <p className="section-kicker">04 / A LITTLE ABOUT ME</p>
              <h2>Curious by nature.<br /><span>Driven by solutions.</span></h2>
              <p>I am a computer science graduate with an interest in software development, artificial intelligence and problem-solving. I enjoy understanding how things work, experimenting with ideas and turning them into practical solutions.</p>
              <p>My experience combines software projects, academic research and hands-on development across different technologies.</p>
            </div>
            <div className="skills-panel">
              <div className="skills-panel-heading"><span className="terminal-small">&lt;/&gt;</span><div><span className="micro-label">TOOLKIT</span><h3>Technologies &amp; interests</h3></div></div>
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}><h4>{group.label}</h4><div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-anchor" id="contact">
          <div className="contact-topline"><span className="section-kicker">05 / LET'S CONNECT</span><span className="contact-coordinate">CONTACT — 001</span></div>
          <h2>Have a project<br />in <span>mind?</span></h2>
          <p className="contact-description">I am always interested in meaningful projects, new ideas and opportunities to learn and contribute.</p>
          <a className="button button-primary contact-button" href="mailto:bandicm02@gmail.com">Say hello <Icon name="arrow-up-right" size={17} /></a>
          <div className="contact-footer"><a href="mailto:bandicm02@gmail.com">bandicm02@gmail.com</a><span>GORNJI VAKUF–USKOPLJE · BOSNIA &amp; HERZEGOVINA</span></div>
        </section>

        <footer className="site-footer"><a className="footer-brand" href="#home">MB<span>.</span></a><span>DESIGNED &amp; DEVELOPED BY MARIJANA BANDIĆ</span><a href="#home">BACK TO TOP ↑</a><span>© 2026</span></footer>
      </main>
    </div>
  );
}
