import React, { useState } from 'react';
import { Network, Linkedin, Github, Mail } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
    profile: ResumeData['profile'];
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <header className="pt-20 pb-12 px-4 no-print bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="max-w-4xl mx-auto text-center">
                <div className="relative inline-block mb-6">
                    <div className={`w-36 h-36 rounded-3xl shadow-2xl mx-auto overflow-hidden border-4 border-white dark:border-slate-800 transition-all duration-500 ${imageError ? 'bg-gradient-to-br from-blue-600 to-indigo-800' : 'bg-slate-100 dark:bg-slate-800'}`}>
                        {!imageError ? (
                            <img
                                src="profile.jpg"
                                alt={profile.name}
                                className="w-full h-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-white">
                                <span className="text-4xl font-bold tracking-tighter">AK</span>
                                <span className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Network Architect</span>
                            </div>
                        )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg border-2 border-white dark:border-slate-800 animate-bounce-subtle">
                        <Network className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mb-4">
                    <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 dark:text-slate-100 tracking-tight">{profile.name}</h1>
                    <div className="flex flex-col items-center">
                        <img
                            src="ccie.svg"
                            alt="CCIE Logo"
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain dark:invert"
                        />
                        <span className="text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 mt-0.5 font-mono">
                            {profile.ccie.replace('CCIE ', '')}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">{profile.title}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-semibold group">
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>LinkedIn</span>
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-semibold group">
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>GitHub</span>
                    </a>
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-semibold group">
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </header>
    );
};
