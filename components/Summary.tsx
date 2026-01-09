import React from 'react';
import { User } from 'lucide-react';
import resumeData from '../resume.json';

export const Summary: React.FC = () => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl shadow-sm">
                    <User className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Professional Summary</h2>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-indigo-200 transition-colors">
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                    {resumeData.summary}
                </p>
            </div>
        </section>
    );
};
