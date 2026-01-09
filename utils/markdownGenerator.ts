import { ResumeData } from '../types';

export const generateMarkdown = (data: ResumeData): string => {
    return `
# ${data.profile.name.toUpperCase()}
**${data.profile.title}**

📧 ${data.profile.email} | 📱 ${data.profile.phone} | 🌐 [${data.profile.website}](https://${data.profile.website})
[LinkedIn](${data.profile.linkedin}) | [GitHub](${data.profile.github}) | ${data.profile.ccie}

---

## PROFESSIONAL SUMMARY

${data.summary}

---

## CORE COMPETENCIES

${data.skills.map(s => `- **${s.cat}:** ${s.items}`).join('\n')}

---

## PROFESSIONAL EXPERIENCE

${data.experience.map(exp => `### ${exp.company}
**${exp.title}** | *${exp.date}*

${exp.bullets.map(b => `*   ${b}`).join('\n')}
`).join('\n')}

---

## SELECTED PROJECT HIGHLIGHTS

${data.projects.map(p => `- **${p.title}** — ${p.description}`).join('\n')}

---

## CERTIFICATIONS

${data.certifications.map(c => `*   **${c.title}** – ${c.subtitle}`).join('\n')}

---

## EDUCATION

**${data.education.degree}**
*${data.education.school}*
`;
};
