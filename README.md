# matcha-holic — Matcha Latte & Momen Tenang

Aplikasi web modern, responsif, dan elegan untuk brand matcha latte artisanal **matcha-holic**. Dibangun menggunakan React 19, TypeScript, Tailwind CSS v4, dan Vite.

---

## 🚀 Cara Menjalankan di Lokal

1. **Install dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3000` di browser.

---

## 🌐 Cara Deploy ke GitHub Pages (Deploy from a Branch)

Proyek ini sudah dilengkapi dengan paket `gh-pages` dan script otomatis sehingga Anda bisa langsung men-deploy menggunakan opsi **Deploy from a branch**.

### Cara 1: Menggunakan Perintah Otomatis `npm run deploy` (Sangat Disarankan)

1. Pastikan repo Anda sudah terhubung ke GitHub:
   ```bash
   git add .
   git commit -m "Update matcha-holic app"
   git push origin main
   ```

2. Jalankan perintah deploy ini di terminal:
   ```bash
   npm run deploy
   ```
   *Perintah ini akan otomatis me-run `npm run build` dan mem-push hasil folder `dist` ke branch `gh-pages` di GitHub Anda.*

3. Buka repositori Anda di GitHub melalui browser:
   - Klik tab **Settings**.
   - Pilih menu **Pages** di sebelah kiri.
   - Pada bagian **Build and deployment**:
     - **Source**: Pilih **Deploy from a branch**.
     - **Branch**: Pilih **`gh-pages`** dan folder **`/ (root)`**.
   - Klik tombol **Save**.

4. Tunggu beberapa detik, website Anda akan langsung aktif di URL:
   ```text
   https://<username-kamu>.github.io/<nama-repo-kamu>/
   ```

---

### Cara 2: Tetap Menggunakan Branch `main` (Folder `/docs`)

Jika Anda tidak ingin membuat branch baru dan ingin hasil build berada di branch `main`:

1. Jalankan perintah build ke folder docs:
   ```bash
   npm run build:docs
   ```
2. Commit dan push folder `docs` ke GitHub:
   ```bash
   git add docs
   git commit -m "Build website for GitHub Pages"
   git push origin main
   ```
3. Di GitHub **Settings > Pages**:
   - **Source**: **Deploy from a branch**.
   - **Branch**: Pilih **`main`** dan pilih folder **`/docs`**.
   - Klik **Save**.

---

## ✨ Fitur Aplikasi

- **Desain Responsif Penuh**: Adaptif di smartphone, tablet, dan monitor desktop (12-column grid layout & sticky sidebar).
- **Simulasi Pesan WhatsApp & Waiting List**: Konfigurasi tingkat kemanisan (Normal / Less / Zero), pilihan susu (Fresh Milk / Oat Milk), jumlah botol, dan generator pesan WhatsApp siap kirim.
- **Cek Jangkauan Pengiriman Jabodetabek**: Filter wilayah (Jakarta, Bogor, Depok, Tangerang, Bekasi) beserta jadwal kirim pukul 15.00 WIB.
- **Simpan ke Favorit (Wishlist)**: Penyimpanan lokal (*localStorage*) dengan drawer daftar pantau.
- **Audio "Momen Tenang"**: Generator suara ambient santai menggunakan Web Audio API tanpa file audio eksternal.
- **Live Search & Filter**: Pencarian instan untuk bahan, produk, dan pertanyaan FAQ.
