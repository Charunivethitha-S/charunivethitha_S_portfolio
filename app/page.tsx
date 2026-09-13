"use client";

import { useState, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  ShieldCheck,
  Brain,
  Download,
  Building2,
  Calendar,
  MapPin,
  FileCheck,
  Award,
} from "lucide-react";

import Nav from "@/components/Nav";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

import {
  projects,
  experiences,
  publications,
  patents,
  certificates,
  events,
  skills,
} from "@/lib/content";

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const certsRef = useRef<HTMLDivElement>(null);
  const addProjRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);

  const project =
    featuredProjects.length > 0
      ? featuredProjects[projectIndex % featuredProjects.length]
      : null;

  const nextProject = () =>
    setProjectIndex((i) =>
      featuredProjects.length > 0 ? (i + 1) % featuredProjects.length : 0
    );

  const prevProject = () =>
    setProjectIndex((i) =>
      featuredProjects.length > 0
        ? (i - 1 + featuredProjects.length) % featuredProjects.length
        : 0
    );

  const scrollCerts = (direction: "left" | "right") => {
    if (certsRef.current) {
      certsRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  const scrollAddProj = (direction: "left" | "right") => {
    if (addProjRef.current) {
      addProjRef.current.scrollBy({
        left: direction === "left" ? -380 : 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Nav />

      <main>
        {/* ========================================================
            HERO SECTION
            ======================================================== */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            {/* LEFT COLUMN */}
            <div>
              <div className="eyebrow">
                <span className="pulse" />
                Electronics & Communication Engineering · VLSI Focus
              </div>

              <h1>CHARUNIVETHITHA S</h1>

              <div className="hero-role">
                Pre-Silicon RTL Design & FPGA Engineer
              </div>

              <p className="hero-copy">
                Designing high-throughput pipelined architectures, neural network hardware accelerators, and post-quantum cryptographic IP cores at the intersection of VLSI, FPGA computing, Edge AI, and hardware security.
              </p>

              <div className="actions">
                <a className="btn primary" href="#projects">
                  Explore Projects
                  <ArrowDownRight size={15} />
                </a>

                <a className="btn" href="#contact">
                  Start a Conversation
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://www.linkedin.com/in/charunivethitha17"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>

                <a
                  href="https://github.com/Charunivethitha-S"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>

                <a href="mailto:charunivethithas@gmail.com" aria-label="Email">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: STRAIGHT RECTANGLES */}
            <div className="hero-side-straight">
              <div className="hero-outer-rect">
                <div className="rect-corner tl" />
                <div className="rect-corner tr" />
                <div className="rect-corner bl" />
                <div className="rect-corner br" />

                <div className="rect-badge">RTL → FPGA → SILICON</div>

                <div className="hero-inner-rect">
                  <img
                    src="/images/profile/charunivethitha.jpg"
                    alt="Charunivethitha S"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80";
                    }}
                  />
                  <div className="hero-inner-tag">
                    <span>CHARUNIVETHITHA S</span>
                    <span>ECE / VLSI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            MARQUEE TRACK
            ======================================================== */}
        <div className="marquee">
          <div className="marquee-track">
            <span>VLSI DESIGN</span>
            <span>✦</span>
            <span>RTL ARCHITECTURE</span>
            <span>✦</span>
            <span>FPGA PROTOTYPING</span>
            <span>✦</span>
            <span>EDGE AI ACCELERATORS</span>
            <span>✦</span>
            <span>POST-QUANTUM CRYPTOGRAPHY</span>
            <span>✦</span>
            <span>NEUROMORPHIC COMPUTING</span>
            <span>✦</span>
            <span>HARDWARE SECURITY</span>
            <span>✦</span>
          </div>
        </div>

        {/* ========================================================
            01 ABOUT & ENGINEERING FOCUS
            ======================================================== */}
        <section className="section" id="about">
          <div className="container">
            <div className="about-box">
              <div className="about-left">
                <div className="section-kicker">01 — about & focus</div>
                <h2>Silicon-Minded Engineering with an AI Edge.</h2>
                <p>
                  I am a B.Tech Electronics and Communication Engineering student at SRM IST (9.78 CGPA) with hands-on experience in RTL design, FPGA prototyping, and hardware security. My work focuses on bridging mathematical algorithms and silicon execution—translating complex DNNs and post-quantum cryptographic primitives into efficient, pipelined hardware architectures.
                </p>
              </div>

              <div className="focus-grid">
                <div className="focus-card">
                  <div className="focus-card-top">
                    <Cpu size={16} />
                    <span>RTL & Architecture</span>
                  </div>
                  <p>Verilog, SystemVerilog, custom systolic arrays, DMA engines, and AXI4 protocols.</p>
                </div>

                <div className="focus-card">
                  <div className="focus-card-top">
                    <Layers size={16} />
                    <span>FPGA Prototyping</span>
                  </div>
                  <p>Xilinx Vivado, Vitis HLS, Zynq UltraScale+ KCU106, Zynq-7020, and Artix-7.</p>
                </div>

                <div className="focus-card">
                  <div className="focus-card-top">
                    <Brain size={16} />
                    <span>Edge AI & SNNs</span>
                  </div>
                  <p>INT8 quantized neural accelerators, time-multiplexed LIF Spiking Neural Networks.</p>
                </div>

                <div className="focus-card">
                  <div className="focus-card-top">
                    <ShieldCheck size={16} />
                    <span>Hardware Security</span>
                  </div>
                  <p>Post-quantum cryptography (Kyber-1024), ChaCha20 cipher, and Hardware Root-of-Trust.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            02 FEATURED PROJECTS
            ======================================================== */}
        <section className="section" id="projects">
          <div className="container">
            <SectionHeader
              kicker="02 — featured projects"
              title="Built in Hardware."
              text="Selected architectures across post-quantum cryptography, edge-AI acceleration, NoC sensor fusion, and neuromorphic computing."
            />

            <div className="project-browser">
              {project && (
                <>
                  <div className="project-controls">
                    <button onClick={prevProject} aria-label="Previous project">
                      <ChevronLeft size={18} />
                    </button>

                    <div>
                      <span className="mono">
                        PROJECT {String(projectIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                      </span>

                      <div className="project-dots">
                        {featuredProjects.map((p, i) => (
                          <button
                            key={p.slug}
                            className={i === projectIndex ? "active" : ""}
                            onClick={() => setProjectIndex(i)}
                            aria-label={p.title}
                          />
                        ))}
                      </div>
                    </div>

                    <button onClick={nextProject} aria-label="Next project">
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <ProjectCard project={project} index={projectIndex} />
                </>
              )}
            </div>

            {/* ADDITIONAL HARDWARE PROJECTS CAROUSEL */}
            {additionalProjects.length > 0 && (
              <div style={{ marginTop: "60px" }}>
                <div className="certs-header-row">
                  <div>
                    <div className="section-kicker">additional hardware & applied projects</div>
                    <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "4px 0 0", color: "#fff" }}>
                      Engineering Prototypes & IoT Systems
                    </h3>
                  </div>

                  <div className="certs-nav-buttons">
                    <button onClick={() => scrollAddProj("left")} aria-label="Previous additional projects">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => scrollAddProj("right")} aria-label="Next additional projects">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="certs-carousel" ref={addProjRef}>
                  {additionalProjects.map((proj, idx) => (
                    <div key={proj.slug} style={{ flex: "0 0 380px", width: "380px" }}>
                      <ProjectCard project={proj} index={idx} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            03 PUBLICATIONS & PATENTS
            ======================================================== */}
        <section className="section" id="publications-patents">
          <div className="container">
            <SectionHeader
              kicker="03 — publications & patents"
              title="Research & Intellectual Property."
              text="Peer-reviewed cryptographic hardware research and novel hardware architecture patents."
            />

            <div className="pub-pat-grid">
              <div>
                <div className="pub-pat-col-title">
                  <Award size={18} style={{ color: "var(--gold)" }} />
                  <span>Patents & Intellectual Property</span>
                </div>

                {patents.map((pat) => (
                  <div key={pat.title} className="pub-pat-card patent">
                    <span className="pub-tag patent-tag">{pat.status}</span>
                    <h3>{pat.title}</h3>
                    <p>{pat.description}</p>
                    <div className="pub-meta">
                      <span>{pat.type}</span>
                      <span>·</span>
                      <span>{pat.year}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="pub-pat-col-title">
                  <FileCheck size={18} style={{ color: "var(--cyan)" }} />
                  <span>Research & Conference Papers</span>
                </div>

                {publications.map((pub) => (
                  <div key={pub.title} className="pub-pat-card paper">
                    <span className="pub-tag paper-tag">{pub.status}</span>
                    <h3>{pub.title}</h3>
                    <p>{pub.abstract}</p>
                    <div className="pub-meta">
                      <span>{pub.venue}</span>
                      <span>·</span>
                      <span>{pub.year}</span>
                      {pub.paper_id && <span>· Paper ID: {pub.paper_id}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            04 EXPERIENCE
            ======================================================== */}
        <section className="section" id="experience">
          <div className="container">
            <SectionHeader
              kicker="04 — experience"
              title="Engineering & Research Experience."
              text="Practical internships shaping hands-on FPGA design and hardware acceleration."
            />

            <div className="timeline">
              {experiences.map((e) => (
                <div className="timeline-item" key={e.organization}>
                  <div className="date">
                    {e.start_date} — {e.end_date || "Present"}
                  </div>
                  <h3>{e.organization}</h3>
                  <div className="role-title">
                    {e.role} {e.location && `· ${e.location}`}
                  </div>
                  <p>{e.description}</p>
                  <div className="tags">
                    {e.technologies.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            05 CERTIFICATES
            ======================================================== */}
        <section className="section" id="certificates">
          <div className="container">
            <div className="certs-header-row">
              <SectionHeader
                kicker="05 — technical certificates"
                title="Specialized Training & Certifications."
                text="Verified coursework in VLSI fundamentals, HDL programming, and applied computing."
              />

              <div className="certs-nav-buttons">
                <button onClick={() => scrollCerts("left")} aria-label="Previous certificates">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => scrollCerts("right")} aria-label="Next certificates">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="certs-carousel" ref={certsRef}>
              {certificates.map((cert) => (
                <div className="cert-card-v2" key={cert.title}>
                  <div className="cert-img-header">
                    {cert.image_url && cert.image_url !== "#" ? (
                      <img
                        src={cert.image_url}
                        alt={cert.title}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                          const placeholder = (e.target as HTMLElement).parentElement?.querySelector(".cert-img-placeholder");
                          if (placeholder) (placeholder as HTMLElement).style.display = "flex";
                        }}
                      />
                    ) : null}

                    <div
                      className="cert-img-placeholder"
                      style={{ display: cert.image_url ? "none" : "flex" }}
                    >
                      <Award size={28} />
                      <span>{cert.category || "CERTIFICATE PREVIEW"}</span>
                    </div>
                  </div>

                  <div className="cert-body">
                    {cert.category && <span className="cert-cat-pill">{cert.category}</span>}
                    <h3>{cert.title}</h3>

                    <div className="cert-info-list">
                      <div className="cert-info-row">
                        <Building2 size={13} />
                        <span><strong>Issuer:</strong> {cert.issuer}</span>
                      </div>
                      <div className="cert-info-row">
                        <MapPin size={13} />
                        <span><strong>Location:</strong> {cert.location}</span>
                      </div>
                      <div className="cert-info-row">
                        <Calendar size={13} />
                        <span><strong>Date:</strong> {cert.date}</span>
                      </div>
                    </div>

                    <a
                      href={cert.pdf_url || cert.image_url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-download-btn"
                    >
                      <Download size={14} />
                      <span>Download Certificate</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            06 EVENTS & HACKATHONS
            ======================================================== */}
        <section className="section" id="events">
          <div className="container">
            <SectionHeader
              kicker="06 — hackathons & technical events"
              title="Competitions & Technical Sprint."
              text="Collaborative engineering hackathons, design sprints, and technical events."
            />

            <div className="events-grid">
              {events.map((e) => (
                <div className="event-card" key={e.title}>
                  <span className="mono" style={{ fontSize: "10px", color: "var(--cyan)" }}>
                    {e.role || "EVENT"}
                  </span>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <div className="event-meta">
                    {e.organizer} · {e.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            07 CONTACT SECTION
            ======================================================== */}
        <section className="section no-border" id="contact">
          <div className="container">
            <div className="contact-box">
              <div>
                <div className="section-kicker">07 — contact</div>
                <h2>Let&apos;s Build <br />Something Real.</h2>
                <p>
                  Interested in VLSI design, FPGA hardware acceleration, edge AI, or cryptographic security research? I&apos;d be glad to connect.
                </p>
              </div>

              <div className="actions" style={{ marginTop: 0 }}>
                <a className="btn primary" href="mailto:charunivethithas@gmail.com">
                  <Mail size={15} />
                  Email Me
                </a>

                <a
                  className="btn"
                  href="https://www.linkedin.com/in/charunivethitha17"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>

                <a
                  className="btn"
                  href="https://github.com/Charunivethitha-S"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} CHARUNIVETHITHA S · B.TECH ECE</span>
          <span className="mono">VLSI · RTL · FPGA · EDGE AI · HARDWARE SECURITY</span>
        </div>
      </footer>
    </>
  );
}
