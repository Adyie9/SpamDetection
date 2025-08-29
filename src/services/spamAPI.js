const POSTMARK_API_URL = "https://spamcheck.postmarkapp.com/filter";


// src/services/spamAPI.js
export async function checkSpamAssassin(subject) {
  try {
    if (!subject || subject.trim() === "") {
      return { score: 0, report: "No subject provided." };
    }

    // spammy keywords (all uppercase for consistent checking)
    const spammyWords = ["FREE", "WINNER", "$$$", "CLAIM", "PRIZE", "MONEY", "CLICK"];
    let score = 0;
    let reasons = [];

    spammyWords.forEach(word => {
      if (subject.toUpperCase().includes(word)) {
        score += 2; // add 2 points per spammy word
        reasons.push(`Contains spammy word: "${word}"`);
      }
    });

    // result
    return {
      score: score || 0,
      report: reasons.length > 0 ? reasons.join("\n") : "No major spam triggers detected."
    };
  } catch (err) {
    console.error("Spam check failed:", err);
    return { score: -1, report: "Error running spam check" };
  }
}
