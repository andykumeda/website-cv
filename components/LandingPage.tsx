import React from 'react';
import { FileText, Mail, ArrowRight, Mountain } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface LandingPageProps {
    onNavigateToCV: () => void;
    profileData: {
        name: string;
        title: string;
        website: string;
        linkedin: string;
        github: string;
        email: string;
        phone: string;
    };
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToCV, profileData }) => {
    const navigationCards = [
        {
            id: 'cv',
            title: 'CV / Resume',
            description: 'View my professional experience, skills, and certifications',
            icon: FileText,
            color: 'blue',
            available: true,
            onClick: onNavigateToCV,
        },
        {
            id: 'running',
            title: 'Running',
            description: 'Check out my ultrarunning journey and race results',
            icon: Mountain,
            color: 'green',
            available: true,
            onClick: () => window.location.href = 'https://andyk.run',
        },
        {
            id: 'contact',
            title: 'Contact',
            description: `${profileData.email} • ${profileData.phone}`,
            icon: Mail,
            color: 'orange',
            available: true,
            onClick: () => window.location.href = `mailto:${profileData.email}`,
        },
    ];

    const colorClasses = {
        blue: {
            gradient: 'from-blue-500 to-blue-700',
            hover: 'hover:shadow-blue-200 dark:hover:shadow-blue-900/50',
            border: 'border-blue-200 dark:border-blue-800',
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            text: 'text-blue-700 dark:text-blue-400',
        },
        purple: {
            gradient: 'from-purple-500 to-purple-700',
            hover: 'hover:shadow-purple-200 dark:hover:shadow-purple-900/50',
            border: 'border-purple-200 dark:border-purple-800',
            bg: 'bg-purple-50 dark:bg-purple-900/20',
            text: 'text-purple-700 dark:text-purple-400',
        },
        green: {
            gradient: 'from-green-500 to-green-700',
            hover: 'hover:shadow-green-200 dark:hover:shadow-green-900/50',
            border: 'border-green-200 dark:border-green-800',
            bg: 'bg-green-50 dark:bg-green-900/20',
            text: 'text-green-700 dark:text-green-400',
        },
        orange: {
            gradient: 'from-orange-500 to-orange-700',
            hover: 'hover:shadow-orange-200 dark:hover:shadow-orange-900/50',
            border: 'border-orange-200 dark:border-orange-800',
            bg: 'bg-orange-50 dark:bg-orange-900/20',
            text: 'text-orange-700 dark:text-orange-400',
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
            <div className="absolute top-4 right-4 z-50">
                <ThemeToggle />
            </div>
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
                    <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {/* Logo/Avatar */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl shadow-blue-300 transform hover:scale-105 transition-transform duration-300">
                                    AK
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                                {profileData.name}
                            </h1>
                        </div>


                    </div>
                </div>
            </div>

            {/* Navigation Cards */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {navigationCards.map((card, index) => {
                        const Icon = card.icon;
                        const colors = colorClasses[card.color as keyof typeof colorClasses];

                        return (
                            <div
                                key={card.id}
                                className={`group relative bg-white dark:bg-slate-800 rounded-2xl border-2 ${colors.border} p-8 transition-all duration-300 ${card.available
                                    ? `cursor-pointer hover:scale-[1.02] hover:shadow-2xl ${colors.hover} active:scale-[0.98]`
                                    : 'opacity-75'
                                    } animate-in fade-in slide-in-from-bottom-4 duration-700`}
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={card.available ? card.onClick : undefined}
                            >
                                {/* Gradient background on hover */}
                                {card.available && (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                                )}

                                <div className="relative">
                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-xl ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-8 h-8 ${colors.text}`} />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{card.title}</h3>
                                            {card.available && (
                                                <ArrowRight className={`w-6 h-6 ${colors.text} transform group-hover:translate-x-2 transition-transform duration-300`} />
                                            )}
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{card.description}</p>
                                    </div>

                                    {/* Status Badge */}
                                    {!card.available && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-600">
                                            <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">Coming Soon</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
                        © 2026 {profileData.name}. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Custom animations */}
            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};
