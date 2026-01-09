import { GoogleGenAI } from "@google/genai";
import resumeData from "../resume.json";
import { generateMarkdown } from "../utils/markdownGenerator";

const SYSTEM_PROMPT = `
You are Andy Kumeda's Professional AI Assistant. You have access to Andy's resume and extensive background in network engineering.
Your goal is to answer questions from recruiters or potential employers about Andy's skills (Cisco, Routing, Security, SDN), his 25+ years of experience, and his CCIE #3406 certification.

Context:
${generateMarkdown(resumeData as any)}

Always maintain a professional, technical, and helpful tone. If they want to contact Andy directly, they should use the contact details (email/phone) provided in the resume.
`;

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.warn("Gemini API Key not found. AI features will be disabled.");
    }
  }

  async chat(history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) {
    if (!this.ai) {
      return "I'm sorry, I'm not correctly configured right now. Please check the API key settings.";
    }

    try {
      const chat = this.ai.chats.create({
        model: 'gemini-1.5-flash',
        history: history,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      // Gemini 1.5 Flash is great for quick reasoning on text context
      const response = await chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
