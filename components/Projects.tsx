import React from 'react';
import { Lightbulb } from 'lucide-react';
import resumeData from '../resume.json';

export const Projects: React.FC = () => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-yellow-100 text-yellow-700 rounded-xl shadow-sm">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Selected Project Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-yellow-200 transition-colors">
                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{project.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
