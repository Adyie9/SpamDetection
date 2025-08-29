import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const POSTMARK_API_URL = "https://spamcheck.postmarkapp.com/filter";

app.post("/check-spam", async (req, res) => {
  try {
    const payload = {
      email: req.body.subject || "",
      options: "short"
    };

    const apiRes = await fetch(POSTMARK_API_URL, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await apiRes.json();
    res.json({
      score: data.score ?? 0,
      report: data.report ?? "No report"
    });
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ score: -1, report: "Error fetching spam score" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
