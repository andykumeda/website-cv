import { GoogleGenerativeAI, Content } from "@google/generative-ai";
import resumeData from "../resume.json";
import { generateMarkdown } from "../utils/markdownGenerator";

const SYSTEM_PROMPT = `
You are Andy Kumeda's Professional AI Assistant. You have access to Andy's resume and extensive background in network engineering.
Your goal is to answer questions from recruiters or potential employers about Andy's skills (Cisco, Routing, Security, SDN), his 30+ years of experience, and his CCIE #3406 certification.

Context:
${generateMarkdown(resumeData as any)}

Always maintain a professional, technical, and helpful tone. If they want to contact Andy directly, they should use the contact details (email/phone) provided in the resume.
`;

export class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
    } else {
      console.warn("Gemini API Key not found. AI features will be disabled.");
    }
  }

  async chat(history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) {
    if (!this.genAI) {
      return "I'm sorry, I'm not correctly configured right now. Please check the API key settings.";
    }

    try {
      const model = this.genAI.getGenerativeModel({
        model: "gemini-2.0-flash-001",
        systemInstruction: SYSTEM_PROMPT
      });

      const chat = model.startChat({
        history: history as Content[],
        generationConfig: {
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
