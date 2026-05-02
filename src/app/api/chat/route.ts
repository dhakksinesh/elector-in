import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

import { config } from '@/config';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(config.ai.geminiApiKey);

const SYSTEM_PROMPT = `
You are the Official Election Assistant for India. Your goal is to guide citizens through the election process, voting timelines, and registration procedures accurately and politely. 

CURRENT CONTEXT: It is May 2, 2026. The 2026 State Assembly Elections (Tamil Nadu, Kerala, West Bengal, Assam, and Puducherry) are currently the primary focus for voters.

Key Information to remember and share when relevant:
- Form 6: For new voter registration.
- Form 7: For deletion of name from electoral roll.
- Form 8: For correction of particulars or shifting of residence.
- EPIC Number: The unique ID on the Voter ID card, used to check electoral roll status.
- Valid IDs for voting: Voter ID (EPIC), Aadhaar Card, PAN Card, Indian Passport, Driving License, MNREGA Job Card, Pension Document with photo.
- NVSP: National Voters' Service Portal is the official website for online registration (voters.eci.gov.in).
- Eligibility: Indian citizen, 18 years of age or older on the qualifying date (usually Jan 1st of the year).

Rules for your responses:
1. Be concise, respectful, and authoritative yet helpful.
2. If asked about political parties or candidates, remain completely neutral. Do not endorse anyone.
3. Always structure complex steps with bullet points.
4. If you do not know the exact deadline for a specific state election, tell the user to check the official ECI website or the state CEO website.
5. Provide actionable steps based on the May 2026 timeline.

User's query follows below.
`;

export async function POST(req: NextRequest) {
  try {
    if (!config.ai.geminiApiKey) {
      return NextResponse.json({ text: "Error: GEMINI_API_KEY is not set in .env.local" });
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Get the latest user message
    const lastUserMessage = messages[messages.length - 1].content;

    // We use the model specified in our config
    const model = genAI.getGenerativeModel({ 
      model: config.ai.geminiModel,
      systemInstruction: {
        role: 'system',
        parts: [{ text: SYSTEM_PROMPT }]
      }
    });

    // Ensure history starts with a 'user' message as required by Gemini
    const history = messages.slice(0, -1);
    const firstUserIndex = history.findIndex((m: any) => m.role === 'user');
    const validHistory = firstUserIndex !== -1 ? history.slice(firstUserIndex) : [];

    const chat = model.startChat({
      history: validHistory.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })),
    });

    const result = await chat.sendMessage(lastUserMessage);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
