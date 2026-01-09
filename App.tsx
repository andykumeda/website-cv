
import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail, Briefcase, GraduationCap, Network, ShieldCheck, Award, User, Globe, Phone } from 'lucide-react';
import { RESUME_MARKDOWN } from './constants';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [view, setView] = useState<'visual' | 'markdown'>('visual');
  const [imageError, setImageError] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">AK</div>
            <span className="font-bold text-slate-900 hidden sm:inline tracking-tight">Andy Kumeda</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView(view === 'visual' ? 'markdown' : 'visual')}
              className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-full hover:bg-blue-50"
            >
              {view === 'visual' ? 'View Raw Markdown' : 'View Visual Layout'}
            </button>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-20 pb-12 px-4 no-print bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <div className={`w-36 h-36 rounded-3xl shadow-2xl mx-auto overflow-hidden border-4 border-white transition-all duration-500 ${imageError ? 'bg-gradient-to-br from-blue-600 to-indigo-800' : 'bg-slate-100'}`}>
               {!imageError ? (
                 <img 
                   src="profile.jpg" 
                   alt="Andy Kumeda" 
                   className="w-full h-full object-cover"
                   onError={() => setImageError(true)}
                 />
               ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center text-white">
                   <span className="text-4xl font-bold tracking-tighter">AK</span>
                   <span className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Network Architect</span>
                 </div>
               )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg border-2 border-white animate-bounce-subtle">
              <Network className="w-5 h-5" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 mb-4 tracking-tight">Andy Kumeda</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
            <p className="text-xl text-slate-600 font-medium">Senior Cisco Network Engineer & Architect</p>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm border border-blue-200">CCIE #3406</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.linkedin.com/in/andykumeda/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors font-semibold group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/andykumeda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors font-semibold group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a href="mailto:andy@kumeda.com" className="flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors font-semibold group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>andy@kumeda.com</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 pb-24 sm:px-6">
        
        {view === 'markdown' ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm no-print animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Resume Source (Markdown)
              </h2>
              <span className="text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-lg text-slate-500 border border-slate-200">resume.md</span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 bg-slate-50 p-6 rounded-2xl overflow-x-auto border border-slate-100 leading-relaxed">
              {RESUME_MARKDOWN.trim()}
            </pre>
          </div>
        ) : (
          <div className="space-y-12 no-print animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-slate-200">
                {[
                  {
                    title: "Senior Network Engineer",
                    company: "Ventura County Health Care Agency",
                    date: "2023 — Present",
                    bullets: [
                      "Lead network architect for an enterprise clinical and corporate network, ensuring high availability.",
                      "Architected migration of legacy Cisco infrastructure to Catalyst 9000 series platforms.",
                      "Deploying Cisco SD-Access and ISE for Network Access Control (NAC).",
                      "Optimized large-scale routing using BGP, OSPF, and EIGRP."
                    ]
                  },
                  {
                    title: "Principal Consultant",
                    company: "Delta9 Technology, LLC",
                    date: "2017 — 2023",
                    bullets: [
                      "Architected enterprise security solutions for law enforcement (FBI CJIS and FIPS 140-2 compliance).",
                      "Designed high-availability networks for tech startups and universities.",
                      "Led security incident response programs and M&A infrastructure transitions."
                    ]
                  },
                  {
                    title: "Network Architect",
                    company: "DexYP",
                    date: "2015 — 2017",
                    bullets: [
                      "Designed WAN/LAN and wireless architectures using NFV and SDN technologies.",
                      "Developed automation frameworks using Ansible and Python to reduce operational overhead.",
                      "Built a custom DCIM application for physical inventory tracking."
                    ]
                  }
                ].map((job, idx) => (
                  <div key={idx} className="relative pl-16 group">
                    <div className="absolute left-[30px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-700 ring-4 ring-white group-hover:scale-125 transition-all duration-300"></div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                          <p className="text-blue-700 font-semibold">{job.company}</p>
                        </div>
                        <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">{job.date}</span>
                      </div>
                      <ul className="space-y-3">
                        {job.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                            <span className="text-blue-500 shrink-0 font-bold">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grid for Skills and Education */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                {/* Skills Section */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shadow-sm">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Core Competencies</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { cat: "Cisco Platforms", items: "Catalyst 9K, Catalyst Center, SD-Access, ISE, ASA" },
                      { cat: "Protocols", items: "OSPF, BGP, EIGRP, ISIS, VXLAN, MPLS, QoS" },
                      { cat: "Security", items: "NAC, IDS/IPS, Firewalls, VPN, CJIS, HIPAA" },
                      { cat: "DevOps/Tools", items: "Ansible, Terraform, Python, Wireshark, SolarWinds" }
                    ].map((skill, idx) => (
                      <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-200 transition-colors shadow-sm">
                        <h4 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-2">{skill.cat}</h4>
                        <p className="text-slate-700 text-sm font-semibold">{skill.items}</p>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl shadow-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-200 transition-colors">
                    <h3 className="font-bold text-slate-900">B.S. in Computer Science and Engineering</h3>
                    <p className="text-slate-600 font-medium">California State University, Long Beach</p>
                  </div>
                </section>
              </div>

              {/* Sidebar items */}
              <div className="space-y-8">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl shadow-sm">
                      <Award className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Certifications</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="p-5 bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                        <Award className="w-16 h-16" />
                      </div>
                      <p className="font-bold text-base mb-1">CCIE #3406</p>
                      <p className="text-blue-100 text-xs font-medium">Routing & Switching (Active 25+ yrs)</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm hover:border-purple-200 transition-colors">
                      <p className="font-bold text-slate-800">Recerts: Security, VoIP, SP</p>
                      <p className="text-slate-500 font-medium">Service Provider & Data Center</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm hover:border-purple-200 transition-colors">
                      <p className="font-bold text-slate-800">Blockchain Professional</p>
                      <p className="text-slate-500 font-medium">CEBP Certification</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* Print Only Content (Optimized for PDF) */}
        <div className="print-only p-8 text-slate-900 bg-white">
          <div className="flex justify-between items-start border-b-4 border-slate-900 pb-6 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-1 tracking-tighter">ANDY KUMEDA</h1>
              <p className="text-lg text-slate-600 font-bold uppercase tracking-tight">Senior Cisco Network Engineer | Network Architect</p>
            </div>
            <div className="text-right text-xs text-slate-800 space-y-1 font-semibold">
              <p>andy@kumeda.com</p>
              <p>(310) 493-1793</p>
              <p className="text-blue-700">CCIE #3406</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Summary</h2>
              <p className="text-sm leading-relaxed text-slate-800">
                Accomplished Senior Network Engineer with over 25 years of hands-on experience. CCIE #3406 with deep expertise in Cisco routing, switching, and security architecture. Expert in mission-critical environments and network modernization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Experience</h2>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base">Senior Network Engineer | VCHCA</h3>
                    <span className="text-xs font-bold">2023 — Present</span>
                  </div>
                  <ul className="text-sm list-disc list-inside text-slate-800 space-y-1 pl-2">
                    <li>Lead architect for mission-critical clinical and corporate network.</li>
                    <li>Migrating legacy infrastructure to Catalyst 9000 platforms.</li>
                    <li>Designing and deploying SD-Access and ISE for NAC.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base">Principal Consultant | Delta9 Technology</h3>
                    <span className="text-xs font-bold">2017 — 2023</span>
                  </div>
                  <ul className="text-sm list-disc list-inside text-slate-800 space-y-1 pl-2">
                    <li>Architected security solutions compliant with FBI CJIS standards.</li>
                    <li>Designed high-availability networks for universities and tech startups.</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-8">
              <section>
                <h2 className="text-lg font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Education</h2>
                <h3 className="font-bold text-sm">B.S. Computer Science & Engineering</h3>
                <p className="text-xs text-slate-600 font-bold">California State University, Long Beach</p>
              </section>
              <section>
                <h2 className="text-lg font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Expertise</h2>
                <p className="text-xs text-slate-800 font-bold leading-relaxed">
                  Cisco Catalyst 9K, ISE, SD-Access, BGP, OSPF, VXLAN, MPLS, Wireshark, Ansible, Python, CJIS, HIPAA.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white no-print">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium mb-6">Andy Kumeda • Network Architecture Portfolio • 2025</p>
          <div className="flex justify-center flex-wrap gap-8 text-slate-400">
             <a href="https://andykumeda.com" className="hover:text-blue-700 flex items-center gap-2 transition-colors font-medium"><Globe className="w-4 h-4"/> andykumeda.com</a>
             <a href="tel:3104931793" className="hover:text-blue-700 flex items-center gap-2 transition-colors font-medium"><Phone className="w-4 h-4"/> (310) 493-1793</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant FAB */}
      <AIChat />
    </div>
  );
};

export default App;
