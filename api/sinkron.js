/**
 * Proxy sinkronisasi Vercel ke Google Apps Script.
 * Menangani redirect Apps Script di sisi server agar browser tidak terkena CORS.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, pesan: 'Metode tidak diizinkan.' });
  }

  try {
    const body = req.body || {};
    const url = String(body.url || '');
    const payload = body.payload;

    let parsed;
    try { parsed = new URL(url); } catch (_) {
      return res.status(400).json({ ok: false, pesan: 'URL Web App tidak valid.' });
    }

    if (
      parsed.protocol !== 'https:' ||
      parsed.hostname !== 'script.google.com' ||
      !/^\/macros\/s\/[^/]+\/exec\/?$/.test(parsed.pathname)
    ) {
      return res.status(400).json({ ok: false, pesan: 'Gunakan URL Web App Google Apps Script yang berakhiran /exec.' });
    }

    if (!payload || payload.aksi !== 'simpan' || !Array.isArray(payload.order)) {
      return res.status(400).json({ ok: false, pesan: 'Format data sinkronisasi tidak valid.' });
    }

    const upstream = await fetch(parsed.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    const raw = await upstream.text();
    let result;
    try { result = JSON.parse(raw); } catch (_) {
      return res.status(502).json({
        ok: false,
        pesan: 'Google Apps Script tidak mengirim JSON. Periksa deployment: jalankan sebagai Anda dan akses Siapa saja.'
      });
    }

    if (!upstream.ok || !result.ok) {
      return res.status(502).json({
        ok: false,
        pesan: result.pesan || ('Google Apps Script merespons HTTP ' + upstream.status)
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(502).json({
      ok: false,
      pesan: 'Koneksi ke Google Apps Script gagal: ' + (error.message || 'kesalahan jaringan')
    });
  }
}
