
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found in environment variables");
    }
    this.ai = new GoogleGenAI({ apiKey });
  }

  async chat(history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      // Gemini 3 Flash is great for quick reasoning on text context
      const response = await chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
