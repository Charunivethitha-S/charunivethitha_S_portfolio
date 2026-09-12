import type { Certificate, Experience, Patent, Project, Publication, EventItem } from "./types";

/* ============================================================
   PROJECTS
   ============================================================ */

export const projects: Project[] = [
  {
    slug: "root-of-trust",
    title: "Hardware-Accelerated Post-Quantum Root-of-Trust for 5G Enclaves",
    eyebrow: "POST-QUANTUM CRYPTOGRAPHY / SOC",
    summary:
      "Fully pipelined post-quantum SoC integrating TRNG, Kyber-1024 MLWE KEM, and ChaCha20 stream cipher with tamper-resistant key storage and secure boot for 5G NR authentication.",
    description:
      "Architected a fully pipelined post-quantum SoC integrating TRNG, Kyber-1024 MLWE KEM, and ChaCha20 stream cipher, achieving 2,700x throughput over an ARM Cortex-A53 baseline. Implemented NTT-based polynomial arithmetic for lattice-based KEM with AXI4-Stream datapath for Shor's algorithm resistance.",
    category: "Hardware Security",
    timeline: "2025 — 2026",
    hardware: ["Zynq UltraScale+ KCU106", "ARM Cortex-A53", "TRNG Hardware Core"],
    software: ["Xilinx Vivado", "Vitis HLS", "Verilog", "AXI4-Stream Protocol"],
    technologies: ["Zynq UltraScale+", "Kyber-1024", "ChaCha20", "Vivado", "Vitis HLS", "AXI4-Stream"],
    metrics: [
      { value: "2,700×", label: "throughput gain over ARM Cortex-A53" },
      { value: "Kyber-1024", label: "quantum-resistant MLWE KEM" }
    ],
    featured: true
  },

  {
    slug: "agrinn",
    title: "AgriNN: 100K-Neuron INT8 Neural Network Accelerator",
    eyebrow: "AI HARDWARE / ZYNQ-7020",
    summary:
      "16-core INT8 MAC systolic array accelerator with custom DMA engine and bare-metal firmware delivering real-time edge inference at <10 ms latency.",
    description:
      "Designed a 16-core INT8 MAC systolic array with custom DMA engine and AXI4-Lite/AXI4-Stream interfaces on Zynq-7020. Implemented hardware-software co-design integrating four DNNs with INT8 quantization, delivering 4x compression with <1% accuracy loss and bare-metal firmware with zero SD-card dependency.",
    category: "AI Hardware",
    timeline: "2025",
    hardware: ["Xilinx Zynq-7020 (ZedBoard)", "16-Core Systolic MAC Array", "Custom DMA"],
    software: ["Vivado", "Vitis", "Bare-metal C", "AXI4-Stream"],
    technologies: ["Zynq-7020", "INT8 Quantization", "Systolic Array", "Vivado", "Bare-metal C"],
    metrics: [
      { value: "<10 ms", label: "real-time inference latency" },
      { value: "4×", label: "model compression (<1% accuracy loss)" }
    ],
    featured: true
  },

  {
    slug: "zero-latency-neural-engine",
    title: "Zero-Latency Combinational Neural Engine for Task Migration",
    eyebrow: "NEURAL LOGIC / ARTIX-7",
    summary:
      "Zero clock-cycle latency combinational neural inference engine with ~5 ns propagation delay enabling real-time multi-core thermal stress prediction for DVFS processors.",
    description:
      "Designed a fully combinational neural inference engine with zero clock-cycle latency, ~5 ns propagation delay, and near-zero dynamic power on Basys 3 (Artix-7). Implemented real-time multi-core thermal stress prediction enabling preemptive task migration for DVFS-aware processors.",
    category: "AI Hardware",
    timeline: "2025",
    hardware: ["Basys 3 (Artix-7 FPGA)", "Combinational Neural Pipeline"],
    software: ["Xilinx Vivado", "Verilog HDL", "DVFS Multi-Core Profiling"],
    technologies: ["Basys 3", "Artix-7", "Verilog", "Vivado", "Combinational Logic"],
    metrics: [
      { value: "~5 ns", label: "propagation delay" },
      { value: "0 Cycle", label: "clock-cycle latency" }
    ],
    featured: true
  },

  {
    slug: "snn",
    title: "100-Neuron Spiking Neural Network (Time-Multiplexed)",
    eyebrow: "NEUROMORPHIC / ARTIX-7",
    summary:
      "DSP-free SNN using the LIF neuron model with time-division-multiplexed MAC architecture, achieving 2 us evaluation latency at <1% FPGA utilization.",
    description:
      "Architected a DSP-free SNN using the LIF neuron model with a time-division-multiplexed MAC architecture, achieving 2 us evaluation latency at <1% FPGA utilization. Designed a scalable architecture supporting 10,000+ neurons with sub-milliwatt always-on edge-AI capability.",
    category: "Neuromorphic",
    timeline: "2025",
    hardware: ["Artix-7 FPGA", "LIF Neuron Datapath", "TDM MAC Architecture"],
    software: ["Xilinx Vivado", "Verilog", "ModelSim Simulation"],
    technologies: ["Artix-7", "SNN", "LIF Model", "Time Multiplexing", "Edge AI"],
    metrics: [
      { value: "2 µs", label: "evaluation latency" },
      { value: "<1%", label: "FPGA utilization" }
    ],
    featured: true
  },

  {
    slug: "signal",
    title: "SIGNAL: Dual-Channel Hardware-Classified Communicator",
    eyebrow: "ASSISTIVE TECH / FPGA",
    summary:
      "FPGA-based assistive communication system with real-time deterministic hardware classification for eye-blink and head-tilt sensor inputs.",
    description:
      "An FPGA-based assistive communication system designed to enable communication through two independent hardware-classified input channels based on eye-blink and head-tilt inputs with zero software overhead.",
    category: "FPGA & RTL",
    timeline: "2024 — 2025",
    hardware: ["FPGA Prototyping Board", "Dual-Channel Sensor Front-End"],
    software: ["Verilog", "Xilinx Vivado", "Hardware State Machine"],
    technologies: ["FPGA", "Verilog", "RTL", "Hardware Classification", "Assistive Tech"],
    metrics: [
      { value: "Dual-Channel", label: "hardware input classification" },
      { value: "Deterministic", label: "hardware response time" }
    ],
    featured: true
  },

  {
    slug: "hkdf-chacha20",
    title: "HKDF-ChaCha20 Hardware Encryption Pipeline",
    eyebrow: "CRYPTOGRAPHIC HARDWARE / ARTIX-7",
    summary:
      "RFC 5869-compliant HKDF key derivation pipeline with unrolled 20-round ChaCha20 cipher achieving wire-speed encryption verified against NIST test vectors.",
    description:
      "Implemented RFC 5869-compliant HKDF with a 20-round unrolled ChaCha20 pipeline, achieving wire-speed encryption for 5G NR and IoT applications. Validated against NIST test vectors through bit-accurate functional verification.",
    category: "Security",
    timeline: "2025 — 2026",
    hardware: ["Artix-7 FPGA", "Cryptographic Pipelined Core"],
    software: ["Verilog", "Vivado Simulator", "NIST Testbenches"],
    technologies: ["Artix-7", "HKDF RFC 5869", "ChaCha20", "Verilog", "NIST Validation"],
    metrics: [
      { value: "Wire-Speed", label: "encryption throughput" },
      { value: "NIST", label: "bit-accurate verified" }
    ],
    featured: false
  }
];

