import { projects } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Code2, Layers } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <div className="container">
        
        {/* Back Link */}
        <div style={{ marginBottom: "24px" }}>
          <Link href="/#projects" className="back">
            <ArrowLeft size={14} /> Back to All Projects
          </Link>
        </div>

        {/* Header Section */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <span className="section-kicker" style={{ margin: 0 }}>
              0{project.featured ? "1" : "2"} — {project.category}
            </span>
            {project.timeline && (
              <span className="card-time-badge" style={{ fontSize: "11px" }}>
                {project.timeline}
              </span>
            )}
            {project.patent_status && (
              <span className="pub-tag patent-tag" style={{ margin: 0, fontWeight: 700 }}>
                🏆 {project.patent_status}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 16px", color: "#fff" }}>
            {project.title}
          </h1>

          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "800px", lineHeight: 1.7, margin: "0 0 24px" }}>
            {project.summary}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {project.github_url && (
              <a className="btn primary" href={project.github_url} target="_blank" rel="noreferrer">
                GitHub Repository <ExternalLink size={14} />
              </a>
            )}
            {project.paper_url && (
              <a className="btn" href={project.paper_url} target="_blank" rel="noreferrer">
                Research Publication <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Abstract & Detailed Description */}
        <div className="pub-pat-card" style={{ marginBottom: "32px", padding: "28px" }}>
          <div className="section-kicker" style={{ marginBottom: "8px" }}>ABSTRACT & TECHNICAL OVERVIEW</div>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--text)", margin: 0 }}>
            {project.description}
          </p>
        </div>

        {/* Benchmark Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div style={{ marginBottom: "32px" }}>
            <div className="section-kicker" style={{ marginBottom: "12px" }}>MEASURED BENCHMARKS & PERFORMANCE</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
              {project.metrics.map((m, idx) => (
                <div key={idx} className="metric-item" style={{ padding: "14px 18px" }}>
                  <b style={{ fontSize: "20px", color: "var(--cyan)" }}>{m.value}</b>
                  <small style={{ fontSize: "10px", color: "var(--muted)" }}>{m.label}</small>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3 Tech Stack / Architecture Boxes */}
        <div style={{ marginBottom: "32px" }}>
          <div className="section-kicker" style={{ marginBottom: "12px" }}>SYSTEM ARCHITECTURE & TECH STACK</div>
          <div className="tech-box-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            
            {/* Box 1: Hardware */}
            <div className="tech-box" style={{ padding: "18px" }}>
              <div className="tech-box-title" style={{ fontSize: "11px", marginBottom: "12px" }}>
                <Cpu size={14} className="text-cyan" />
                <span>HARDWARE COMPONENTS</span>
              </div>
              <div className="tech-chips-wrap">
                {project.hardware.map((h, i) => (
                  <span key={i} className="tech-chip-item hw" style={{ fontSize: "12px", padding: "4px 10px" }}>{h}</span>
                ))}
              </div>
            </div>

            {/* Box 2: Software */}
            <div className="tech-box" style={{ padding: "18px" }}>
              <div className="tech-box-title" style={{ fontSize: "11px", marginBottom: "12px" }}>
                <Code2 size={14} className="text-violet" />
                <span>SOFTWARE & EDA TOOLS</span>
              </div>
              <div className="tech-chips-wrap">
                {project.software.map((s, i) => (
                  <span key={i} className="tech-chip-item sw" style={{ fontSize: "12px", padding: "4px 10px" }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Box 3: Technologies */}
            <div className="tech-box" style={{ padding: "18px" }}>
              <div className="tech-box-title" style={{ fontSize: "11px", marginBottom: "12px" }}>
                <Layers size={14} style={{ color: "var(--gold)" }} />
                <span>TECHNOLOGIES & PROTOCOLS</span>
              </div>
              <div className="tech-chips-wrap">
                {project.technologies.map((t, i) => (
                  <span key={i} className="tech-chip-item" style={{ fontSize: "12px", padding: "4px 10px" }}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Key Achievements Box */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="pub-pat-card patent" style={{ marginBottom: "40px", padding: "28px" }}>
            <div className="section-kicker" style={{ color: "var(--gold)", marginBottom: "12px" }}>KEY ACHIEVEMENTS & DELIVERABLES</div>
            <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.achievements.map((ach, idx) => (
                <li key={idx} style={{ color: "var(--text)", fontSize: "14px", lineHeight: "1.6" }}>
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <div className="section-kicker" style={{ marginBottom: "16px" }}>RTL SCHEMATICS, WAVEFORMS & HARDWARE PHOTOS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {project.gallery.map((img, idx) => (
                <div key={idx} className="pub-pat-card" style={{ padding: "14px", margin: 0 }}>
                  <div style={{ width: "100%", maxHeight: "320px", borderRadius: "12px", overflow: "hidden", background: "#000", display: "flex", itemsCenter: "center", justifyContent: "center" }}>
                    <img
                      src={img.url}
                      alt={img.caption}
                      style={{ width: "100%", height: "100%", maxHeight: "320px", objectFit: "contain", display: "block" }}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('.png')) {
                          target.src = target.src.replace('.png', '.jpeg');
                        } else if (target.src.endsWith('.jpeg')) {
                          target.src = target.src.replace('.jpeg', '.jpg');
                        }
                      }}
                    />
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--muted)", margin: "10px 0 0", fontFamily: '"DM Mono", monospace' }}>
                    <strong style={{ color: "var(--cyan)" }}>Fig {idx + 1}:</strong> {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
