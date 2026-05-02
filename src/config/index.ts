export const config = {
  ai: {
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    geminiModel: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
  },
  site: {
    name: 'Elector IN',
    description: 'Your official Indian Election Assistant',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  }
};
