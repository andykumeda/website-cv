
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ResumeData {
  profile: {
    name: string;
    title: string;
    ccie: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: {
    title: string;
    company: string;
    date: string;
    bullets: string[];
  }[];
  skills: {
    cat: string;
    items: string;
  }[];
  education: {
    degree: string;
    school: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    color: string;
  }[];
  projects: {
    title: string;
    description: string;
  }[];
  config?: {
    titles: {
      summary: string;
      experience: string;
      skills: string;
      education: string;
      certifications: string;
      projects: string;
    };
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
