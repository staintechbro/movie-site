const fetchClient = globalThis.fetch || require('undici').fetch;

module.exports = async (req, res) => {
  const tmdbPath = req.query.tmdb;
  if (!tmdbPath || tmdbPath.length === 0) {
    return res.status(400).json({ error: 'Missing TMDB path' });
  }

  const path = Array.isArray(tmdbPath) ? tmdbPath.join('/') : tmdbPath;
  const url = new URL(`https://api.themoviedb.org/3/${path}`);
  const searchParams = { ...req.query };
  delete searchParams.tmdb;

  if (!process.env.TMDB_BEARER && process.env.TMDB_API_KEY) {
    searchParams.api_key = process.env.TMDB_API_KEY;
  }

  url.search = new URLSearchParams(searchParams).toString();

  const headers = {};
  if (process.env.TMDB_BEARER) {
    let bearerValue = process.env.TMDB_BEARER.trim();
    if (!bearerValue.toLowerCase().startsWith('bearer ')) {
      bearerValue = `Bearer ${bearerValue}`;
    }
    headers.Authorization = bearerValue;
  }

  try {
    const response = await fetchClient(url.toString(), { headers });
    const body = await response.text();
    const contentType = response.headers.get('content-type') || 'application/json';
    res.setHeader('Content-Type', contentType);
    return res.status(response.status).send(body);
  } catch (error) {
    console.error('Vercel TMDB proxy error:', error);
    return res.status(500).json({ error: 'TMDB proxy error' });
  }
};