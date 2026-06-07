const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BEARER = process.env.TMDB_BEARER;
const fetchClient = globalThis.fetch || require('undici').fetch;

if (!TMDB_API_KEY && !TMDB_BEARER) {
  console.warn('WARNING: No TMDB credentials found. Set TMDB_API_KEY or TMDB_BEARER in .env.');
}

app.use(express.static(path.join(__dirname)));

app.get('/api/*', async (req, res) => {
  const tmdbPath = req.params[0];
  if (!tmdbPath) {
    return res.status(400).json({ error: 'Missing TMDB path' });
  }

  try {
    const url = new URL(`https://api.themoviedb.org/3/${tmdbPath}`);
    const searchParams = { ...req.query };
    if (!TMDB_BEARER && TMDB_API_KEY) {
      searchParams.api_key = TMDB_API_KEY;
    }
    url.search = new URLSearchParams(searchParams).toString();

    const headers = {};
    if (TMDB_BEARER) {
      let bearerValue = TMDB_BEARER.trim();
      if (!bearerValue.toLowerCase().startsWith('bearer ')) {
        bearerValue = `Bearer ${bearerValue}`;
      }
      headers.Authorization = bearerValue;
    }

    const response = await fetchClient(url.toString(), { headers });
    const body = await response.text();

    if (!response.ok) {
      return res.status(response.status).send(body);
    }

    res.set('Content-Type', 'application/json');
    res.send(body);
  } catch (error) {
    console.error('TMDB proxy error:', error);
    res.status(500).json({ error: 'TMDB proxy error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
