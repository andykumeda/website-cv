import React from 'react';
import { User } from 'lucide-react';

interface SummaryProps {
    summary: string;
    title: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-xl shadow-sm">
                    <User className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium">
                    {summary}
                </p>
            </div>
        </section>
    );
};
