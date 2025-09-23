// Replace with your Football-Data.org API key
const API_KEY = "key";

/**
 * Fetch all teams for a given competition (league) and return a map: team name -> logo URL
 * @param {string} competitionCode - e.g., "PL" for Premier League
 * @returns {Promise<Object>} - { "Team Name": "logo URL", ... }
 */
export async function fetchTeamLogos(competitionCode) {
  const url = `https://api.football-data.org/v4/competitions/${competitionCode}/teams`;

  try {
    const response = await fetch(url, {
      headers: { "X-Auth-Token": API_KEY }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const teamLogos = {};

    data.teams.forEach(team => {
      teamLogos[team.name] = team.crest;
    });

    return teamLogos;
  } catch (err) {
    console.error("Error fetching team logos:", err);
    return {};
  }
}