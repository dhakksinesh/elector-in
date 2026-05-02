# 🏛️ Elector IN

An interactive, AI-powered assistant that helps Indian citizens navigate the election process, timelines, and registration steps. 

## 🎥 Live Demo
[**Live Demo Link**](https://elector-in-518543488899.us-central1.run.app/)

---

## 🎯 1. Chosen Vertical
**Election Process Educator (Civic Tech)**
This project aims to democratize access to the Indian election process. Voting in the world's largest democracy can sometimes be complex, especially for first-time voters navigating forms (Form 6, 7, 8) and identifying correct polling locations. VoteGuide India provides a simple, modern, and accessible interface to solve this.

## 🧠 2. Approach and Logic
We utilize a **Hybrid Interface**:
1. **Guided Wizard:** A structured, step-by-step UI explaining Registration (Form 6), Electoral Roll Verification (EPIC), and Polling Booth location logic.
2. **Election Cycle Timeline:** A visual breakdown of the standard election phases from announcement to results.
3. **Conversational AI (Election Sahayak):** An integrated Gemini-powered floating assistant for complex queries. It uses a strict system prompt tailored to ECI guidelines for authoritative, non-partisan answers.

## ⚙️ 3. How the Solution Works
* **Frontend:** Built with Next.js (App Router), React, and Tailwind CSS. It features a modern "glassmorphic" UI with micro-animations via Framer Motion to ensure high engagement.
* **Backend:** Serverless API routes (`/api/chat`) running on Next.js securely interface with the **Google Gemini API**. 
* **Deployment (GCP):** The application includes a `Dockerfile` optimized for `standalone` Next.js output, meaning it is containerized and ready to be deployed to **Google Cloud Run** for massive scalability with low latency.

## 📝 4. Assumptions Made
* Assumes the user has access to standard Indian ID documents (Aadhaar, PAN, etc.) for registration.
* The chatbot is currently restricted by the system prompt to official ECI guidelines (as of 2026 standards). Real-time date lookups for highly specific local body elections might require external civic APIs to be integrated later.

## 🚀 5. Getting Started

### Prerequisites
*   **Node.js:** v20.9.0 or higher
*   **npm:** v10 or higher
*   **Google Gemini API Key:** Obtain one from [Google AI Studio](https://aistudio.google.com/)
*   **Cross-Platform Support:** Works on Windows, macOS, and Linux.

### Installation & Local Setup
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dhakksinesh/elector-in.git
    cd elector
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Configuration:**
    Create a `.env` file in the root directory and add your API key:
    ```env
    GEMINI_API_KEY=your_key_here
    GEMINI_MODEL=gemini-2.5-flash
    ```
4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## ✅ 6. Evaluation Focus Areas Checked
* **Code Quality:** Built with Next.js 16 App Router and React 19 using strict TypeScript. Logic is modularized across UI components, API routes, and a centralized configuration system.
* **Security:** API keys (`GEMINI_API_KEY`) are kept strictly on the server-side in API routes. Input validation prevents blank API calls.
* **Efficiency:** Standalone Docker build reduces container size. Next.js handles aggressive caching, and animations use optimized CSS transforms via Framer Motion.
* **Testing:** The application includes explicit error state testing (e.g., handling missing API keys gracefully) and UI state validation across the guided wizard. API routes validate input schemas before processing.
* **Accessibility:** Uses semantic HTML (`<nav>`, `<main>`), ARIA labels on interactive elements (e.g., Chat toggle), and high-contrast gradients suitable for all users.
* **Google Services Integration:** Deeply integrated with **Google Gemini (2.5 Flash)** for rapid, intelligent query resolution, and fully prepped for **Google Cloud Platform (GCP Cloud Run)** deployment via the optimized `Dockerfile`.


## 🔗 7. Links
*   **Documentation:** [Election Commission of India (ECI)](https://eci.gov.in/)

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.