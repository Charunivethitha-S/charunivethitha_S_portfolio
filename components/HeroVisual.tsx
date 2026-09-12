import { Cpu, Database, GitBranch, ShieldCheck } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract semiconductor architecture visualization">
      <div className="trace t1"/><div className="trace t2"/><div className="trace t3"/>
      <div className="node n1"/><div className="node n2"/><div className="node n3"/>
      <div className="chip">
        <div className="chip-core">
          <div>
            <Cpu size={25} style={{margin:"0 auto 12px", color:"var(--cyan)"}}/>
            <strong>RTL</strong>
            <div className="mono" style={{fontSize:10,color:"#7f8b99",marginTop:8}}>FPGA → SILICON</div>
          </div>
        </div>
      </div>
      <div style={{position:"absolute",left:24,top:22,display:"grid",gap:10}}>
        <span className="tag"><GitBranch size={12}/> datapath</span>
        <span className="tag"><Database size={12}/> memory</span>
      </div>
      <div style={{position:"absolute",right:24,top:22}}>
        <span className="tag"><ShieldCheck size={12}/> secure</span>
      </div>
      <div className="visual-label">ARCHITECTURE // 01 — HARDWARE COMPUTE</div>
    </div>
  );
}
