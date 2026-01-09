import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ResumeData } from '../types';

interface EducationProps {
    education: ResumeData['education'];
    title: string;
}

export const Education: React.FC<EducationProps> = ({ education, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-200 transition-colors">
                <h3 className="font-bold text-slate-900">{education.degree}</h3>
                <p className="text-slate-600 font-medium">{education.school}</p>
            </div>
        </section>
    );
};
