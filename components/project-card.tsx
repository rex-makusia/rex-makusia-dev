import type { Project } from "@/lib/portfolio";
import { Reveal } from "@/components/reveal";

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "inventory") {
    return (
      <div className="mock-window">
        <div className="mock-topbar">
          <span className="mock-brand"><i /> inventory</span>
          <span className="mock-avatar">TG</span>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar"><span /><span /><span /><span /></div>
          <div className="mock-dashboard">
            <div className="mock-greeting"><b>Overview</b><span>Workspace / Assets</span></div>
            <div className="mock-stats">
              <div><small>TOTAL ASSETS</small><b>1,284</b><i /></div>
              <div><small>REQUESTS</small><b>08</b><i /></div>
              <div><small>LOW STOCK</small><b>12</b><i /></div>
            </div>
            <div className="mock-table">
              <div className="table-head"><span>ASSET</span><span>STATUS</span><span>QTY</span></div>
              <div><i /><span>Laptop · ThinkPad X1</span><em>In stock</em><b>24</b></div>
              <div><i /><span>Display · UltraWide</span><em>In stock</em><b>16</b></div>
              <div><i /><span>Audio · Headset Pro</span><em>Low stock</em><b>04</b></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "gateway") {
    return (
      <div className="gateway-map">
        <div className="gateway-client">CLIENT<br /><b>GET /api</b></div>
        <div className="gateway-route"><span /><span /><span /></div>
        <div className="gateway-hub"><b>GATEWAY</b><small>route · auth · proxy</small></div>
        <div className="gateway-services"><i>service 01</i><i>service 02</i><i>service 03</i></div>
      </div>
    );
  }

  return (
    <div className="terminal-window">
      <div className="terminal-bar"><i /><i /><i /><span>my-shell</span></div>
      <div className="terminal-content">
        <p><b>~</b> ./your_program.sh</p>
        <p className="terminal-command">$ <span>help</span></p>
        <p className="terminal-output">built-ins&nbsp;&nbsp; commands<br />paths&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; processes</p>
        <p className="terminal-command">$ <span>_</span></p>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className={`project-card${index === 0 ? " project-featured" : ""}`} delay={index * 0.07}>
      <div className={`project-visual ${project.visual}-visual`} aria-hidden="true">
        <ProjectVisual project={project} />
        <span className="visual-stamp">{project.stamp}</span>
      </div>
      <div className="project-info">
        <div className="project-topline">
          <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <details className="project-notes">
          <summary>Project notes <span aria-hidden="true">＋</span></summary>
          <p>{project.notes}</p>
        </details>
      </div>
    </Reveal>
  );
}
