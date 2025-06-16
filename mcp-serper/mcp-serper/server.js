// server.js
import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

app.get('/models', (req, res) => {
  res.json([
    {
      title: "DeepSeek-R1-Free (via MCP)",
      provider: "mcp",
      model: "deepseek/deepseek-r1:free"
    }
  ]);
});

const PORT = process.env.PORT || 3001;
const SERPER_API_KEY = process.env.SERPER_API_KEY;

app.post('/search', async (req, res) => {
  const query = req.body.q;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter `q`' });
  }

  console.log('Got query:', query);  // <-- Added

  try {
    const response = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': SERPER_API_KEY,
      },
      body: JSON.stringify({ q: query, hl: 'en', gl: 'us' }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Serper error:', data);  // <-- Added
      return res.status(response.status).json({ error: data.message || 'Serper error' });
    }

    const results = data.organic
      ?.map(r => `${r.title} - ${r.link}`)
      .join('\n') || 'No results found.';

    res.json({ result: results });
  } catch (err) {
    console.error('Fetch failed:', err); // <-- Added
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serper MCP server listening on port ${PORT}`);
});
