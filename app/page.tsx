import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { focusAreas, principles, projects, toolkit } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Open to building good things
            </p>
            <h1 id="hero-title">
              Rex Makusia
              <br />
              <em>Full-stack</em>
              <br />
              Developer<span className="title-period">.</span>
            </h1>
            <p className="hero-intro">
              I turn practical problems into clear, dependable software. From a useful interface to
              the systems behind it, I like making the whole thing work.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="#projects">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="https://github.com/rex-makusia">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="hero-stack">React · Firebase · Go</p>
          </Reveal>
          <Reveal className="hero-art" delay={0.12}>
            <div className="art-topline">
              <span>FIELD NOTES / 001</span>
              <span>IDEA TO IMPACT</span>
            </div>
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-core">
              <span aria-hidden="true">✳</span>
              <span>
                build
                <br />
                with intent
              </span>
            </div>
            <span className="art-node art-node-one">01 <b>think</b></span>
            <span className="art-node art-node-two">02 <b>make</b></span>
            <span className="art-node art-node-three">03 <b>refine</b></span>
            <span className="art-coordinate">SYSTEMS / PEOPLE / DETAILS</span>
          </Reveal>
          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <span className="index-line" />
            <span>PORTFOLIO</span>
          </div>
        </section>

        <section className="about section-band" id="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <div className="section-label">
              <span>01</span>
              <span>ABOUT</span>
            </div>
            <Reveal className="about-main">
              <h2 id="about-title">
                Curious by nature.
                <br />
                <em>Practical by design.</em>
              </h2>
              <p className="about-copy">
                I’m a full-stack developer who enjoys connecting the details: thoughtful interfaces,
                reliable data, and backend systems that make a product useful. I learn by building,
                testing ideas, and improving the real thing.
              </p>
              <div className="focus-row">
                <span className="focus-label">CURRENTLY EXPLORING</span>
                {focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </Reveal>
            <aside className="about-aside" aria-label="Tools and technologies">
              <span className="aside-caption">MY EVERYDAY TOOLKIT</span>
              <ul className="tool-list">
                {toolkit.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <p>Different tools for different problems. Always learning what fits best.</p>
            </aside>
          </div>
        </section>

        <section className="projects shell" id="projects" aria-labelledby="projects-title">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I’VE BEEN MAKING</p>
              <h2 id="projects-title">
                Selected projects<span className="title-period">.</span>
              </h2>
            </div>
            <span className="section-count">03 / WORKS IN PROGRESS</span>
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="approach section-band" id="approach" aria-labelledby="approach-title">
          <div className="shell approach-layout">
            <div className="section-label">
              <span>02</span>
              <span>APPROACH</span>
            </div>
            <Reveal className="approach-main">
              <p className="eyebrow">HOW I LIKE TO WORK</p>
              <h2 id="approach-title">
                Make it useful.
                <br />
                <em>Make it understandable.</em>
              </h2>
              <p className="approach-copy">
                Good software isn’t just the code. It’s the experience around it: clear interactions,
                sensible structure, and enough care to make the next change easier.
              </p>
            </Reveal>
            <div className="principles">
              {principles.map((principle, index) => (
                <Reveal className="principle" key={principle.title} delay={index * 0.07}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{principle.title}</b>
                  <p>{principle.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact" aria-labelledby="contact-title">
          <Reveal className="contact-content">
            <p className="contact-kicker">
              <span className="status-dot" aria-hidden="true" />
              HAVE A PROJECT IN MIND?
            </p>
            <div className="contact-layout">
              <h2 id="contact-title">
                Let’s make
                <br />
                <em>something matter.</em>
              </h2>
              <div className="contact-side">
                <p>
                  I’m always glad to meet people who care about building useful things. Find me on
                  GitHub and tell me what you’re working on.
                </p>
                <a
                  className="button button-light"
                  href="https://github.com/rex-makusia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <span>REX MAKUSIA / DEVELOPER</span>
              <span>
                BUILT WITH CURIOSITY <b aria-hidden="true">✳</b> 2026
              </span>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="footer shell">
        <a className="footer-mark" href="#top" aria-label="Back to top">
          RM<span>.</span>
        </a>
        <span>Thoughtful software, built one step at a time.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
