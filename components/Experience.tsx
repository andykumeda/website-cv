import React from 'react';
import { Briefcase } from 'lucide-react';
import { ResumeData } from '../types';
import { renderLinks } from '../utils/renderLinks';

interface ExperienceProps {
    experience: NonNullable<ResumeData['experience']>;
    title: string;
}

export const Experience: React.FC<ExperienceProps> = ({ experience, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl shadow-sm">
                    <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-slate-200 dark:before:bg-slate-700">
                {experience.map((job, idx) => (
                    <div key={idx} className="relative pl-16 group">
                        <div className="absolute left-[30px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-700 dark:border-blue-500 ring-4 ring-white dark:ring-slate-900 group-hover:scale-125 transition-all duration-300"></div>
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/50 transition-all duration-300">
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                    <p className="text-blue-700 dark:text-blue-400 font-semibold">{renderLinks(job.company)}</p>
                                </div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-1 rounded-full">{job.date}</span>
                            </div>
                            <ul className="space-y-3">
                                {job.bullets.map((bullet, i) => (
                                    <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex gap-2">
                                        <span className="text-blue-500 dark:text-blue-400 shrink-0 font-bold">•</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
