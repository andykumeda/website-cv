# Andy Kumeda - Professional Portfolio & Resume

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. 
Featuring an AI-powered chat assistant (powered by Google Gemini) and a dynamically generated "Markdown View" of the resume.

## 🚀 Features

*   **Single Source of Truth**: All content is managed in `src/resume.json`.
*   **Dual View**: Switch between a polished "Visual Layout" and a raw "Markdown View" (dynamically generated).
*   **AI Assistant**: Wraps the Google Gemini API to answer questions about the candidate's experience.
*   **Component Architecture**: Modular React components for experience, skills, education, and projects.
*   **Print Optimized**: Custom print styles for generating a clean PDF resume.
*   **Performance**: Built with Vite for instant server start and optimized production builds.

## 🛠️ Tech Stack

*   **Framework**: React 19
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4 (using `@tailwindcss/postcss`)
*   **Build Tool**: Vite
*   **Icons**: Lucide React
*   **AI**: Google GenAI SDK

## 📝 How to Edit Content

You **do not** need to edit HTML or React components to update the content.

1.  Open `resume.json` in the root directory.
2.  Update the JSON fields (experience, skills, projects, etc.).
3.  Save the file.
4.  Both the website and the markdown view will automatically update.

## 🏃‍♂️ Run Locally

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Create a `.env` file in the root directory and add your Google Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```
    > *Note: If no key is provided, the AI chat feature will degrade gracefully and show a warning, but the site will still load.*

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
├── components/        # React components (Hero, Experience, Projects...)
├── services/          # Gemini AI service integration
├── utils/             # Helpers (Markdown generator, Icon mapper)
├── resume.json        # SINGLE SOURCE OF TRUTH for all content
├── App.tsx            # Main application layout
├── index.css          # Tailwind v4 configuration
├── index.tsx          # Application entry point
└── types.ts           # TypeScript definitions
```
