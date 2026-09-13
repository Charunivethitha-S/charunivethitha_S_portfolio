import Link from "next/link";
import { ArrowUpRight, Cpu, Code2, Calendar } from "lucide-react";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hw = project.hardware && project.hardware.length > 0 
    ? project.hardware 
    : project.technologies.slice(0, 2);

  const sw = project.software && project.software.length > 0 
    ? project.software 
    : project.technologies.slice(2);

  return (
    <Link href={`/projects/${project.slug}`} className="project-card-v2">
      {/* Card Header: Category & Timeline */}
      <div className="card-top-row">
        <span className="card-cat-badge">0{index + 1} / {project.category}</span>
        {project.timeline && (
          <span className="card-time-badge">
            <Calendar size={11} /> {project.timeline}
          </span>
        )}
        <div className="card-link-icon">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Project Title */}
      <h3 className="project-heading">{project.title}</h3>

      {/* Summary */}
      <p className="project-desc">{project.summary}</p>

      {/* Hardware / Software Section */}
      <div className="tech-box-grid">
        <div className="tech-box">
          <div className="tech-box-title">
            <Cpu size={12} className="text-cyan" />
            <span>HARDWARE USED</span>
          </div>
          <div className="tech-chips-wrap">
            {hw.map((h) => (
              <span key={h} className="tech-chip-item hw">{h}</span>
            ))}
          </div>
        </div>

        <div className="tech-box">
          <div className="tech-box-title">
            <Code2 size={12} className="text-violet" />
            <span>SOFTWARE & EDA</span>
          </div>
          <div className="tech-chips-wrap">
            {sw.map((s) => (
              <span key={s} className="tech-chip-item sw">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Metric Row */}
      {project.metrics && project.metrics.length > 0 ? (
        <div className="metric-row-v2">
          {project.metrics.map((m) => (
            <div className="metric-item" key={m.label}>
              <b>{m.value}</b>
              <small>{m.label}</small>
            </div>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
