// claudeAPI.js
export const runChat = async (prompt) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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", // Replace with your Claude API key
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:5173/", // your local frontend URL
      "X-Title": "ClaudeApp" // your app name
    },
    body: JSON.stringify({
      model: "anthropic/claude-3-haiku",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "❌ Claude: No response.";
};
