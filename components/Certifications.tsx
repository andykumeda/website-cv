import React from 'react';
import { Award } from 'lucide-react';
import { ResumeData } from '../types';

interface CertificationsProps {
    certifications: NonNullable<ResumeData['certifications']>;
    title: string;
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl shadow-sm">
                    <Award className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
            </div>
            <div className="space-y-4">
                {certifications.map((cert, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl shadow-sm text-sm transition-colors ${idx === 0 ? 'bg-blue-700 text-white shadow-blue-100 dark:shadow-blue-900/30 relative overflow-hidden group' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-900/50'}`}>
                        {idx === 0 && (
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                                <Award className="w-16 h-16" />
                            </div>
                        )}
                        <p className={`font-bold text-base mb-1 ${idx === 0 ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>{cert.title}</p>
                        <p className={`text-xs font-medium ${idx === 0 ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>{cert.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
