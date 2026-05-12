const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const TOKEN = '544a0ee0eaa835a50a00e1196a7023128ed069c603c4c1c292737ad2be45c630';
const ID = '93156976';

app.get('/positions', async (req, res) => {
  try {
    const url = `https://api-trading.roboforex.com/positions?id=${ID}&token=${TOKEN}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy szerver fut: ${PORT}`);
});
