const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
 
const app = express();
app.use(cors());
 
const TOKEN = 'decdaa8ea9068375798f7f6483a870b593424422e3df1f42a4ae7733b66c1d26';
const ACCOUNT_ID = '93156976';
const BASE_URL = 'https://api.stockstrader.com';
 
app.get('/positions', async (req, res) => {
  try {
    const url = `${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/orders`;
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
 
app.get('/deals', async (req, res) => {
  try {
    const url = `${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}/deals`;
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
