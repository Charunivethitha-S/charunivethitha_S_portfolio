import { projects } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Award, CheckCircle2, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07090e] text-[#f3f4f6] px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#67e8f9] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>

        {/* Header Section */}
        <header className="space-y-4 border-b border-[#1f293d] pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#67e8f9] uppercase bg-[#0f172a] px-3 py-1 rounded-full border border-[#1e293b]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#9ca3af]">{project.timeline}</span>
            {project.patent_status && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4ade80] bg-[#064e3b]/40 px-3 py-1 rounded-full border border-[#059669]/50">
                <Award size={14} /> {project.patent_status}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-mono leading-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {project.github_url && (
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#67e8f9] text-[#07090e] font-bold rounded-lg hover:bg-[#22d3ee] transition-all text-sm"
              >
                View Repository on GitHub <ExternalLink size={16} />
              </a>
              {project.paper_url && (
                <a
                  href={project.paper_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e293b] text-white font-bold rounded-lg border border-[#334155] hover:bg-[#334155] transition-all text-sm"
                >
                  Read Paper / Publication <ExternalLink size={16} />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Abstract & Detailed Description */}
        <section className="bg-[#0b0f19] p-6 md:p-8 rounded-2xl border border-[#1f293d] space-y-4">
          <h2 className="text-xl font-bold font-mono text-[#67e8f9] flex items-center gap-2">
            Abstract & Technical Overview
          </h2>
          <p className="text-[#d1d5db] leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
        </section>

        {/* Benchmark & Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#9ca3af]">
              Performance & Benchmark Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#0d1322] border border-[#1e293b] p-5 rounded-xl text-center space-y-1 hover:border-[#67e8f9]/40 transition-all"
                >
                  <div className="text-2xl md:text-3xl font-black text-[#67e8f9] font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#9ca3af] leading-tight font-sans">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3 Square Technology / Architecture Blocks */}
        <section className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#9ca3af]">
            System Architecture & Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Block 1: Hardware */}
            <div className="bg-[#0b0f19] border border-[#1e293b] p-6 rounded-2xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#67e8f9] border-b border-[#1e293b] pb-2">
                Hardware Components
              </div>
              <ul className="space-y-2 text-sm text-[#d1d5db]">
                {project.hardware.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#67e8f9] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 2: Software */}
            <div className="bg-[#0b0f19] border border-[#1e293b] p-6 rounded-2xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#67e8f9] border-b border-[#1e293b] pb-2">
                Software & EDA Tools
              </div>
              <ul className="space-y-2 text-sm text-[#d1d5db]">
                {project.software.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#67e8f9] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 3: Technologies */}
            <div className="bg-[#0b0f19] border border-[#1e293b] p-6 rounded-2xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#67e8f9] border-b border-[#1e293b] pb-2">
                Technologies & Protocols
              </div>
              <ul className="space-y-2 text-sm text-[#d1d5db]">
                {project.technologies.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#67e8f9] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Boxed Key Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <section className="bg-[#081225] border border-[#1e3a8a]/40 p-6 md:p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold font-mono text-[#38bdf8] flex items-center gap-2">
              <CheckCircle2 className="text-[#38bdf8]" size={20} /> Project Achievements & Key Deliverables
            </h3>
            <ul className="space-y-3">
              {project.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#cbd5e1]">
                  <span className="text-[#38bdf8] font-bold mt-0.5">✓</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Diagram & Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#9ca3af]">
              RTL Schematics, Waveforms & Hardware Photographs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl overflow-hidden group hover:border-[#67e8f9]/50 transition-all space-y-3 p-4"
                >
                  <div className="relative aspect-video bg-[#05070a] rounded-xl overflow-hidden border border-[#1e293b] flex items-center justify-center">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Automatic fallback for .jpeg / .jpg extensions
                        const target = e.currentTarget;
                        if (target.src.endsWith('.png')) {
                          target.src = target.src.replace('.png', '.jpeg');
                        } else if (target.src.endsWith('.jpeg')) {
                          target.src = target.src.replace('.jpeg', '.jpg');
                        }
                      }}
                    />
                  </div>
                  <p className="text-xs text-[#9ca3af] font-mono leading-relaxed px-1">
                    <strong className="text-[#67e8f9]">Fig {idx + 1}:</strong> {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
