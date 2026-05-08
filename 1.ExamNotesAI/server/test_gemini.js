
import dotenv from "dotenv";
dotenv.config();

const Gemini_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

async function test() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Hello"
              }
            ]
          }
        ]
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Status: ${response.status}, Error: ${err}`);
    }

    const data = await response.json();
    console.log("Available models:", data.models.map(m => m.name));
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

test();
