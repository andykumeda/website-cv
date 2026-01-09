import React from 'react';
import { ShieldCheck } from 'lucide-react';
import resumeData from '../resume.json';

export const Skills: React.FC = () => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Core Competencies</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.skills.map((skill, idx) => (
                    <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-200 transition-colors shadow-sm">
                        <h4 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-2">{skill.cat}</h4>
                        <p className="text-slate-700 text-sm font-semibold">{skill.items}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
