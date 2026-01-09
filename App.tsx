import React, { useState } from 'react';
import { Download, Globe, Phone } from 'lucide-react';
import resumeData from './resume.json';
import { generateMarkdown } from './utils/markdownGenerator';
import AIChat from './components/AIChat';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';

const App: React.FC = () => {
  const [view, setView] = useState<'visual' | 'markdown'>('visual');
  const markdownContent = generateMarkdown(resumeData as any);

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
            <span className="font-bold text-slate-900 hidden sm:inline tracking-tight">{resumeData.profile.name}</span>
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
      <Hero />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 pb-24 sm:px-6">

        {view === 'markdown' ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm no-print animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Resume Source (Markdown)
              </h2>
              <span className="text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-lg text-slate-500 border border-slate-200">resume.json (generated)</span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 bg-slate-50 p-6 rounded-2xl overflow-x-auto border border-slate-100 leading-relaxed">
              {markdownContent.trim()}
            </pre>
          </div>
        ) : (
          <div className="space-y-12 no-print animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Summary Section */}
            <section className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {resumeData.summary}
              </p>
            </section>

            {/* Experience Section */}
            <Experience />

            {/* Projects Section */}
            <Projects />

            {/* Grid for Skills and Education */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                <Skills />
                <Education />
              </div>

              {/* Sidebar items */}
              <div className="space-y-8">
                <Certifications />
              </div>
            </div>
          </div>
        )}

        {/* Print Only Content (Optimized for PDF) */}
        <div className="print-only p-8 text-slate-900 bg-white">
          <div className="flex justify-between items-start border-b-4 border-slate-900 pb-6 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-1 tracking-tighter">{resumeData.profile.name.toUpperCase()}</h1>
              <p className="text-lg text-slate-600 font-bold uppercase tracking-tight">{resumeData.profile.title}</p>
            </div>
            <div className="text-right text-xs text-slate-800 space-y-1 font-semibold">
              <p>{resumeData.profile.email}</p>
              <p>{resumeData.profile.phone}</p>
              <p className="text-blue-700">{resumeData.profile.ccie}</p>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Summary</h2>
              <p className="text-sm leading-relaxed text-slate-800">
                {resumeData.summary}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Experience</h2>
              <div className="space-y-5">
                {resumeData.experience.map((job, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base">{job.title} | {job.company}</h3>
                      <span className="text-xs font-bold">{job.date}</span>
                    </div>
                    <ul className="text-sm list-disc list-inside text-slate-800 space-y-1 pl-2">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-8">
              <section>
                <h2 className="text-lg font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Education</h2>
                <h3 className="font-bold text-sm">{resumeData.education.degree}</h3>
                <p className="text-xs text-slate-600 font-bold">{resumeData.education.school}</p>
              </section>
              <section>
                <h2 className="text-lg font-bold uppercase border-b-2 border-slate-900 mb-3 tracking-widest">Expertise</h2>
                <ul className="text-xs text-slate-800 font-bold leading-relaxed list-none">
                  {resumeData.skills.map(s => (
                    <li key={s.cat}>
                      <span className="text-slate-500">{s.cat}:</span> {s.items}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white no-print">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium mb-6">{resumeData.profile.name} • Network Architecture Portfolio • 2025</p>
          <div className="flex justify-center flex-wrap gap-8 text-slate-400">
            <a href={`https://${resumeData.profile.website}`} className="hover:text-blue-700 flex items-center gap-2 transition-colors font-medium"><Globe className="w-4 h-4" /> {resumeData.profile.website}</a>
            <a href={`tel:${resumeData.profile.phone.replace(/\D/g, '')}`} className="hover:text-blue-700 flex items-center gap-2 transition-colors font-medium"><Phone className="w-4 h-4" /> {resumeData.profile.phone}</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant FAB */}
      <AIChat />
    </div>
  );
};

export default App;
