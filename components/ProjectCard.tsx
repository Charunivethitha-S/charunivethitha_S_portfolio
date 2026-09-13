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

  const mainImage = project.gallery && project.gallery.length > 0 ? project.gallery[0].url : null;

  return (
    <Link href={`/projects/${project.slug}`} className="project-card-v2 group block">
      {/* Top Image Preview for Each Slide / Card */}
      {mainImage && (
        <div className="relative w-full aspect-video bg-[#05070a] rounded-xl overflow-hidden mb-4 border border-[#1e293b] flex items-center justify-center">
          <img
            src={mainImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const img = e.currentTarget;
              const src = img.src;
              if (src.endsWith('.png')) {
                img.src = src.replace('.png', '.jpeg');
              } else if (src.endsWith('.jpeg')) {
                img.src = src.replace('.jpeg', '.jpg');
              } else if (src.endsWith('.jpg')) {
                img.src = src.replace('.jpg', '.PNG');
              }
            }}
          />
        </div>
      )}

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
