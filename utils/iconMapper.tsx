import { Briefcase, GraduationCap, ShieldCheck, Award, Network } from 'lucide-react';

export const getIcon = (name: string) => {
    switch (name) {
        case 'Briefcase': return Briefcase;
        case 'GraduationCap': return GraduationCap;
        case 'ShieldCheck': return ShieldCheck;
        case 'Award': return Award;
        case 'Network': return Network;
        default: return Award;
    }
};
