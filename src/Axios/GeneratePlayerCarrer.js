// src/utils/CareerPathGenerator.js

// Main function to generate career path using xAI Grok API
export const generateCareerPath = async (playerName, apiKey) => {
  if (!playerName || typeof playerName !== 'string' || playerName.trim() === '') {
    throw new Error('Player name is required and must be a non-empty string.');
  }
  if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
    throw new Error('API key is required and must be a non-empty string.');
  }

  try {
    const prompt = `Generate the professional career path for the football player ${playerName}, including:
      - All teams they played for, with years of tenure.
      - Key achievements (e.g., trophies, awards, milestones).
      - Format the response as a chronological list with bullet points for clarity.
      Focus on club and national team careers.`;

    const response = await fetch('https://api.grok.xai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'grok-3', // Use grok-3 for cost efficiency; switch to grok-4 if needed
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    throw new Error(`Failed to generate career path: ${error.message}. Check API key, connection, or usage limits.`);
  }
};

// Optional: Batch processing for multiple players
export const generateCareerPathsBatch = async (playerNames, apiKey) => {
  const results = {};
  for (const playerName of playerNames) {
    try {
      results[playerName] = await generateCareerPath(playerName, apiKey);
    } catch (error) {
      results[playerName] = `Error: ${error.message}`;
    }
  }
  return results;
};