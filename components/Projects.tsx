import React from 'react';
import { Lightbulb, Github } from 'lucide-react';
import { ResumeData } from '../types';

interface ProjectsProps {
    projects: NonNullable<ResumeData['projects']>;
    title: string;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, title }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-yellow-100 text-yellow-700 rounded-xl shadow-sm">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <a
                        key={idx}
                        href={project.link || undefined}
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
                        className={`block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 ${project.link
                            ? 'hover:border-blue-300 hover:shadow-md cursor-pointer group'
                            : 'hover:border-slate-300 opacity-80'
                            }`}
                        onClick={(e) => !project.link && e.preventDefault()}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-bold text-lg ${project.link ? 'text-blue-700 group-hover:text-blue-800' : 'text-slate-900'}`}>
                                {project.title}
                            </h3>
                            {project.link && (
                                <Github className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            )}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};
