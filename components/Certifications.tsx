import React from 'react';
import { Award } from 'lucide-react';
import { ResumeData } from '../types';

interface CertificationsProps {
    certifications: ResumeData['certifications'];
    title: string;
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl shadow-sm">
                    <Award className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            </div>
            <div className="space-y-4">
                {certifications.map((cert, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl shadow-sm text-sm transition-colors ${idx === 0 ? 'bg-blue-700 text-white shadow-blue-100 relative overflow-hidden group' : 'bg-white border border-slate-200 hover:border-purple-200'}`}>
                        {idx === 0 && (
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                                <Award className="w-16 h-16" />
                            </div>
                        )}
                        <p className={`font-bold text-base mb-1 ${idx === 0 ? 'text-white' : 'text-slate-800'}`}>{cert.title}</p>
                        <p className={`text-xs font-medium ${idx === 0 ? 'text-blue-100' : 'text-slate-500'}`}>{cert.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
