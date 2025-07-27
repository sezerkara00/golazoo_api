export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.sofascore.com/api/v1/sport/football/scheduled-events/2025-07-27', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `HTTP error ${response.status}` });
    }

    const data = await response.json();

    // Burada CORS header yok, çünkü sadece tarayıcıda doğrudan açma için
    res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
}
