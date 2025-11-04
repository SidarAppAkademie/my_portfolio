# Modern Portfolio Website with AI Integration

A sophisticated, performance-optimized portfolio website built with cutting-edge technologies. Features an innovative AI-powered profile generation system, interactive UI elements, and a responsive design that delivers a premium user experience.

[![Next.js](https://img.shields.io/badge/Next.js-13.5%2B-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38bdf8)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-black)](https://ui.shadcn.com/)

[Live Demo](your-demo-link-here) | [Documentation](#documentation) | [Getting Started](#getting-started)

## 🌟 Features

- **Modern Tech Stack:** Next.js App Router, React, and TypeScript.
- **Responsive Design:** Styled with Tailwind CSS and `shadcn/ui` for a great experience on all devices.
- **AI Integration:** Includes a Genkit-powered AI feature that automatically generates professional profiles from CVs and certificates.
- **Interactive Interface:** A dynamic background animation that responds to mouse movement.
- **Fully Customizable:** Structured for easily adding your own projects, services, and information.

## 🛠️ Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI:** [Google Genkit](https://firebase.google.com/docs/genkit) (with Gemini model)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## 🚀 Getting Started

### Installation

Follow the steps below to run the project on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install Dependencies:**
    In the project root directory, install the dependencies using `npm` or your preferred package manager.
    ```bash
    npm install
    ```

### Running the Local Development Server

Once the necessary packages are installed, you can start the development server.

```bash
npm run dev
```

This command will start the application at `http://localhost:9002`.

---

## 📄 Project Report and Documentation

### 1. Project Purpose & Vision

This portfolio application serves as a modern showcase platform with an innovative twist. Beyond traditional portfolio features, it introduces an AI-powered CV analysis system that automatically generates optimized professional profiles. Key objectives include:

- Creating an engaging, interactive platform for professional presentation
- Streamlining the process of profile creation through AI assistance
- Providing a seamless, responsive user experience across all devices
- Showcasing technical expertise through modern web technologies

### 2. Architecture & Technical Decisions

The application leverages a modern, component-based architecture:

#### Frontend Architecture
```
src/
├── app/             # Page components and routing
│   ├── (pages)     # Main content pages
│   └── layout.tsx  # Root layout with global elements
├── components/      # Reusable UI components
│   ├── ui/         # Base UI components
│   └── layout/     # Layout components
└── actions/        # Server actions for forms
```

#### Key Technical Choices:
- **Server Components:** Used for static content and SEO optimization
- **Client Components:** Implemented for interactive elements like the dot shader animation
- **Hybrid Rendering:** Combines static generation and server-side rendering for optimal performance
- **TypeScript:** Ensures type safety and better developer experience

### 3. AI Profile Generation System

The profile generation system follows a sophisticated workflow:

1. **Document Processing:**
   - Supports multiple file formats (PDF, DOCX)
   - Extracts text while preserving document structure
   - Identifies key sections (experience, skills, education)

2. **Data Analysis:**
   - Parses professional experience and skills
   - Identifies key achievements and metrics
   - Extracts relevant technologies and tools

3. **Profile Synthesis:**
   - Generates optimized professional summaries
   - Creates structured skill matrices
   - Produces achievement-focused experience descriptions

4. **Output Generation:**
   - Creates a structured JSON profile
   - Generates formatted sections for the portfolio
   - Provides editing capabilities for fine-tuning

### 4. Interactive Features

1. **Dot Shader Animation:**
   - Custom WebGL implementation
   - Responsive to mouse/touch input
   - Performance-optimized rendering

2. **Project Showcase:**
   - Dynamic project filtering
   - Responsive image galleries
   - Interactive project details modal

3. **Contact System:**
   - Form validation with Zod
   - Auto-response system
   - Spam protection measures

### 5. Current Status & Future Roadmap

#### Completed Features:
✅ Responsive design implementation
✅ AI profile generation system
✅ Interactive background animation
✅ Project showcase implementation
✅ Contact form with validation

#### Planned Improvements:
- [ ] Enhanced AI profile analysis with skill recommendations
- [ ] Real-time profile editing capabilities
- [ ] Project category filtering system
- [ ] Dark/light theme toggle
- [ ] Automated image optimization pipeline
- [ ] Multi-language support
- [ ] Analytics dashboard integration

---

## 📜 License

This project does not currently have a license. If you want to make your project open source, you can specify this by adding a `LICENSE` file (e.g., MIT License).
