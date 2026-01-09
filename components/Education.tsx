import React from 'react';
import { GraduationCap } from 'lucide-react';
import resumeData from '../resume.json';

export const Education: React.FC = () => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-200 transition-colors">
                <h3 className="font-bold text-slate-900">{resumeData.education.degree}</h3>
                <p className="text-slate-600 font-medium">{resumeData.education.school}</p>
            </div>
        </section>
    );
};
