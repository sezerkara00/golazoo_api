export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.sofascore.com/api/v1/sport/football/scheduled-events/2025-07-27', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `HTTP error ${response.status}` });
    }

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', 'https://golazoo.com.tr');
    res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
}
