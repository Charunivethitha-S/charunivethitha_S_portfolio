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
    title: "Tech Spectrum – 3rd Prize in ECE Circuit Building",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "25th Oct 2024",
    category: "Technical Competition / ECE Circuit Design",
    image_url: "/images/profile/tech_spectrum.jpeg",
    pdf_url: "/images/profile/tech_spectrum.jpeg",
    description:
      "Secured Third Prize in Tech Spectrum for designing and building electronic circuits as part of an ECE-based technical competition."
  },
   
  {
    title: "National-Level Workshop on Drone Assembly & Programming",
    issuer: "Jet Aerospace Drone Manufacturing Hub",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "11 Nov 2024 - 15 Nov 2024",
    category: "Technical Workshop / Aerospace & Robotics",
    image_url: "/images/profile/drone.jpeg",
    pdf_url: "/images/profile/drone.jpeg",
    description:
      "Successfully completed a five-day national-level workshop on drone assembling and programming, conducted from 11–15 November 2025."
  },
     {
    title: "Quantitative Aptitude for Placements – Udemy",
    issuer: "Udemy",
    location: "Online",
    date: "April 2025",
    category: "Placement Preparation",
    image_url: "/images/profile/udemy.jpeg",
    pdf_url: "/images/profile/udemy.jpeg",
    description:
      "Enrolled in a Udemy course on quantitative aptitude to strengthen numerical reasoning and problem-solving skills for placement assessments."
  },
     {
    title: "Yuva 2025 – National-Level 24-Hour Hackathon",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "16-17 Sep 2025",
    category: "Hackathon",
    image_url: "/images/profile/yuva.jpeg", // The image you uploaded to the public folder
    pdf_url:"/images/profile/yuva.jpeg",  // What downloads when they click the button
    description: "Completed an advanced course in SystemVerilog..."
  },

    
     {
    title: "Faculty Development Program – Antenna Design for Advanced 5G Applications",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "24-25 September 2025",
    category: "Faculty Development Program",
    image_url: "/images/profile/5g_application.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/5g_application.pdf",  // What downloads when they click the button
    description: "Attended a five-day Faculty Development Program on antenna design for advanced 5G applications"
  },
   
   {
    title: "International Conference Paper Presentation – ICIES’25",
    issuer: "Jeppiaar Institute of Technology",
    location: "Chennai, Tamil Nadu",
    date: "7–8 November 2025",
    category: "Research Conference",
    image_url: "/images/profile/ICIEC.jpeg",
    pdf_url: "/images/profile/ICIEC.jpeg",
    description:
      "Presented the paper “Implementation of HKDF for ChaCha20 Key Generation” at the First International Conference on Innovations in Electronics and Communication (ICIES’25)"
  },
      {
    title: "Industry Connect Student Training Program – Frequency Selective Surfaces",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "27–28 November and 3–5 December 2025",
    category: "Industry Training",
    image_url: "/images/profile/industry_training.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/industry_training.pdf",  // What downloads when they click the button
    description: "Attended a five-day industry connect training program on exploring Frequency Selective Surfaces using CST Studio Suite"
  },

    {
    title: "VLSI Project Intern – CODEC Technologies",
    issuer: "CODEC Technologied",
    location: "Hyderabad, Telangana",
    date: " 29 December 2025 to 29 January 2026",
    category: "Internship",
    image_url: "/images/profile/CodecTechnologies.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/CodecTechnologies.pdf",  // What downloads when they click the button
    description: "Completed a one-month VLSI project internship at CODEC Technologies, working on the implementation of digital circuits using Verilog HDL."
  },

    {
    title: "TNWISE–TANCAM Hackathon – Smart Agriculture & Rural Innovation",
    issuer: "Excellence for Advanced Manufacturing (TANCAM)",
    location: "Coimbatore, Tamil Nadu",
    date: "16 march 2026",
    category: "Hackathon",
    image_url: "/images/profile/tancam.jpeg", // The image you uploaded to the public folder
    pdf_url:"/images/profile/tancam.jpeg",  // What downloads when they click the button
    description: "Participated in the TNWISE–TANCAM Hackathon on “Smart Agriculture and Rural Innovation” and developed a Smart Irrigation System for sustainable agricultural applications"
  },

    {
    title: "Code-a-thon – Student Performance & Attendance Monitoring System",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "18 march 2026",
    category: "Hackathon",
    image_url: "/images/profile/website.jpeg", // The image you uploaded to the public folder
    pdf_url:"/images/profile/website.jpeg",  // What downloads when they click the button
    description: "Participated in the Code-a-thon and developed a web-based Student Performance and Attendance Monitoring System to track individual student academic performance and attendance across a college"
  },
 {
    title: "SIH Innovate Ideathon 2K26 – Final Round Selection",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "18 march 2026",
    category: "Hackathon",
    image_url: "/images/profile/ideathon.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/ideathon.pdf",  // What downloads when they click the button
    description: "Participated in the Internal SIH Innovate Ideathon 2K26 and was selected for the final round of Smart India Hackathon (SIH) 2026 under the theme “IoT Automation"
  },

    {
    title: "Hardware Research Intern – NIT Tiruchirappalli",
    issuer: "National Institute of Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: " 25 May 2026- 25 June 2026",
    category: "Internship",
    image_url: "/images/profile/NIT.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/NIT.pdf",  // What downloads when they click the button
    description: "Completed a one-month hardware research internship at NIT Tiruchirappalli from May to June 2026, working on neuromorphic computing and spiking neural-network architectures"
  },

    {
    title: "IEEE International Conference – Paper Presentation",
    issuer: "IEEE Pune Section",
    location: "Pune, Maharashtra",
    date: "17-19 June 2026",
    category: "IEEE Conference",
    image_url: "/images/profile/IEEE.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/IEEE.pdf",  // What downloads when they click the button
    description: "Presented the paper “Implementation of HKDF for ChaCha20 Key Generation” at the International IEEE Conference on Innovation and Growth in Next-Gen Intelligent Technology & Engineering, IEEE Pune Section"
  },

       {
    title: "National-Level Project Contest – Time-Multiplexed Neural Network",
    issuer: "IEEE Pune Section",
    location: "Smt. Kashibai Navale College of Engineering, Pune, Maharashtra",
    date: "12 August 2026",
    category: "IEEE Project Contest",
    image_url: "/images/profile/Project contest Certificate.pdf", // The image you uploaded to the public folder
    pdf_url:"/images/profile/Project contest Certificate.pdf",  // What downloads when they click the button
    description: "Participated in a national-level project contest and presented a Time-Multiplexed Neural Network project, conducted by IEEE Pune Section"
       },

     {
    title: "National-Level Hackathon – Smart Military Base Security System",
    issuer: "SIMATS Engineering",
    location: "Chennai, Tamil Nadu",
    date: "29 August 2026",
    category: "National Level Hackathon",
    image_url: "/images/profile/simats.jpeg", // The image you uploaded to the public folder
    pdf_url:"/images/profile/simats.jpeg",  // What downloads when they click the button
    description: "Participated in a national-level hackathon conducted by SIMATS Engineering, Chennai, and developed a Smart Military Base Security System"
       }
    
];

/* ============================================================
   EVENTS / PARTICIPATION
   ============================================================ */


export const events: EventItem[] = [
  {
    title: "Design Matrix",
    organizer: "Technical Council – VLSI Student Club",
    date: "July 2026",
    role: "Technical Lead & Event Coordinator",
    description:
      "Conducted a VLSI design challenge where participants identified faulty or irregular logic-gate configurations and implemented the corrected circuit as a complete working system."
  },
  {
    title: "Circuit Sprint",
    organizer: "Technical Council – VLSI Student Club",
    date: "August 2026",
    role: "Technical Lead & Event Coordinator",
    description:
      "Conducted a VLSI-based design challenge where participants developed a functional college-campus system addressing a given problem statement and its specified design constraints."
  },
    {
    title: "Yuva 2026 – National-Level VLSI Hackathon",
    organizer: "Technical Council – VLSI Student Club",
    date: "September 2026",
    role: "Technical Lead & Event Coordinator",
    description:
      "Conducted a national-level VLSI hackathon where participants developed hardware prototypes based on a given VLSI problem statement, with the best prototypes recognized through first, second and third cash prizes"
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
