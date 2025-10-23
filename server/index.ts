import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// SPA fallback: serve index.html for all unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