/* ============================================================
   EXPERIENCE
   ============================================================ */

export const experiences: Experience[] = [
  {
    organization: "National Institute of Technology (NIT), Tiruchirappalli",
    role: "FPGA Prototyping & Hardware Security Intern",
    location: "Tiruchirappalli, Tamil Nadu",
    start_date: "May 2026",
    end_date: "June 2026",
    description:
      "Designed and prototyped the AgriNN INT8-quantized neural network accelerator and zero-latency combinational neural engine on Zynq-7020 (ZedBoard) and Zynq UltraScale+ KCU106 FPGA platforms. Implemented a custom 16-core INT8 MAC systolic array with AXI4-Stream datapath and combinational inference pipeline achieving <10 ms and ~5 ns latency.",
    technologies: [
      "Zynq UltraScale+ KCU106",
      "Zynq-7020",
      "Systolic Array",
      "AXI4-Stream",
      "Bare-metal C",
      "Vivado"
    ]
  }
];

/* ============================================================
   PATENTS & INTELLECTUAL PROPERTY
   ============================================================ */

export const patents: Patent[] = [
  {
    title: "Implementation of HKDF for ChaCha20 Key Generation",
    type: "Hardware Architecture Patent",
    status: "Patent Filed",
    year: "2026",
    description:
      "Hardware architecture for cryptographic key derivation pipeline implementing RFC 5869-compliant HKDF with an unrolled ChaCha20 cipher, providing high-throughput wire-speed key generation for 5G NR and secure IoT edge platforms."
  }
];

