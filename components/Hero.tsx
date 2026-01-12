import React, { useState } from 'react';
import { Network, Linkedin, Github, Mail } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
    profile: ResumeData['profile'];
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <header className="pt-20 pb-12 px-4 no-print bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="relative inline-block mb-6">
                    <div className={`w-36 h-36 rounded-3xl shadow-2xl mx-auto overflow-hidden border-4 border-white transition-all duration-500 ${imageError ? 'bg-gradient-to-br from-blue-600 to-indigo-800' : 'bg-slate-100'}`}>
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
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg border-2 border-white animate-bounce-subtle">
                        <Network className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 mb-4">
                    <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 tracking-tight">{profile.name}</h1>
                    <img src="ccie-logo.jpg" alt="CCIE Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
                    <p className="text-xl text-slate-600 font-medium">{profile.title}</p>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm border border-blue-200">{profile.ccie}</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors font-semibold group">
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>LinkedIn</span>
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors font-semibold group">
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>GitHub</span>
                    </a>
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors font-semibold group">
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </header>
    );
};
