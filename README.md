# matcha-holic — Matcha Latte & Momen Tenang

Aplikasi web modern, responsif, dan elegan untuk brand matcha latte artisanal **matcha-holic**. Dibangun menggunakan React 19, TypeScript, Tailwind CSS v4, dan Vite.

---

## 🚀 Cara Menjalankan di Lokal

1. **Clone repository:**
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   cd <NAMA_FOLDER>
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3000` di browser.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```
   Hasil build siap saji akan berada di dalam folder `dist/`.

---

## 🌐 Cara Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi dengan:
- `base: './'` pada `vite.config.ts` (mendukung path repositori seperti `username.github.io/repo-name/` maupun custom domain).
- Impor aset gambar yang di-*bundle* otomatis ke folder `dist/assets/`.
- Workflow GitHub Actions otomatis di `.github/workflows/deploy.yml`.
- Fallback SPA `public/404.html`.

### Langkah-langkah di GitHub:

1. **Push kode ke repository GitHub Anda** pada branch `main`.
2. Buka repository Anda di GitHub, lalu klik tab **Settings**.
3. Di panel sebelah kiri, pilih menu **Pages** (di bawah bagian *Code and automation*).
4. Pada bagian **Build and deployment**:
   - Ubah **Source** menjadi **GitHub Actions**.
5. Tunggu proses workflow selesai (bisa dipantau di tab **Actions**).
6. Website Anda akan langsung aktif di URL `https://<username>.github.io/<nama-repo>/`.

---

## ✨ Fitur Unggulan

- **Desain Responsif Penuh**: Adaptif di smartphone, tablet, dan monitor desktop (12-column grid layout & sticky sidebar).
- **Simulasi Pesan WhatsApp & Waiting List**: Konfigurasi tingkat kemanisan (Normal / Less / Zero), pilihan susu (Fresh Milk / Oat Milk), jumlah botol, dan generator pesan WhatsApp siap kirim.
- **Cek Jangkauan Pengiriman Jabodetabek**: Filter wilayah (Jakarta, Bogor, Depok, Tangerang, Bekasi) beserta jadwal kirim pukul 15.00 WIB.
- **Simpan ke Favorit (Wishlist)**: Penyimpanan lokal (*localStorage*) dengan drawer daftar pantau.
- **Audio "Momen Tenang"**: Generator suara ambient santai menggunakan Web Audio API tanpa file audio eksternal.
- **Live Search & Filter**: Pencarian instan untuk bahan, produk, dan pertanyaan FAQ.