/* ============================================================
   PUBLICATIONS / RESEARCH
   ============================================================ */

export const publications: Publication[] = [
  {
    title:
      "Design and Evaluation of a Low-Latency Unified Cryptographic Pipeline for Quantum-Resistant Embedded Systems",
    venue: "ICSEIS 2026 — NIT Warangal",
    year: "2026",
    status: "Accepted",
    paper_id: "50",
    abstract:
      "A low-latency unified cryptographic pipeline targeting quantum-resistant embedded systems and hardware acceleration using NTT-based polynomial arithmetic and AXI4-Stream dataflow."
  },
  {
    title: "FPGA-Based HKDF-ChaCha20 Hardware Implementation",
    venue: "IEEE IGNITE'2026 Conference",
    year: "2026",
    status: "Paper Accepted (Publication in Progress)",
    abstract:
      "Hardware implementation and FPGA prototyping of a pipelined HKDF-ChaCha20 cryptographic engine on Xilinx Artix-7, validated with bit-accurate NIST test vectors."
  }
];

/* ============================================================
   CERTIFICATES
   ============================================================ */

export const certificates: Certificate[] = [
   {
    title: "Class X School Topper – Academic Achievement",
    issuer: "Sri Vidya Mandir Hr Sec School (CBSE)",
    location: "Salem, Tamil Nadu",
    date: "2021",
    category: "Academic Achievement",
    image_url: "/images/profile/classx.jpeg", // <-- Fixed folder and extension
    pdf_url: "/images/profile/classx.jpeg",   // <-- Added this so the download button works!
    description:
      "Secured First Rank in Class XII, achieving the highest academic performance in the school."
  },
  {
    title: "HDL Programming in Verilog — Summer Course",
    issuer: "Sona College of Technology",
    location: "Salem, Tamil Nadu",
    date: "2025",
    category: "FPGA & HDL",
    image_url: "/images/certificates/sona_hdl.jpg",
    pdf_url: "#",
    description:
      "1-month intensive summer program advancing HDL programming in Verilog, modular RTL design, FSM architectures, and FPGA synthesis on Xilinx platforms."
  },
  {
    title: "Python Programming & AI Fundamentals",
    issuer: "IBM Skills Network",
    location: "Online / Digital Badge",
    date: "2025",
    category: "Programming",
    image_url: "/images/certificates/ibm_python.jpg",
    pdf_url: "#",
    description:
      "Certified in Python programming with verified IBM Skills Network Digital Badge, covering data structures, algorithmic logic, and technical computing."
  }
];

/* ============================================================
   EVENTS / PARTICIPATION
   ============================================================ */

export const events: EventItem[] = [
  {
    title: "Circuit Sprint — Yuva'2026",
    organizer: "SIMATS Engineering",
    date: "2026",
    role: "Hardware Competition",
    description:
      "Competed in high-speed circuit design and hardware debugging sprint as part of Yuva'2026."
  },
  {
    title: "AASHAV 2026",
    organizer: "SIMATS Engineering",
    date: "2026",
    role: "Technical Hackathon",
    description:
      "Participated in AASHAV 2026 technical hackathon with an embedded hardware and edge acceleration project."
  }
];

/* ============================================================
   SKILLS & CORE COMPETENCIES
   ============================================================ */

export const skills = [
  "Verilog",
  "SystemVerilog",
  "VHDL",
  "RTL Design",
  "FPGA Prototyping",
  "Xilinx Vivado",
  "Vitis HLS",
  "Zynq UltraScale+",
  "Zynq-7020",
  "Artix-7",
  "Systolic Arrays",
  "INT8 Quantization",
  "Spiking Neural Networks (SNN)",
  "Edge AI",
  "Post-Quantum Cryptography (Kyber)",
  "ChaCha20 / HKDF",
  "AXI4-Lite & AXI4-Stream",
  "RTL-to-GDSII Awareness",
  "C / C++ / Bare-metal"
];
