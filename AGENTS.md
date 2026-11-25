# AGENTS.md — Kasir Laundry
Ikuti panduan ini dan DESIGN.md sebelum mengubah kode. Jangan menganggap file skill eksternal tersedia jika tidak ada di repository.

- Statis: `index.html`, `style.css`, `app.js` (satu IIFE), `owner.html` (dasbor read-only), `sw.js` (offline), tanpa build tool.
- Sinkron opsional: `apps-script/Code.gs` (doPost simpan order, doGet ringkasan). Di app: `antri()`, `kirim()`, `ringkasOrder()`, `statusSinkron()`. Kolom sheet = `KOLOM` di Code.gs = kunci objek `ringkasOrder()`; ubah keduanya bersamaan.
- Tema: `tema.css` (`--tema-utama`, `--tema-aksen`, `--tema-radius`, `--tema-font` + bagian) & `tema.js` (`TEMA.nama`, `TEMA.mode`). Warna lain diturunkan via `color-mix` di `style.css`; mode gelap di `[data-mode="gelap"]`.
- Data: localStorage `kasir-laundry-v1`; skema di `dataKosong()`/`dataContoh()`; field baru = migrasi di `muat()`, jangan reset data pengguna. `?demo` = data contoh di memori, tidak menyimpan.
- Halaman: `.nav[data-hal]` + `section#hal-…` + `buka()`. Status alur = array `STATUS`.
- Berkas baru → `sw.js` (`BERKAS`, naikkan `CACHE`) dan `meta.json` (`berkas`).
- Desain: baca `DESIGN.md`. Jaga token tema, aksesibilitas (AA, fokus, ≥44px, reduced-motion) dan responsif 390px–1280px; uji terang & gelap, konsol bersih.
- Anti-slop: jangan menambah dekorasi atau fitur tanpa tujuan pengguna. Semua kontrol harus bekerja, semua state loading/error/empty/success ditangani, dan perubahan harus menjaga alur transaksi.
- Keamanan: jangan commit kredensial nyata. Gunakan placeholder aman untuk rahasia, validasi input di server, dan jangan klaim localStorage sebagai database multi-perangkat.
- Verifikasi: jalankan pemeriksaan sintaks dan uji alur yang relevan jika lingkungan memungkinkan. Laporkan PASS/FAIL/NOT VERIFIED secara jujur.

## Kredit (jangan dihapus)

