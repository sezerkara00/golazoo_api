export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://golazoo.com.tr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight check
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch('https://www.sofascore.com/api/v1/sport/football/scheduled-events/2025-07-27');
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('SofaScore API error:', error);
    return res.status(500).json({ error: 'Veri alınamadı' });
  }
}
