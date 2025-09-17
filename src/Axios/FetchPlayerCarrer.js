const API_KEY = "3c2c2348fce467bcfad3e47cc755b0eb"
//"2cb491489130e2d9797d7f90b183be7e"

const LEAGUES = [61, 39, 140, 78, 135, 2]; // Ligue 1, EPL, La Liga, Bundesliga, Serie A, UCL
const CURRENT_SEASON = 2023;

// Optional: rate-limited fetch if needed
let requestTimestamps = [];
async function rateLimitedFetch(url) {
  const now = Date.now();
  requestTimestamps = requestTimestamps.filter(ts => now - ts < 60 * 1000);

  if (requestTimestamps.length >= 5) {
    const waitTime = 60 * 1000 - (now - requestTimestamps[0]);
    await new Promise(resolve => setTimeout(resolve, waitTime));
    requestTimestamps = requestTimestamps.filter(ts => Date.now() - ts < 60 * 1000);
  }

  requestTimestamps.push(Date.now());

  return fetch(url, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  });
}

export async function searchPlayer(playerName) {
  for (const league of LEAGUES) {
    const res = await rateLimitedFetch(
      `https://v3.football.api-sports.io/players?search=${encodeURIComponent(playerName)}&league=${league}&season=${CURRENT_SEASON}`
    );

    const data = await res.json();
    if (data.response.length > 0) {
      const player = data.response[0].player;

      // Fetch transfers (no league/season needed)
      const transferRes = await rateLimitedFetch(
        `https://v3.football.api-sports.io/transfers?player=${player.id}`
      );
      const transferData = await transferRes.json();

      let transfers = [];
      if (transferData.response.length > 0) {
        transfers = transferData.response[0].transfers.map(t => ({
          date: t.date,
          from: t.teams.out.name,
          to: t.teams.in.name,
          type: t.type
        }));

        // 🔹 Sort transfers from oldest to newest
        transfers.sort((a, b) => new Date(a.date) - new Date(b.date));
      }

      return { player, transfers, league };
    }
  }

  return { error: "No player found in major leagues.", transfers: [] };
}