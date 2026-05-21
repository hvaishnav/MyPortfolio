import React from "react";
import {
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Server,
  Layout,
  Database,
  Cloud,
  Box,
  Code2,
  ChevronRight,
  Github,
} from "lucide-react";
import { motion } from "motion/react";
import profilePic from "./assets/profilepic.jpg";

const resumeData = {
  name: "Himanshu Vaishnav",
  title: "Senior Full Stack Developer",
  summary:
    "Senior Full Stack Developer with 6+ years of experience building scalable ERP and BPM platforms for enterprise clients including BlackRock. Specialized in modernizing legacy systems to cloud-native architectures using .NET Core, React, and Angular.",
  contact: {
    email: "himanshuvaishnav1818@gmail.com",
    phone: "+91 6263314739",
    linkedin: "https://www.linkedin.com/in/himanshu-vaishnav-4204a614b/", // Placeholder link
    github: "https://github.com", // Placeholder
    location: "Hyderabad, India",
    resumeUrl:
      "https://drive.google.com/file/d/1C8PrPzdd-RHBmDT3yOY-69qJemTUYJXH/view?usp=sharing", // Placeholder link
  },
  skills: [
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: [
        "C#",
        ".NET Core",
        "ASP.NET MVC",
        "Web API",
        "Entity Framework",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      items: [
        "React.js",
        "Angular 12+",
        "AngularJS",
        "TypeScript",
        "JavaScript",
        "Ionic Framework",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      items: [
        "SQL Server",
        "MySQL",
        "SSRS",
        "Crystal Reports",
        "Query Optimization",
      ],
    },
    {
      category: "Cloud/DevOps",
      icon: <Cloud className="w-5 h-5" />,
      items: [
        "Azure DevOps",
        "AWS (S3, RDS, Lambda)",
        "Docker",
        "CI/CD Pipelines",
        "Git/GitHub",
      ],
    },
    {
      category: "Architecture",
      icon: <Box className="w-5 h-5" />,
      items: [
        "Clean Architecture",
        "SOLID Principles",
        "Multi-Tenant Systems",
        "RBAC",
        "Agile/Scrum",
      ],
    },
  ],
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Actlogica Solutions Pvt. Ltd.",
      location: "Hyderabad",
      period: "Sep 2025 – Present",
      client: "BlackRock",
      highlights: [
        "Leading end-to-end architecture of Project Opmodal (BPM platform) with .NET Core and React.",
        "Improved business process visibility by 40% for stakeholders.",
        "Engineered a Multi-Tenant Architecture with RBAC for financial compliance.",
        "Integrated Azure DevOps pipelines for automated CI/CD deployment.",
      ],
    },
    {
      role: "Mid-Level Engineer (Lead)",
      company: "Force Intellect Pvt. Ltd.",
      location: "Bhilai",
      period: "Jan 2022 – Jul 2025",
      highlights: [
        "Spearheaded migration of legacy Windows applications to modern web/cloud architectures using Angular 12+ and .NET Core.",
        "Refactored SQL indexing strategies, reducing query execution times by 40% across production environments.",
        "Integrated AWS services for automated data backup and serverless scaling.",
        "Mentored 4 junior developers and introduced Agile workflows for improved team delivery.",
      ],
    },
    {
      role: "Junior Developer",
      company: "Force Intellect Pvt. Ltd.",
      location: "Bhilai",
      period: "Jun 2019 – Dec 2021",
      highlights: [
        "Developed core ERP modules serving 200+ daily active users using AngularJS and Ionic.",
        "Built analytics dashboards using SSRS and Crystal Reports, enabling data-driven decision making.",
        "Created robust SQL triggers and functions for high-transaction environments.",
      ],
    },
  ],
  education: {
    degree: "B.E. in Computer Science and Engineering",
    school: "Rungta College of Engineering & Technology, Bhilai",
    period: "Aug 2015 – Jun 2019",
    grade: "CGPA: 8.0/10",
  },
};

const SectionHeading = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: any;
}) => (
  <div className="flex items-center gap-3 mb-8">
    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
      {children}
    </h2>
    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header / Hero */}
      <header className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-12">
              <div className="flex-1">
                <motion.h1
                  className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {resumeData.name}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-blue-600 font-semibold uppercase tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {resumeData.title}
                </motion.p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                    id="contact-email-btn"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Me</span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-5 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                    href="https://drive.google.com/uc?export=download&id=1C8PrPzdd-RHBmDT3yOY-69qJemTUYJXH"
                    download="Himanshu_Vaishnav_Resume.pdf"
                    id="download-resume-btn"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-600 max-w-xl">
                  {resumeData.summary}
                </p>
                <div className="flex flex-wrap gap-y-3 gap-x-6 text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {resumeData.contact.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    {resumeData.contact.phone}
                  </div>
                  <a
                    href={resumeData.contact.linkedin}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="bg-blue-600 p-8 rounded-2xl text-white transform rotate-1 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-6 h-6" />
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {[
                    "Multi-tenant BPM platform architect",
                    "40% SQL optimization gains",
                    "Legacy to Cloud modernization expert",
                    "Led teams for enterprise-level delivery",
                  ].map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 shrink-0 text-blue-200" />
                      <span className="text-blue-50 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* Impact Stats - Added for HR Appeal */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              // label: "Scalable System Architecture",
              value: "Designed high-performance Systems",
              detail: "Osystems for enterprise applications",
              positive: true,
            },
            {
              // label: "Process Visibility",
              value: "Legacy to Modern Transformation",
              detail: "Modernized traditional systems using",
              positive: true,
            },
            {
              // label: "Legacy Migrations",
              value: "End-to-End Product Delivery",
              // valuePrefix: "",
              detail:
                "From Requirements -> Design -> Development -> Deployment",
              positive: true,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors"
            >
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layout className="w-32 h-32" />
              </div>
              {/* <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                {stat.label}
              </p> */}
              <h3 className="text-4xl font-extrabold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeading icon={Code2}>Technical Arsenal</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-200/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeading icon={Box}>Work History</SectionHeading>
          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-slate-200 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-slate-500 font-mono text-sm bg-slate-100 px-3 py-1 rounded-md">
                    {exp.period}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <ul className="space-y-3 text-slate-600">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-2.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    {exp.client && (
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                          Key Client
                        </p>
                        <p className="font-bold text-slate-700">{exp.client}</p>
                      </div>
                    )}
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                        Location
                      </p>
                      <p className="font-bold text-slate-700">{exp.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & More */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading icon={Box}>Education</SectionHeading>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-24 h-24 rotate-12" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {resumeData.education.degree}
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                {resumeData.education.school}
              </p>
              <div className="flex items-center justify-between text-slate-500 font-mono text-sm">
                <span>{resumeData.education.period}</span>
                <span className="font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                  {resumeData.education.grade}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Let's talk scale.</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I specialize in enterprise-grade platforms that require complex
              architecture, high performance, and robust security. Currently
              open to new opportunities to drive technical excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                id="footer-email-btn"
              >
                Hire Me
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a
                  href={resumeData.contact.linkedin}
                  className="text-slate-400 hover:text-white transition-colors"
                  id="social-linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={resumeData.contact.github}
                  className="text-slate-400 hover:text-white transition-colors"
                  id="social-github"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Himanshu Vaishnav. Built with React +
            Tailwind.
          </p>
          <div className="flex items-center gap-6 text-sm font-bold text-slate-900 uppercase tracking-widest">
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <button
              onClick={() => window.print()}
              className="hover:text-blue-600 transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
