import React, { useState } from 'react';
import { Download } from 'lucide-react';
import resumeData from '../resume.json';
import { generateMarkdown } from '../utils/markdownGenerator';
import { renderLinks } from '../utils/renderLinks';
import AIChat from './AIChat';
import { ThemeToggle } from './ThemeToggle';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Education } from './Education';
import { Certifications } from './Certifications';
import { Projects } from './Projects';
import { Summary } from './Summary';

interface CVPageProps {
    onNavigateHome?: () => void;
}

export const CVPage: React.FC<CVPageProps> = ({ onNavigateHome }) => {
    const [view, setView] = useState<'visual' | 'markdown' | 'json'>('visual');
    const markdownContent = generateMarkdown(resumeData as any);

    const handlePrint = () => {
        window.print();
    };

    const handleLogoClick = () => {
        // If on cv.kumeda.com subdomain, redirect to main domain
        if (window.location.hostname === 'cv.kumeda.com') {
            window.location.href = 'https://kumeda.com';
        } else if (onNavigateHome) {
            // Otherwise use the navigation callback (for kumeda.com/cv)
            onNavigateHome();
        }
    };

    return (
        <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 dark:bg-slate-950 dark:selection:bg-blue-900 dark:selection:text-blue-100 text-slate-900 dark:text-slate-100 print:bg-white print:text-black">
            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 no-print">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold shadow-sm cursor-pointer hover:bg-blue-800 transition-colors"
                            onClick={handleLogoClick}
                            title="Back to home"
                        >
                            AK
                        </div>
                        <span className="font-bold text-slate-900 dark:text-slate-100 hidden sm:inline tracking-tight">{resumeData.profile.name}</span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <ThemeToggle />
                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
                            {(['visual', 'markdown', 'json'] as const).map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setView(mode)}
                                    className={`px-2 sm:px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-semibold transition-all duration-200 ${view === mode
                                        ? 'bg-white dark:bg-slate-600 text-blue-700 dark:text-blue-300 shadow-sm'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                                        }`}
                                >
                                    {mode === 'json' ? 'JSON' : mode.charAt(0).toUpperCase() + mode.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 sm:mx-2"></div>
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-95"
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Download PDF</span>
                            <span className="inline sm:hidden">PDF</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <Hero profile={resumeData.profile} />

            {/* Main Content Area */}
            <main className="max-w-5xl mx-auto px-4 pb-24 sm:px-6">

                {view === 'markdown' && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm no-print animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                Resume Source (Markdown)
                            </h2>
                            <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">resume.json (generated)</span>
                        </div>
                        <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl overflow-x-auto border border-slate-100 dark:border-slate-800 leading-relaxed">
                            {markdownContent.trim()}
                        </pre>
                    </div>
                )}

                {view === 'json' && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm no-print animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                Resume Source (JSON)
                            </h2>
                            <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">resume.json (raw)</span>
                        </div>
                        <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl overflow-x-auto border border-slate-100 dark:border-slate-800 leading-relaxed">
                            {JSON.stringify(resumeData, null, 2)}
                        </pre>
                    </div>
                )}

                {view === 'visual' && (
                    <div className="space-y-12 no-print animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Dynamic Section Rendering */}
                        {(() => {
                            const defaultOrder = ['summary', 'experience', 'projects', 'skills', 'education', 'certifications'];
                            const sectionOrder = resumeData.config?.sectionOrder || defaultOrder;

                            return sectionOrder.map((sectionKey: string) => {
                                switch (sectionKey) {
                                    case 'summary':
                                        return resumeData.summary ? (
                                            <Summary
                                                key="summary"
                                                summary={resumeData.summary}
                                                title={resumeData.config?.titles?.summary || "Professional Summary"}
                                            />
                                        ) : null;

                                    case 'experience':
                                        return resumeData.experience && resumeData.experience.length > 0 ? (
                                            <Experience
                                                key="experience"
                                                experience={resumeData.experience}
                                                title={resumeData.config?.titles?.experience || "Experience"}
                                            />
                                        ) : null;

                                    case 'projects':
                                        return resumeData.projects && resumeData.projects.length > 0 ? (
                                            <Projects
                                                key="projects"
                                                projects={resumeData.projects}
                                                title={resumeData.config?.titles?.projects || "Selected Project Highlights"}
                                            />
                                        ) : null;

                                    case 'skills':
                                        return resumeData.skills && resumeData.skills.length > 0 ? (
                                            <Skills
                                                key="skills"
                                                skills={resumeData.skills}
                                                title={resumeData.config?.titles?.skills || "Core Competencies"}
                                            />
                                        ) : null;

                                    case 'education':
                                        return resumeData.education ? (
                                            <Education
                                                key="education"
                                                education={resumeData.education}
                                                title={resumeData.config?.titles?.education || "Education"}
                                            />
                                        ) : null;

                                    case 'certifications':
                                        return resumeData.certifications && resumeData.certifications.length > 0 ? (
                                            <Certifications
                                                key="certifications"
                                                certifications={resumeData.certifications}
                                                title={resumeData.config?.titles?.certifications || "Certifications"}
                                            />
                                        ) : null;

                                    default:
                                        return null;
                                }
                            });
                        })()}
                    </div>
                )}

                {/* Print Only Content (Optimized for PDF) */}
                <div className="print-only text-slate-900 bg-white">
                    <div className="flex justify-between items-start border-b-2 border-slate-900 pb-2 mb-2">
                        <div>
                            <h1 className="text-3xl font-bold mb-0 tracking-tight">{resumeData.profile.name.toUpperCase()}</h1>
                            <p className="text-base text-slate-600 font-bold uppercase tracking-tight">{resumeData.profile.title}</p>
                        </div>
                        <div className="text-right text-xs text-slate-800 space-y-0 font-semibold leading-tight">
                            <p>{resumeData.profile.email}</p>
                            <p>{resumeData.profile.phone}</p>
                            <p className="text-blue-700">{resumeData.profile.ccie}</p>
                        </div>
                    </div>

                    <div>
                        <section>
                            <h2 className="text-sm font-bold uppercase border-b border-slate-900 mb-2 tracking-wide">Summary</h2>
                            <p className="text-xs leading-snug text-slate-800">
                                {resumeData.summary}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase border-b border-slate-900 mb-2 tracking-wide mt-2">Experience</h2>
                            <div className="space-y-2">
                                {resumeData.experience.map((job, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-baseline mb-0">
                                            <h3 className="font-bold text-xs">{job.title} | {renderLinks(job.company)}</h3>
                                            <span className="text-xs font-bold whitespace-nowrap ml-2">{job.date}</span>
                                        </div>
                                        <ul className="text-xs list-disc list-inside text-slate-800 space-y-0 pl-1 mt-1">
                                            {job.bullets.map((bullet, i) => (
                                                <li key={i} className="leading-snug">{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase border-b border-slate-900 mb-2 tracking-wide mt-2">Technical Expertise</h2>
                            <ul className="text-xs list-disc list-inside text-slate-800 space-y-0 pl-1">
                                {resumeData.skills?.map(s => (
                                    <li key={s.cat} className="leading-snug">
                                        <span className="font-bold">{s.cat}:</span> {s.items}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {resumeData.certifications && resumeData.certifications.length > 0 && (
                            <section>
                                <h2 className="text-sm font-bold uppercase border-b border-slate-900 mb-2 tracking-wide mt-2">Certifications</h2>
                                <div className="space-y-1">
                                    {resumeData.certifications.map((cert, idx) => (
                                        <div key={idx}>
                                            <p className="text-xs leading-snug"><span className="font-bold">{cert.title}</span> <span className="text-slate-600 font-semibold">| {cert.subtitle}</span></p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section>
                            <h2 className="text-sm font-bold uppercase border-b border-slate-900 mb-2 tracking-wide mt-2">Education</h2>
                            <p className="text-xs">{resumeData.education?.degree} <span className="text-slate-600">| {resumeData.education?.school}</span></p>
                        </section>
                    </div>
                </div>
            </main>

            {/* AI Assistant FAB */}
            <AIChat />
        </div>
    );
};
