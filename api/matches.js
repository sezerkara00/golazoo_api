import fetch from 'node-fetch';

export default async function handler(req, res) {
  // CORS ayarı
  res.setHeader('Access-Control-Allow-Origin', 'https://golazoo.com.tr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Preflight isteği yanıtla
  }

  try {
    const response = await fetch('https://www.sofascore.com/api/v1/sport/football/scheduled-events/2025-07-27');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('SofaScore error:', err);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
} 