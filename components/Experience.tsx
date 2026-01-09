import React from 'react';
import { Briefcase } from 'lucide-react';
import resumeData from '../resume.json';

export const Experience: React.FC = () => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl shadow-sm">
                    <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-slate-200">
                {resumeData.experience.map((job, idx) => (
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
    );
};
