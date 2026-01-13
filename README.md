# Andy Kumeda - Personal Website & CV

A modern, responsive personal website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. 
Features a clean landing page and a professional CV with AI-powered chat assistant (powered by Google Gemini).

## 🌐 Live Sites

- **Landing Page**: [kumeda.com](https://kumeda.com) - Personal homepage with links to CV, running, and contact
- **CV/Resume**: [cv.kumeda.com](https://cv.kumeda.com) - Professional resume and experience

## 🚀 Features

### Landing Page
- **Clean & Personal**: Minimalist design showcasing name and navigation cards
- **Quick Links**: Direct access to CV, running site (andyk.run), and contact information
- **Responsive Design**: Beautiful on all devices with animated background elements

### CV/Resume Page
- **Single Source of Truth**: All content managed in `resume.json`
- **Dark Mode**: Fully supported dark/light themes with system preference detection and manual toggle
- **Multi-Format View**: 
    - **Visual Layout**: Professional, polished React rendering
    - **Markdown View**: Raw markdown source code representation
    - **JSON View**: Direct access to the underlying data structure
- **AI Assistant**: Google Gemini-powered chat with floating callout bubble and context-aware answers
- **Print Optimized**: Custom print styles for generating clean PDF resumes
- **Component Architecture**: Modular React components for experience, skills, education, and projects

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/postcss`)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **AI**: Google GenAI SDK
- **Deployment**: Nginx with separate configs for kumeda.com and cv.kumeda.com

## 📝 How to Edit Content

You **do not** need to edit HTML or React components to update the content.

1. Open `resume.json` in the root directory
2. Update the JSON fields (profile, experience, skills, projects, etc.)
3. Save the file
4. Both the website and the markdown view will automatically update

## 🏃‍♂️ Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
   > *Note: If no key is provided, the AI chat feature will degrade gracefully and show a warning, but the site will still load.*

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Deploy to Server**:
   ```bash
   sh deploy.sh
   ```

## 📂 Project Structure

```
├── components/          # React components
│   ├── LandingPage.tsx  # Main landing page (kumeda.com)
│   ├── CVPage.tsx       # CV/Resume page (cv.kumeda.com)
│   ├── Hero.tsx         # CV hero section
│   ├── Experience.tsx   # Work experience
│   ├── Skills.tsx       # Technical skills
│   ├── Projects.tsx     # Project highlights
│   ├── Education.tsx    # Education section
│   ├── Certifications.tsx # Certifications
│   └── AIChat.tsx       # AI assistant chat
├── services/            # Gemini AI service integration
├── utils/               # Helpers (Markdown generator, Icon mapper)
├── resume.json          # SINGLE SOURCE OF TRUTH for all content
├── App.tsx              # Main application with routing logic
├── index.css            # Tailwind v4 configuration
├── index.tsx            # Application entry point
├── types.ts             # TypeScript definitions
├── nginx-kumeda.com.conf      # Nginx config for main domain
├── nginx-cv.kumeda.com.conf   # Nginx config for CV subdomain
└── deploy.sh            # Deployment script
```

## 🔧 Nginx Configuration

The site uses two nginx configurations:
- `nginx-kumeda.com.conf` - Serves the landing page at the root
- `nginx-cv.kumeda.com.conf` - Serves the CV at cv.kumeda.com

See `NGINX_SETUP.md` for detailed setup instructions.
