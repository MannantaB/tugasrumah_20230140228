
# Tugas Rumah Mata Kuliah Pengembangan Web Service
> author: Mannanta Brilian Citra - 20230140228

## Table of Content
- [Deskripsi Program](#deskripsi-program)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Project Documentation](#project-documentation)

## Deskripsi Program
Aplikasi web sederhana yang terdiri dari basis data MySQL, API dengan Node.js (Express.js), dan antarmuka HTML + JavaScript.

## Project Structure
```
TUGASPWS2/
├── node_modules/         # Folder dependency Node.js (otomatis, jangan diubah manual)
├── public/               # File statis (HTML, gambar, dll)
│   └── index.html        # Halaman utama (bisa untuk uji coba FE sederhana)
├── uploads/              # Folder penyimpanan file hasil upload (misal: gambar produk)
├── .env                  # Konfigurasi environment (PORT, DB connection, dll)
├── .gitignore            # File/folder yang diabaikan Git (misal: node_modules)
├── db.js                 # File koneksi database
├── package-lock.json     # Auto-generated, lock versi dependency
├── package.json          # Konfigurasi project & daftar dependency
├── README.md             # Dokumentasi project
├── server.js             # Entry point backend (Express server & routing)
└── tugaspsws.sql         # Script SQL (struktur & data awal database)
```

## How to Run
1. Clone Repository (Jalankan di dalam WSL)
   ```
   git clone https://github.com/MannantaB/tugasrumah_20230140228.git
   cd tugasrumah_20230140228
   ```
2. Set Up MySQL Workbench
   - Buat database di MySQL Workbench dengan nama `personal_records`
   - Import file `tugaspws.sql` dari repository ini
3. Set Up Env
   - Buka file `.env` di root project.
   - Sesuaikan PORT, DB_HOST, DB_USER, dan DB_PASSWORD dengan konfigurasi MySQL Workbench kamu
5. Install dependencies
   ```
   npm install
   ```
6. Run Project
   ```
   node server.js
   ```

## Project Documentation
| Page | Screenshot |
|---|---|
| **Input Page** |<img width="2880" height="1800" alt="Screenshot 2025-09-06 210626" src="https://github.com/user-attachments/assets/4bef9087-24a8-45e9-893b-c50789f5fc8f" />|
| **Daftar Data** |<img width="2880" height="1800" alt="Screenshot 2025-09-06 210650" src="https://github.com/user-attachments/assets/df9e0a04-f0ab-49b0-8df1-4174e0efd71b" />|
| **Hasil respons JSON dari GET /api/records** |<img width="2880" height="1800" alt="Screenshot 2025-09-06 202346" src="https://github.com/user-attachments/assets/37ad4a67-0d6f-4e55-8129-6c97cb4d26b2" />|
