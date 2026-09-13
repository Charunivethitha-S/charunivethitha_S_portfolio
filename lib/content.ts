import type { Certificate, Experience, Patent, Project, Publication, EventItem } from "./types";

/* ============================================================
   PROJECTS (6 FEATURED FPGA/VLSI + 6 ADDITIONAL HARDWARE)
   ============================================================ */

export const projects: Project[] = [
  /* ------------------------------------------------------------
     FEATURED 1: POST-QUANTUM ROOT-OF-TRUST
     ------------------------------------------------------------ */
  {
    slug: "root-of-trust",
    title: "HARDWARE-ACCELERATED POST-QUANTUM ROOT-OF-TRUST FOR 5G ENCLAVES",
    eyebrow: "POST-QUANTUM CRYPTOGRAPHY / HARDWARE SECURITY",
    patent_status: "PATENT FILED · RESEARCH ACCEPTED",
    summary:
      "Fully pipelined post-quantum SoC integrating TRNG, Kyber-1024 MLWE KEM, and ChaCha20 stream cipher with tamper-resistant key storage and secure boot for 5G NR authentication.",
    description:
      "Architected and implemented a fully pipelined, post-quantum cryptographic Root-of-Trust SoC on Xilinx Zynq platforms for secure 5G NR enclave authentication. Integrated hardware-accelerated TRNG, Kyber-1024 MLWE Key Encapsulation Mechanism with NTT butterfly arithmetic, HKDF RFC 5869 key derivation, and an unrolled ChaCha20 cipher datapath. Verified against NIST test vectors, the FPGA hardware pipeline achieves an end-to-end execution latency of 4.50 µs across 450 clock cycles, delivering a 2,733× speedup over an ARM Cortex-A53 processor baseline with zero software runtime overhead.",
    category: "Hardware Security",
    timeline: "2025 — 2026",
    hardware: [
      "Zynq UltraScale+ KCU106",
      "Xilinx Zynq-7000 (ZedBoard)",
      "ARM Cortex-A53",
      "Ring Oscillator TRNG Core"
    ],
    software: [
      "Xilinx Vivado ML Edition",
      "Vitis HLS",
      "ModelSim Simulation",
      "Bare-Metal C Driver"
    ],
    technologies: [
      "Verilog HDL",
      "Kyber-1024 MLWE",
      "ChaCha20 Stream Cipher",
      "HKDF RFC 5869",
      "NTT Butterfly Multiplier",
      "SHA-256 Engine",
      "AXI4-Lite & AXI4-Stream"
    ],
    metrics: [
      { value: "2,733×", label: "Measured Throughput Gain over ARM Cortex-A53" },
      { value: "4.50 µs", label: "Total Hardware Pipeline Latency (450 Cycles)" },
      { value: "Kyber-1024", label: "Quantum-Resistant MLWE Key Encapsulation" },
      { value: "Wire-Speed", label: "ChaCha20 / HKDF Stream Cipher Throughput" }
    ],
    achievements: [
      "Patent Filed: Hardware Architecture for Cryptographic Key Derivation Pipeline Implementing RFC 5869-Compliant HKDF with Unrolled ChaCha20 Cipher (2026).",
      "Research Paper Accepted at ICSEIS 2026 (NIT Warangal) and IEEE IGNITE'2026.",
      "Achieved verified 2,733× speedup: completed end-to-end PQC handshake in 4.50 µs (450 cycles) compared to 12,300.00 µs on ARM Cortex software.",
      "Designed modular Verilog RTL stack: top_pqc_gateway, kyber_kem_lite, ntt_butterfly, hkdf_engine, chacha20_core, sha256_core, and trng_ro with AXI4 interconnects.",
      "Live Hardware Verified: Demonstrated successful 5G transaction authentication and signature verification on live Zynq hardware testbench."
    ],
    gallery: [
      {
        url: "/images/profile/pqc_benchmark.png",
        caption: "Live FPGA Hardware Execution: Verified 5G transaction authentication & measured 2,733× speedup (4.50 µs total pipeline latency)."
      },
      {
        url: "/images/profile/pqc_block_design.png",
        caption: "Vivado Block Design: ZYNQ7 Processing System integrated with AXI SmartConnect, Event Timer IP, and System Reset controllers."
      },
      {
        url: "/images/profile/pqc_hierarchy.png",
        caption: "Vivado RTL Design Hierarchy: Modular hardware breakdown (top_pqc_gateway, kyber_kem_lite, ntt_butterfly, hkdf_engine, chacha20_core, trng_ro)."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: true
  },

  /* ------------------------------------------------------------
     FEATURED 2: AGRINN INT8 ACCELERATOR
     ------------------------------------------------------------ */
  {
    slug: "agrinn",
    title: "AGRINN: 100K-NEURON INT8 NEURAL NETWORK ACCELERATOR",
    eyebrow: "AI HARDWARE / ZYNQ-7020",
    patent_status: "HARDWARE PROTOTYPE VERIFIED",
    summary:
      "16-core INT8 MAC systolic array accelerator with custom DMA engine and bare-metal firmware delivering real-time edge inference at <10 ms latency.",
    description:
      "Designed and prototyped a 16-core INT8 Multiply-Accumulate (MAC) 2D systolic array accelerator on Xilinx Zynq-7020. Features a custom high-throughput DMA engine for automated tensor movement and dual AXI4-Lite/AXI4-Stream interconnects. Incorporates post-training INT8 quantization to achieve a 4× reduction in memory footprint with under 1% classification accuracy degradation, executing bare-metal firmware with zero operating system dependency.",
    category: "AI Hardware",
    timeline: "2025",
    hardware: [
      "Xilinx Zynq-7020 (ZedBoard)",
      "16-Core Systolic MAC Array",
      "Custom Scatter-Gather DMA",
      "Dual-Port Block RAM"
    ],
    software: [
      "Xilinx Vivado",
      "Vitis Embedded Toolchain",
      "Bare-Metal C Firmware",
      "Python / PyTorch Quantization"
    ],
    technologies: [
      "Systolic Array Architecture",
      "INT8 Post-Training Quantization",
      "AXI4-Stream Protocol",
      "Verilog HDL",
      "Hardware-Software Co-Design"
    ],
    metrics: [
      { value: "<10 ms", label: "Real-Time Edge Inference Latency" },
      { value: "4×", label: "Memory Compression (<1% Accuracy Loss)" },
      { value: "16-Core", label: "Parallel Systolic MAC Processing Units" },
      { value: "0 MB", label: "Zero OS / Zero SD-Card Overhead" }
    ],
    achievements: [
      "Designed and verified custom 16-core INT8 systolic tensor processing datapath running on Xilinx Zynq-7020.",
      "Integrated bare-metal C driver running on ARM Cortex-A9 cores for sub-10 ms deterministic inference.",
      "Achieved 4× memory footprint reduction through bit-accurate INT8 fixed-point quantization."
    ],
    gallery: [
      {
        url: "/images/profile/agrinn_arch.png",
        caption: "Systolic Array Datapath Architecture: 16-core INT8 MAC grid with weight-stationary dataflow."
      },
      {
        url: "/images/profile/agrinn_waveform.png",
        caption: "Vivado Functional Simulation: AXI4-Stream DMA burst transfer and pipelined MAC execution."
      },
      {
        url: "/images/profile/agrinn_terminal.png",
        caption: "Bare-Metal Hardware Execution: Measured execution latency and inference accuracy validation."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: true
  },

  /* ------------------------------------------------------------
     FEATURED 3: ZERO-LATENCY NEURAL ENGINE
     ------------------------------------------------------------ */
  {
    slug: "zero-latency-neural-engine",
    title: "ZERO-LATENCY COMBINATIONAL NEURAL ENGINE FOR TASK MIGRATION",
    eyebrow: "NEURAL LOGIC / ARTIX-7",
    patent_status: "ZERO-CLOCK ARCHITECTURE",
    summary:
      "Zero clock-cycle latency combinational neural inference engine with ~5 ns propagation delay enabling real-time multi-core thermal stress prediction for DVFS processors.",
    description:
      "Architected a clockless, purely combinational neural inference engine implemented on Basys 3 (Xilinx Artix-7). By eliminating sequential registers and DSP slices in favor of unrolled combinational lookup and boolean logic gates, the architecture computes neural predictions within a 5 ns propagation delay. Deployed for real-time multicore thermal stress forecasting, enabling preemptive task migration and dynamic voltage/frequency scaling (DVFS).",
    category: "AI Hardware",
    timeline: "2025",
    hardware: [
      "Basys 3 (Artix-7 FPGA)",
      "Combinational Neural Datapath",
      "Multi-Core Thermal Sensor Matrix"
    ],
    software: [
      "Xilinx Vivado ML",
      "Verilog HDL",
      "Timing Analyzer (Static Timing)",
      "MATLAB Modeling"
    ],
    technologies: [
      "Clockless Combinational Logic",
      "Unrolled Neural Syntheses",
      "DVFS Thermal Management",
      "Low-Power RTL Optimization"
    ],
    metrics: [
      { value: "~5 ns", label: "Combinational Propagation Delay" },
      { value: "0 Cycle", label: "Zero Sequential Clock-Cycle Overhead" },
      { value: "Sub-mW", label: "Ultra-Low Dynamic Power Dissipation" },
      { value: "100%", label: "Real-Time Thermal Preemption Guarantee" }
    ],
    achievements: [
      "Eliminated clock tree distribution networks to deliver pure combinational inference in ~5 ns.",
      "Synthesized directly onto Basys 3 FPGA with minimal LUT utilization and zero DSP slice consumption.",
      "Demonstrated instantaneous thermal spike prediction for preemptive multi-core processor throttling."
    ],
    gallery: [
      {
        url: "/images/profile/zero_latency_schematic.png",
        caption: "RTL Schematic: Synthesized pure combinational logic network for clockless neural inference."
      },
      {
        url: "/images/profile/zero_latency_waveform.png",
        caption: "Post-Route Timing Simulation: Measured propagation delay showing valid output within ~5 ns."
      },
      {
        url: "/images/profile/zero_latency_thermal.png",
        caption: "Hardware Verification: Multicore thermal stress testbench with real-time preemption response."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: true
  },

  /* ------------------------------------------------------------
     FEATURED 4: 100-NEURON SPIKING NEURAL NETWORK
     ------------------------------------------------------------ */
  {
    slug: "snn",
    title: "100-NEURON SPIKING NEURAL NETWORK (TIME-MULTIPLEXED)",
    eyebrow: "NEUROMORPHIC / ARTIX-7",
    patent_status: "DSP-FREE FPGA ARCHITECTURE",
    summary:
      "DSP-free SNN using the LIF neuron model with time-division-multiplexed MAC architecture, achieving 2 us evaluation latency at <1% FPGA utilization.",
    description:
      "Architected a neuromorphic Spiking Neural Network implementing 100 Leaky Integrate-and-Fire (LIF) neurons on a Xilinx Artix-7 FPGA. Employs a time-division-multiplexed (TDM) arithmetic pipeline that reuses shared fixed-point subtractor and membrane potential accumulators, completely avoiding DSP slice consumption. Evaluates all 100 neurons within 2 µs while consuming less than 1% of the FPGA fabric, enabling scalable sub-milliwatt edge intelligence.",
    category: "Neuromorphic",
    timeline: "2025",
    hardware: [
      "Artix-7 XC7A35T FPGA",
      "LIF Membrane Potential Registers",
      "TDM Arithmetic Multiplexer"
    ],
    software: [
      "Xilinx Vivado",
      "Verilog HDL",
      "ModelSim Logic Simulator",
      "Python SNN Simulator"
    ],
    technologies: [
      "Leaky Integrate-and-Fire (LIF)",
      "Time-Division Multiplexing (TDM)",
      "Event-Driven Spike Processing",
      "DSP-Free Fixed-Point Arithmetic"
    ],
    metrics: [
      { value: "2 µs", label: "Full 100-Neuron Layer Evaluation Time" },
      { value: "<1%", label: "Artix-7 FPGA Fabric Resource Utilization" },
      { value: "0 DSP", label: "Pure LUT-Based Arithmetic (Zero DSP Usage)" },
      { value: "10K+", label: "Scalable Neuron Architecture Capacity" }
    ],
    achievements: [
      "Developed custom TDM hardware reuse architecture reducing resource consumption to <1% on Artix-7.",
      "Achieved sub-milliwatt always-on event-driven computing with 2 µs inference cycle time.",
      "Presented hardware architecture at national-level technical contests and research venues."
    ],
    gallery: [
      {
        url: "/images/profile/snn_datapath.png",
        caption: "LIF Datapath Architecture: Time-multiplexed membrane potential update and spike generator."
      },
      {
        url: "/images/profile/snn_simulation.png",
        caption: "ModelSim Spike Waveform: Discrete spike train firing and membrane potential decay dynamics."
      },
      {
        url: "/images/profile/snn_resource.png",
        caption: "Vivado Synthesis Report: Resource utilization showing <1% LUT slice and 0 DSP slice footprint."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: true
  },

  /* ------------------------------------------------------------
     FEATURED 5: FPGA NoC HEALTH SENSOR FUSION
     ------------------------------------------------------------ */
  {
    slug: "fpga-noc-health-fusion",
    title: "FPGA-ACCELERATED NETWORK-ON-CHIP (NoC) ARCHITECTURE FOR REAL-TIME HEALTH SENSOR FUSION",
    eyebrow: "NETWORK-ON-CHIP / BIOMEDICAL SOC",
    patent_status: "SYSTEM PROTOTYPED",
    summary:
      "Scalable hardware-accelerated health monitoring system utilizing a 2x2 Network-on-Chip (NoC) architecture on Zynq-7000 FPGA with ESP32 edge telemetry.",
    description:
      "This project presents a scalable, hardware-accelerated health monitoring system utilizing a 2x2 Network-on-Chip (NoC) architecture implemented on a Zynq-7000 FPGA. The system aggregates real-time physiological and environmental data—including heart rate, temperature, and motion—via an ESP32 edge node. Data is transmitted to the FPGA, where the NoC routers efficiently parallelize packet delivery for real-time sensor fusion and health index calculation. This distributed hardware approach significantly reduces latency, offering a robust, low-power framework for next-generation edge-based biomedical telemetry devices.",
    category: "FPGA & SoC",
    timeline: "2025 — 2026",
    hardware: [
      "Xilinx Zynq-7000 (ZedBoard)",
      "ESP32 Edge Microcontroller",
      "MAX30102 PPG Heart Rate Sensor",
      "MPU6050 6-Axis IMU & Temp Sensors",
      "2x2 Mesh NoC Router Fabric"
    ],
    software: [
      "Xilinx Vivado ML",
      "Verilog HDL",
      "Arduino IDE (ESP32 Driver)",
      "Vitis Embedded C",
      "UART / AXI Interconnect"
    ],
    technologies: [
      "Network-on-Chip (NoC) Routing",
      "Packet-Switched Distributed Mesh",
      "Real-Time Sensor Fusion",
      "FPGA Hardware Acceleration",
      "Biomedical Telemetry"
    ],
    metrics: [
      { value: "2x2 Mesh", label: "Parallel Packet-Switched NoC Topology" },
      { value: "Sub-ms", label: "Multi-Sensor Fusion Latency on FPGA" },
      { value: "Real-Time", label: "Continuous Heart Rate & Motion Index" },
      { value: "Low-Power", label: "Optimized Edge Telemetry Framework" }
    ],
    achievements: [
      "Architected custom 2x2 packet-switched NoC router fabric with virtual channels in Verilog HDL.",
      "Integrated ESP32 telemetry gateway feeding multi-parameter biometric sensor streams to Zynq FPGA.",
      "Demonstrated parallel hardware sensor fusion delivering instantaneous composite health score outputs."
    ],
    gallery: [
      {
        url: "/images/profile/noc_arch.png",
        caption: "2x2 Mesh NoC Architecture: Pipelined XY routing fabric and packet arbitration logic."
      },
      {
        url: "/images/profile/noc_fpga_board.png",
        caption: "Hardware Integration Testbench: Zynq-7000 FPGA interfacing with ESP32 sensor acquisition node."
      },
      {
        url: "/images/profile/noc_sensor_stream.png",
        caption: "Real-Time Sensor Telemetry: Concurrent streaming of PPG, temperature, and 6-axis IMU data."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: true
  },

  /* ------------------------------------------------------------
     FEATURED 6: HKDF-CHACHA20 HARDWARE PIPELINE
     ------------------------------------------------------------ */
  {
    slug: "hkdf-chacha20",
    title: "HKDF-CHACHA20 HARDWARE ENCRYPTION PIPELINE",
    eyebrow: "CRYPTOGRAPHIC HARDWARE / ARTIX-7",
    patent_status: "PATENT FILED · NIST VALIDATED",
    summary:
      "RFC 5869-compliant HKDF key derivation pipeline with unrolled 20-round ChaCha20 cipher achieving wire-speed encryption verified against NIST test vectors.",
    description:
      "Implemented an RFC 5869-compliant HKDF (HMAC-based Extract-and-Expand Key Derivation Function) with an unrolled 20-round ChaCha20 symmetric encryption pipeline on Xilinx Artix-7. The architecture achieves wire-speed throughput for secure 5G NR enclaves and IoT applications, fully validated through bit-accurate functional verification against official NIST test vectors.",
    category: "Hardware Security",
    timeline: "2025 — 2026",
    hardware: [
      "Artix-7 FPGA (XC7A35T)",
      "Unrolled ChaCha20 Quarter-Round Pipeline",
      "HMAC-SHA256 Key Engine"
    ],
    software: [
      "Xilinx Vivado Simulator",
      "Verilog HDL",
      "NIST Testbenches",
      "Python Bit-Accurate Verification Model"
    ],
    technologies: [
      "HKDF RFC 5869",
      "ChaCha20 Stream Cipher",
      "Pipelined Quarter-Round Logic",
      "NIST Cryptographic Verification"
    ],
    metrics: [
      { value: "Wire-Speed", label: "Encryption Throughput on Artix-7" },
      { value: "NIST Vector", label: "100% Bit-Accurate Cryptographic Validation" },
      { value: "20-Round", label: "Fully Unrolled Pipelined Architecture" },
      { value: "Patent Filed", label: "Hardware Key Generation Architecture" }
    ],
    achievements: [
      "Patent Filed: Implementation of HKDF for ChaCha20 Key Generation (2026).",
      "Research Paper Accepted at IEEE IGNITE'2026 and presented at international conferences.",
      "Achieved verified bit-accurate match against official NIST Special Publication test vectors."
    ],
    gallery: [
      {
        url: "/images/profile/chacha20_pipeline.png",
        caption: "ChaCha20 Architecture: 20-round unrolled quarter-round datapath with matrix rotation logic."
      },
      {
        url: "/images/profile/hkdf_nist_verify.png",
        caption: "NIST Verification Testbench: Bit-accurate functional validation against NIST test vectors."
      },
      {
        url: "/images/profile/chacha20_vivado.png",
        caption: "Vivado Implementation Summary: Clock frequency Fmax and timing slack closure."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: true
  },

  /* ============================================================
     ADDITIONAL HARDWARE & APPLIED PROJECTS (CAROUSEL)
     ============================================================ */

  /* ------------------------------------------------------------
     ADDITIONAL 1: ANALOG CIRCUITS LAB
     ------------------------------------------------------------ */
  {
    slug: "analog-circuits-lab",
    title: "DISCRETE ANALOG & ELECTRONIC CIRCUIT LABORATORY PROTOTYPES",
    eyebrow: "ANALOG ELECTRONICS / HARDWARE LAB",
    summary:
      "Hardware prototyping of discrete analog circuits including BJT amplifiers, operational amplifiers, multivibrators, and active filters using discrete components.",
    description:
      "Designed and experimentally characterized essential discrete analog and linear integrated electronic circuits. Prototyped single-stage and multistage BJT amplifiers, inverting/non-inverting operational amplifier configurations, astable and monostable multivibrators, active RC filters, and voltage regulators on breadboard test setups with real-time oscilloscope verification.",
    category: "Analog Electronics",
    timeline: "2023 — 2024",
    hardware: [
      "Bipolar Junction Transistors (BJT)",
      "Op-Amp ICs (LM741 / LM358)",
      "NE555 Timers",
      "Passive RLC Networks",
      "Oscilloscope & Function Generator"
    ],
    software: [
      "Multisim Circuit Simulation",
      "LTspice",
      "Bench Oscilloscope Acquisition"
    ],
    technologies: [
      "Small-Signal Analysis",
      "Amplifier Biasing & Frequency Response",
      "Multivibrator Timing Design",
      "Active Filter Synthesis"
    ],
    metrics: [
      { value: "10+ Circuits", label: "Hardware Laboratory Implementations" },
      { value: "Rigorous", label: "Oscilloscope Waveform Verification" }
    ],
    achievements: [
      "Constructed and tested discrete BJT common-emitter and common-collector amplifiers with measured gain verification.",
      "Built astable and monostable multivibrator circuits with precise frequency and duty-cycle control."
    ],
    gallery: [
      {
        url: "/images/profile/analog_lab_1.png",
        caption: "Breadboard Prototype: Discrete BJT amplifier and operational amplifier biasing circuit."
      },
      {
        url: "/images/profile/analog_lab_2.png",
        caption: "Oscilloscope Waveform: Multivibrator output square wave and timing capacitor charge dynamics."
      },
      {
        url: "/images/profile/analog_lab_3.png",
        caption: "Laboratory Testbench: Function generator input sweep and frequency response analysis."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: false
  },

  /* ------------------------------------------------------------
     ADDITIONAL 2: DIGITAL IC TRAINER
     ------------------------------------------------------------ */
  {
    slug: "digital-ic-trainer",
    title: "DIGITAL LOGIC IC LABORATORY & DIGITAL CIRCUIT ARCHITECTURE VERIFICATION",
    eyebrow: "DIGITAL LOGIC / HARDWARE VERIFICATION",
    summary:
      "Implementation and truth-table verification of combinational and sequential digital circuits using 74-series TTL logic ICs on digital trainer kits.",
    description:
      "Implemented, wired, and verified foundational combinational and sequential digital logic systems using standard 74-series TTL and CMOS integrated circuits on digital IC trainer kits. Realized adders, subtractors, magnitude comparators, multiplexers, decoders, flip-flops, synchronous/asynchronous binary counters, and shift registers with hardware logic analyzers.",
    category: "Digital Logic",
    timeline: "2023 — 2024",
    hardware: [
      "Digital IC Trainer Kit",
      "74-Series TTL Logic ICs",
      "74LS00, 74LS86, 74LS74, 74LS193",
      "Logic Probe & LED State Indicators"
    ],
    software: [
      "Logic Gate Simulation",
      "Truth Table Verification Tools"
    ],
    technologies: [
      "Combinational Logic Synthesis",
      "Sequential State Machines",
      "Boolean Minimization (K-Maps)",
      "TTL / CMOS Interfacing"
    ],
    metrics: [
      { value: "100%", label: "Hardware Truth-Table Accuracy" },
      { value: "15+ ICs", label: "Standard TTL Logic Family Implementations" }
    ],
    achievements: [
      "Designed and wired 4-bit synchronous up/down counters and shift registers on hardware trainer kits.",
      "Verified complex multi-level combinational boolean expressions with hardware logic probes."
    ],
    gallery: [
      {
        url: "/images/profile/digital_ic_1.png",
        caption: "Digital IC Trainer Kit: Complete wiring of 74-series combinational logic circuitry."
      },
      {
        url: "/images/profile/digital_ic_2.png",
        caption: "Sequential Logic Setup: Master-slave flip-flops and 4-bit binary counter verification."
      },
      {
        url: "/images/profile/digital_ic_3.png",
        caption: "Hardware Verification: Logic level state LEDs and switch pulse clock testing."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: false
  },

  /* ------------------------------------------------------------
     ADDITIONAL 3: SMART IRRIGATION (ARDUINO)
     ------------------------------------------------------------ */
  {
    slug: "smart-irrigation-arduino",
    title: "AUTOMATED SMART IRRIGATION & SOIL MOISTURE REGULATION SYSTEM",
    eyebrow: "EMBEDDED SYSTEMS / APPLIED AUTOMATION",
    summary:
      "Microcontroller-driven automated irrigation system utilizing capacitive soil moisture sensing, relay control, submersible water pump, and alert indicators.",
    description:
      "Engineered an automated embedded smart irrigation system using an Arduino microcontroller to optimize agricultural water usage. Integrates calibrated analog soil moisture sensors, a 5V optocoupled relay module, a 12V DC submersible water pump, audible piezo buzzers, and multi-color LED status indicators. Implemented real-time hysteresis control algorithms to prevent rapid pump oscillation and conserve water.",
    category: "Embedded Systems",
    timeline: "2024",
    hardware: [
      "Arduino Microcontroller",
      "Capacitive Soil Moisture Sensor",
      "5V Optocoupled Relay Module",
      "12V DC Submersible Pump",
      "Piezo Buzzer & Indicator LEDs"
    ],
    software: [
      "Arduino IDE",
      "Embedded C / C++",
      "Sensor Calibration Firmware"
    ],
    technologies: [
      "Closed-Loop Hysteresis Control",
      "Analog-to-Digital Sensor Conditioning",
      "Relay Actuation & Power Protection"
    ],
    metrics: [
      { value: "Automated", label: "Closed-Loop Moisture Regulation" },
      { value: "40%", label: "Estimated Agricultural Water Savings" }
    ],
    achievements: [
      "Developed reliable threshold-based pump control algorithm with built-in hysteresis to prevent relay chattering.",
      "Built self-contained bench prototype demonstrating automated dry-soil detection and pump shut-off."
    ],
    gallery: [
      {
        url: "/images/profile/irrigation_arduino_1.png",
        caption: "Embedded Hardware Setup: Arduino controller interfaced with relay module and submersible pump."
      },
      {
        url: "/images/profile/irrigation_arduino_2.png",
        caption: "Sensor Calibration: Soil moisture probe testing across saturated and dry soil samples."
      },
      {
        url: "/images/profile/irrigation_arduino_3.png",
        caption: "System Execution: Automatic pump actuation and LED/buzzer alert status."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: false
  },

  /* ------------------------------------------------------------
     ADDITIONAL 4: STUDENT PERFORMANCE PORTAL
     ------------------------------------------------------------ */
  {
    slug: "student-performance-portal",
    title: "STUDENT PERFORMANCE & ATTENDANCE ANALYTICS MANAGEMENT PORTAL",
    eyebrow: "FULL-STACK WEB / CODE-A-THON",
    summary:
      "Web-based academic monitoring portal tracking real-time student attendance, internal assessment scores, grade distributions, and institutional analytics.",
    description:
      "Developed a full-stack student academic tracking portal developed during the institutional Code-a-thon. Features responsive dashboards for faculty and students to log attendance, calculate cumulative grade metrics, identify academic risk through threshold warnings, and export institutional performance reports with role-based access control.",
    category: "Software & Web",
    timeline: "2026",
    hardware: [
      "Cloud Web Hosting Server",
      "Workstation Test Environment"
    ],
    software: [
      "React / Next.js",
      "Node.js / Express",
      "PostgreSQL / MongoDB Database",
      "RESTful API Architecture"
    ],
    technologies: [
      "Full-Stack Web Development",
      "Role-Based Access Control (RBAC)",
      "Real-Time Analytics Dashboard",
      "Automated Report Generation"
    ],
    metrics: [
      { value: "Code-a-thon", label: "Developed & Presented at Hackathon" },
      { value: "Real-Time", label: "Attendance & Internal Mark Analytics" }
    ],
    achievements: [
      "Built complete full-stack portal with automated student attendance analytics and grade tracking.",
      "Presented and demonstrated functional platform during the SRM IST Code-a-thon 2026."
    ],
    gallery: [
      {
        url: "/images/profile/student_portal_1.png",
        caption: "Analytics Dashboard: Real-time student attendance percentages and grade distribution."
      },
      {
        url: "/images/profile/student_portal_2.png",
        caption: "Faculty Portal: Course management, internal mark entry, and performance charts."
      },
      {
        url: "/images/profile/student_portal_3.png",
        caption: "Database Architecture: Relational data schema for student records and course mappings."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: false
  },

  /* ------------------------------------------------------------
     ADDITIONAL 5: HILLY REGION SMART IRRIGATION (ESP8266)
     ------------------------------------------------------------ */
  {
    slug: "hilly-irrigation-esp8266",
    title: "IoT PRECISION SMART IRRIGATION SYSTEM FOR TERRACED & HILLY REGIONS",
    eyebrow: "IoT & EDGE COMPUTING / HACKATHON",
    patent_status: "HACKATHON INNOVATION",
    summary:
      "IoT-enabled precision irrigation system tailored for stepped terrain using ESP8266 Wi-Fi SoC, 0.96\" I2C OLED display, and multi-sensor environmental telemetry.",
    description:
      "Designed an IoT-enabled precision irrigation system specifically engineered for terraced and hilly agricultural terrains. Utilizing an ESP8266 Wi-Fi SoC, the system monitors soil moisture gradients, ambient temperature, and relative humidity across stepped elevation zones. Real-time telemetry is displayed on an onboard 0.96\" I2C OLED display while actuating zone-specific relay pumps for sustainable agricultural resource allocation.",
    category: "IoT & Automation",
    timeline: "2026",
    hardware: [
      "NodeMCU ESP8266 Wi-Fi SoC",
      "0.96\" I2C OLED Display (SSD1306)",
      "Capacitive Soil Moisture Probes",
      "DHT11 Humidity & Temp Sensor",
      "Multi-Channel Relay Module"
    ],
    software: [
      "Arduino IDE / ESP Core",
      "Adafruit GFX & SSD1306 Libraries",
      "IoT Cloud Telemetry Protocol"
    ],
    technologies: [
      "IoT Wireless Telemetry",
      "I2C Display Interfacing",
      "Terraced Agricultural Automation",
      "Multi-Parameter Environmental Sensing"
    ],
    metrics: [
      { value: "ESP8266", label: "Wi-Fi Connected Microcontroller Platform" },
      { value: "0.96\" OLED", label: "Local Real-Time Telemetry Readout" },
      { value: "Multi-Zone", label: "Terraced Elevation Gradient Support" }
    ],
    achievements: [
      "Selected and presented at TNWISE–TANCAM Hackathon on Smart Agriculture and Rural Innovation.",
      "Engineered autonomous multi-sensor telemetry displaying live moisture and humidity readouts."
    ],
    gallery: [
      {
        url: "/images/profile/irrigation_esp_1.png",
        caption: "IoT Node Hardware: ESP8266 connected with 0.96\" OLED, relay, and capacitive sensor."
      },
      {
        url: "/images/profile/irrigation_esp_2.png",
        caption: "Live OLED Readout: Real-time display of soil moisture percentage, humidity, and pump status."
      },
      {
        url: "/images/profile/irrigation_esp_3.png",
        caption: "Terraced Terrain Testbench: Elevation gradient simulation for zoned water distribution."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
    featured: false
  },

  /* ------------------------------------------------------------
     ADDITIONAL 6: SENTINEL GROUND SEISMIC PERIMETER SYSTEM
     ------------------------------------------------------------ */
  {
    slug: "sentinel-ground-seismic",
    title: "SENTINEL GROUND: REAL-TIME SEISMIC SIGNATURE CLASSIFICATION FOR PERIMETER SECURITY",
    eyebrow: "ACOUSTIC / SEISMIC DEFENSE ELECTRONICS",
    patent_status: "SECURITY SYSTEM INNOVATION",
    summary:
      "Non-visual perimeter security system capturing ground-borne seismic signatures via piezoelectric sensors for real-time edge friend-or-foe acoustic classification.",
    description:
      "Sentinel Ground is an IoT-enabled perimeter security system that operates entirely independent of optical cameras and weather visibility constraints. The system captures micro ground-borne seismic and vibrational signatures via piezoelectric geophone transducers, processing them through a lightweight real-time digital filtering and frequency-domain feature extraction pipeline for instantaneous friend-or-foe perimeter intrusion classification.",
    category: "Defense Electronics",
    timeline: "2026",
    hardware: [
      "Piezoelectric Seismic Transducers",
      "Low-Noise Analog Front-End (AFE)",
      "Operational Amplifier Signal Conditioner",
      "High-Speed ADC & Edge MCU Platform"
    ],
    software: [
      "Embedded C / DSP Algorithms",
      "Real-Time Peak & Frequency Extractors",
      "Threshold Classification Model"
    ],
    technologies: [
      "Ground-Borne Seismic Sensing",
      "Non-Optical Perimeter Surveillance",
      "Acoustic & Vibration Signal Processing",
      "Friend-or-Foe Intrusion Discrimination"
    ],
    metrics: [
      { value: "0 Camera", label: "100% Non-Optical All-Weather Surveillance" },
      { value: "Real-Time", label: "Instantaneous Edge Seismic Classification" },
      { value: "Low-Noise", label: "High-Sensitivity Analog Conditioning" }
    ],
    achievements: [
      "Developed and showcased at SIMATS National-Level Hackathon for Smart Military Base Security.",
      "Engineered camera-independent ground vibration detection pipeline resistant to darkness and smoke."
    ],
    gallery: [
      {
        url: "/images/profile/sentinel_seismic_1.png",
        caption: "Sensor Front-End: Piezoelectric seismic transducer and low-noise analog amplifier stage."
      },
      {
        url: "/images/profile/sentinel_seismic_2.png",
        caption: "Signal Oscilloscope Trace: Real-time ground vibrational impulse and decay envelope."
      },
      {
        url: "/images/profile/sentinel_seismic_3.png",
        caption: "Classification Terminal: Edge detection output discriminating footsteps and vehicular motion."
      }
    ],
    github_url: "https://github.com/Charunivethitha-S/",
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
    image_url: "/images/profile/classx.jpeg",
    pdf_url: "/images/profile/classx.jpeg",
    description:
      "Secured First Rank in Class X, achieving the highest academic performance in the school."
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
      "Successfully completed a five-day national-level workshop on drone assembling and programming."
  },
  {
    title: "Quantitative Aptitude for Placements – Udemy",
    issuer: "Udemy",
    location: "Online",
    date: "April 2025",
    category: "Placement Preparation",
    image_url:"/images/profile/udemy.jpeg",
    pdf_url: "/images/profile/udemy.jpeg",
    description:
      "Enrolled in a Udemy course on quantitative aptitude to strengthen numerical reasoning and problem-solving skills."
  },
  {
    title: "Yuva 2025 – National-Level 24-Hour Hackathon",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "16-17 Sep 2025",
    category: "Hackathon",
    image_url: "/images/profile/yuva.jpeg",
    pdf_url: "/images/profile/yuva.jpeg",
    description:
      "Participated in the YUVA 24-Hour Hackathon as part of Team Watt-a-team."
  },
  {
    title: "Faculty Development Program – Antenna Design for Advanced 5G Applications",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "24-25 September 2025",
    category: "Faculty Development Program",
    image_url: "/images/profile/5g_application.jpeg",
    pdf_url: "/images/profile/5g_application.jpeg",
    description:
      "Attended a five-day Faculty Development Program on antenna design for advanced 5G applications."
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
      "Presented the paper “Implementation of HKDF for ChaCha20 Key Generation” at the First International Conference on Innovations in Electronics and Communication (ICIES’25)."
  },
  {
    title: "Industry Connect Student Training Program – Frequency Selective Surfaces",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "27–28 November and 3–5 December 2025",
    category: "Industry Training",
    image_url: "/images/profile/industry training.jpeg",
    pdf_url: "/images/profile/industry training.jpeg",
    description:
      "Attended a five-day industry connect training program on exploring Frequency Selective Surfaces using CST Studio Suite."
  },
  {
    title: "VLSI Project Intern – CODEC Technologies",
    issuer: "CODEC Technologies",
    location: "Hyderabad, Telangana",
    date: "29 December 2025 to 29 January 2026",
    category: "Internship",
    image_url: "/images/profile/CodecTechnologies.jpeg",
    pdf_url: "/images/profile/CodecTechnologies.jpeg",
    description:
      "Completed a one-month VLSI project internship at CODEC Technologies, working on the implementation of digital circuits using Verilog HDL."
  },
  {
    title: "TNWISE–TANCAM Hackathon – Smart Agriculture & Rural Innovation",
    issuer: "Excellence for Advanced Manufacturing (TANCAM)",
    location: "Coimbatore, Tamil Nadu",
    date: "16 March 2026",
    category: "Hackathon",
    image_url: "/images/profile/tancam.jpeg",
    pdf_url: "/images/profile/tancam.jpeg",
    description:
      "Participated in the TNWISE–TANCAM Hackathon and developed a Smart Irrigation System for sustainable agricultural applications."
  },
  {
    title: "Code-a-thon – Student Performance & Attendance Monitoring System",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "18 March 2026",
    category: "Hackathon",
    image_url: "/images/profile/website.jpeg",
    pdf_url: "/images/profile/website.jpeg",
    description:
      "Participated in the Code-a-thon and developed a web-based Student Performance and Attendance Monitoring System."
  },
  {
    title: "SIH Innovate Ideathon 2K26 – Final Round Selection",
    issuer: "SRM Institute of Science and Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "18 March 2026",
    category: "Hackathon",
    image_url: "/images/profile/ideathon.jpeg",
    pdf_url: "/images/profile/ideathon.jpeg",
    description:
      "Selected for the final round of Smart India Hackathon (SIH) 2026 under the theme “IoT Automation”."
  },
  {
    title: "Hardware Research Intern – NIT Tiruchirappalli",
    issuer: "National Institute of Technology",
    location: "Tiruchirapalli, Tamil Nadu",
    date: "25 May 2026 - 25 June 2026",
    category: "Internship",
    image_url: "/images/profile/NIT.jpeg",
    pdf_url: "/images/profile/NIT.jpeg",
    description:
      "Completed a one-month hardware research internship at NIT Tiruchirappalli, working on neuromorphic computing and spiking neural-network architectures."
  },
  {
    title: "IEEE International Conference – Paper Presentation",
    issuer: "IEEE Pune Section",
    location: "Pune, Maharashtra",
    date: "17-19 June 2026",
    category: "IEEE Conference",
    image_url: "/images/profile/IEEE.jpeg",
    pdf_url: "/images/profile/IEEE.jpeg",
    description:
      "Presented the paper “Implementation of HKDF for ChaCha20 Key Generation” at the International IEEE Conference."
  },
  {
    title: "National-Level Project Contest – Time-Multiplexed Neural Network",
    issuer: "IEEE Pune Section",
    location: "Smt. Kashibai Navale College of Engineering, Pune, Maharashtra",
    date: "12 August 2026",
    category: "IEEE Project Contest",
    image_url: "/images/profile/Project contest Certificate.jpeg",
    pdf_url: "/images/profile/Project contest Certificate.jpeg",
    description:
      "Participated in a national-level project contest and presented a Time-Multiplexed Neural Network project."
  },
  {
    title: "National-Level Hackathon – Smart Military Base Security System",
    issuer: "SIMATS Engineering",
    location: "Chennai, Tamil Nadu",
    date: "29 August 2026",
    category: "National Level Hackathon",
    image_url: "/images/profile/simats.jpeg",
    pdf_url: "/images/profile/simats.jpeg",
    description:
      "Participated in a national-level hackathon and developed a Smart Military Base Security System."
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
      "Conducted a national-level VLSI hackathon where participants developed hardware prototypes based on a given VLSI problem statement, with the best prototypes recognized through first, second and third cash prizes."
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
