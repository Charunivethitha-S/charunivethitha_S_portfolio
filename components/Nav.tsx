import { ArrowUpRight } from "lucide-react";

export default function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="/#home">
        <span className="brand-mark" />
        <span>CHARUNIVETHITHA</span>
      </a>

      <div className="nav-links">
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#publications-patents">Publications & Patents</a>
        <a href="/#experience">Experience</a>
        <a href="/#certificates">Certificates</a>
        <a href="/#events">Events</a>
      </div>

      <a className="nav-cta" href="/#contact">
        Let&apos;s connect <ArrowUpRight size={12} />
      </a>
    </nav>
  );
}
