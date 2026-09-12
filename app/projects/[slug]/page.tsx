import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <div className="container case-hero">
        <Link className="back" href="/"><ArrowLeft size={13} style={{verticalAlign:"middle"}}/> BACK TO PORTFOLIO</Link>
        <div className="section-kicker" style={{marginTop:35}}>{project.eyebrow}</div>
        <h1>{project.title}</h1>
        <p className="hero-copy">{project.summary}</p>
        <div className="tags" style={{marginTop:24}}>{project.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div>
      </div>
      <div className="container case-body">
        <div className="media-tile" style={{aspectRatio:"16/7",marginBottom:50}}><span>PROJECT HERO MEDIA · ADD IMAGE FROM CMS</span></div>
        <h2>Overview</h2>
        <p>{project.description}</p>
        <h2>Architecture & implementation</h2>
        <p>Document the architecture here with your block diagram, datapath explanation, interface definitions, timing considerations and FPGA/ASIC implementation details. This page is intentionally structured as a case study rather than a resume bullet.</p>
        <div className="gallery-grid">
          {[1,2,3].map(n=><div className="media-tile" key={n}><span>ARCHITECTURE / SCREENSHOT {n}</span></div>)}
        </div>
        <h2>Results</h2>
        <div className="metric-row">{project.metrics?.map(m=><div className="metric" key={m.label}><b>{m.value}</b><small>{m.label}</small></div>)}</div>
        <h2>Links</h2>
        <div className="actions">
          {project.github_url && <a className="btn" href={project.github_url}>GitHub <ExternalLink size={14}/></a>}
          {project.paper_url && <a className="btn" href={project.paper_url}>Research <ExternalLink size={14}/></a>}
        </div>
      </div>
      <footer className="footer" style={{marginTop:100}}><div className="container footer-row"><Link href="/">← All work</Link><span>CHARUNIVETHITHA S</span></div></footer>
    </main>
  );
}
