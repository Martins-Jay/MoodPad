import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const HF_API_KEY = process.env.HF_API_KEY;
const HF_MODEL = "gpt2" // Example open-source text generation model

// endpoint to generate mood insight
app.post("/api/mood-insight", async (req, res) => {
  try {
    const { moodSummary } = req.body;

    if (!moodSummary) {
      return res.status(400).json({ error: "No mood summary provided" });
    }

    // Hugging Face Inference API call
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${HF_MODEL}`,
      { inputs: `User mood today: ${moodSummary}. Generate a short, kind insight for dashboard.` },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 30000 // 30s timeout
      }
    );

    // Hugging Face returns array of results for text generation
    const generatedText = response.data[0]?.generated_text || "No insight generated.";

    res.json({ message: generatedText });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
