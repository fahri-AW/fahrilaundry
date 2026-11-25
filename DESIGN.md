# DESIGN — Fahri Laundry

## Arah desain
Antarmuka operasional laundry yang tenang, jelas, dan cepat dipindai. Prioritas utama adalah input order, pemantauan status cucian, dan pencatatan pembayaran. Hindari dekorasi yang tidak membantu pekerjaan kasir.

## Token visual
- Utama: ungu `#7045bd` untuk aksi utama dan navigasi aktif.
- Aksen: lavender `#b99bea` untuk ilustrasi dan penanda sekunder.
- Latar: `#f7f5fb`; panel: putih; teks: `#302744`.
- Mode gelap memakai permukaan gelap netral dengan kontras teks tinggi.
- Tipografi: Plus Jakarta Sans, angka memakai tabular numerals.
- Radius komponen 10–16px. Bayangan ringan dan seperlunya.

## Prioritas layout
- Desktop: sidebar 236px, area kerja lebar dengan batas maksimum 1600px.
- Tablet: sidebar 210px, papan status dua kolom.
- Ponsel: navigasi bawah, papan satu kolom, form order satu kolom, ringkasan total mengikuti alur konten.
- Tombol dan target sentuh minimal 44px. Input ponsel minimal 16px untuk mencegah zoom otomatis.

## Komponen utama
- Papan status: kolom berdasarkan tahap kerja, kartu order ringkas, status dan estimasi mudah dibaca.
- Order baru: input teks opsional, form pelanggan, layanan, paket, catatan, dan ringkasan biaya.
- Laporan: metrik utama, grafik harian, daftar cucian belum diambil dan piutang.
- Owner: ringkasan baca-saja dari sinkronisasi Google Sheets.

## Aksesibilitas dan gerak
- Fokus keyboard terlihat jelas.
- Warna bukan satu-satunya penanda status.
- Kontras teks dan latar harus memadai.
- `prefers-reduced-motion` dihormati.
- Hindari animasi berulang yang tidak menyampaikan perubahan status.

## Batasan produk
- `localStorage` tetap penyimpanan lokal perangkat. Tampilan tidak boleh memberi kesan bahwa data otomatis tersedia lintas perangkat.
- Input transaksi teks adalah parser lokal berbasis aturan, bukan AI generatif.
- Sinkronisasi Google Sheets bersifat opsional dan perlu konfigurasi pengguna.
