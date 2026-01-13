import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ResumeData } from '../types';

interface EducationProps {
    education: NonNullable<ResumeData['education']>;
    title: string;
}

export const Education: React.FC<EducationProps> = ({ education, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-xl shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-amber-200 dark:hover:border-amber-900/50 transition-colors">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">{education.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{education.school}</p>
            </div>
        </section>
    );
};
