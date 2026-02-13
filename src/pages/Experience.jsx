// src/pages/Experience.jsx
import React from "react";
import LogoLoop from "../components/LogoLoop.jsx";
import {
  SiPython,
  SiReact,
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiAmazonwebservices,
  //SiAzuredevops,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiLinux,
  SiGnubash,
  //SiPowershell,
  SiC,
  SiCplusplus,
  SiMysql,
  SiJira,
  SiDatadog,
  SiHtml5,
} from "react-icons/si";


const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
    {children}
  </span>
);

const techLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiDjango />, title: "Django" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMysql />, title: "SQL" },
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  //{ node: <SiDocker />, title: "Docker" },
  { node: <SiGit />, title: "Git" },
  { node: <SiLinux />, title: "Linux" },
  { node: <SiGnubash />, title: "Bash" },
  //{ node: <SiPowershell />, title: "PowerShell" },
  { node: <SiC />, title: "C" },
  { node: <SiCplusplus />, title: "C++" },
  { node: <SiAmazonwebservices />, title: "AWS" },
  { node: <SiGooglecloud />, title: "GCP" },
  { node: <SiJira />, title: "Jira" },
  { node: <SiDatadog />, title: "Datadog" },
];


export default function Experience() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="pt-6 sm:pt-10">

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          Work Experience & Education
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          My professional experience in CloudOps, plus the coursework and
          skills I’ve built at the University of Toronto.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Co-op Card (Full Width) */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:col-span-2">
          {/* subtle hover glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FF9FFC]/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#5227FF]/10 blur-3xl" />
          </div>

          <div className="relative">
            
            <div className="text-xs font-semibold text-white/55">
              Aug 2024 – Aug 2025
            </div>

            <div className="mt-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Cloud Operations Engineer (Co-op) 
              </h2>
              <div className="mt-1 text-sm font-semibold text-white/70">
                Euna Solutions
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
              Supported multi-cloud production infrastructure (AWS, Azure, GCP)
              powering 15+ SaaS products. Focused on improving reliability,
              security posture, cost visibility, and operational efficiency
              across environments.
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>AWS</Pill>
              <Pill>Azure</Pill>
              <Pill>GCP</Pill>
              <Pill>Datadog</Pill>
              <Pill>Python</Pill>
              <Pill>Wiz</Pill>
              <Pill>Terraform</Pill>
              <Pill>Linux</Pill>
              <Pill>Powershell</Pill>
              <Pill>Bash</Pill>
              <Pill>CI/CD</Pill>
              <Pill>SOC 2</Pill>
              <Pill>Jira</Pill>
              <Pill>Incident Response</Pill>
              <Pill>Security Patching</Pill>
              <Pill>Technical Documentation</Pill>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            </p>

            <span className="text-white font-semibold ">
                Reliability & Production Engineering
              </span>{" "}
              
              {/* Bullet Points */}
            <ul className="mt-6 space-y-3 text-sm text-white/70 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Managed production cloud environments across AWS, Azure, and GCP with strict uptime and security requirements.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Engaged in incident triage, log analysis, and postmortems to identify root causes and implement long-term remediation.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Reduced alert fatigue and improved detection accuracy by refining Datadog monitors and thresholds.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Performed Linux-based debugging, service inspection, and network troubleshooting across distributed environments.
                </span>
              </li>
            </ul>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            </p>

              <span className="text-white font-semibold ">
                Security & Vulnerability Management
              </span>{" "}
              {/* Bullet Points */}
            <ul className="mt-6 space-y-3 text-sm text-white/70 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Remediated high-severity production vulnerabilities identified via Wiz, coordinating fixes across infrastructure and application layers.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Standardized and automated cross-cloud tagging strategy to improve product-level vulnerability visibility and ownership tracking.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Hardened IAM configurations and validated access controls across AWS and Azure environments.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Contributed directly to SOC 2 Type II audit by validating identity controls, infrastructure configurations, and remediation documentation.
                </span>
              </li>
            </ul>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            </p>

              <span className="text-white font-semibold ">
                Automation & Infrastructure Optimization
              </span>{" "}
              {/* Bullet Points */}
            <ul className="mt-6 space-y-3 text-sm text-white/70 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Automated recurring operational workflows using Python APIs, reducing repetitive support workload and improving response time by over 45%+.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Contributed to IaC practices using Terraform to ensure reproducibility across environments.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Created technical documentation outlining migration steps, infrastructure changes, and operational procedures.
                </span>
              </li>
            </ul>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            </p>

              <span className="text-white font-semibold ">
                Cloud Cost Visibility & FinOps
              </span>{" "}
              {/* Bullet Points */}
            <ul className="mt-6 space-y-3 text-sm text-white/70 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Queried AWS Cost & Usage Reports using Athena to extract product and environment-level usage insights.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Designed interactive QuickSight dashboards to visualize cost allocation, utilization trends, and anomalous spend spikes.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Identified underutilized resources and rightsizing opportunities to reduce waste.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Enabled product-level accountability by improving cost attribution through tagging governance.
                </span>
              </li>
            </ul>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            </p>

              <span className="text-white font-semibold ">
                Impact & Recognition
              </span>{" "}
              {/* Bullet Points */}
            <ul className="mt-6 space-y-3 text-sm text-white/70 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Rated 5/5 (“Outstanding”) for technical ownership, execution quality, and leadership initiative.
                </span>
              </li>
            </ul>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
            </p>
          </div>
        </div>

        {/* University Card (Full Width) */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:col-span-2">
          {/* subtle hover glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#5227FF]/10 blur-3xl" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF9FFC]/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="text-xs font-semibold text-white/55">
              BASc (Expected Apr 2026)
            </div>

            <div className="mt-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Computer Engineering
              </h2>
              <div className="mt-1 text-sm font-semibold text-white/70">
                University of Toronto
              </div>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70">
              Coursework and labs strengthened my foundations in algorithms,
              networks, databases, and embedded systems, and taught me how to
              reason clearly about systems, constraints, and real-world tradeoffs.
            </p>

            {/* Coursework */}
            <div className="mt-7">
              <h3 className="text-sm font-bold text-white/80">
                Relevant Coursework
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Algorithms & Data Structures</Pill>
                <Pill>Computer Networks I</Pill>
                <Pill>Computer Networks II</Pill>
                <Pill>Internetworking</Pill>
                <Pill>Databases</Pill>
                <Pill>Programming Languages</Pill>
                <Pill>Web Programming</Pill>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-7">
              <h3 className="text-sm font-bold text-white/80">
                Skills Built Through School
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>System design thinking</Pill>
                <Pill>Programming</Pill>
                <Pill>Debugging under constraints</Pill>
                <Pill>Networking fundamentals</Pill>
                <Pill>SQL + data modeling</Pill>
                <Pill>Algorithmic problem solving</Pill>
                <Pill>Team-based engineering</Pill>
                <Pill>Technical writing</Pill>
              </div>
            </div>

            {/* Optional: short bullets */}
            <ul className="mt-7 space-y-3 text-sm text-white/70 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Built strong fundamentals across software & hardware, with a
                  focus on practical labs and problem-driven learning.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>
                  Applied course concepts directly in projects and team environments.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h3 className="text-sm font-bold text-white/80">Tools & Technologies</h3>
          <div className="mt-3 relative overflow-hidden rounded-xl border border-white/10 bg-black/25 px-3 py-4">
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={26}
              gap={42}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#07060D"
              ariaLabel="Technology stack"
            />
          </div>
        </div>


      {/* Bottom note */}
      <div className="mt-10 text-sm text-white/50">
        Detailed course projects and technical highlights available upon request.
      </div>
    </div>
  );
}
