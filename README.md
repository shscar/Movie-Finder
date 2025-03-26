# Movie-Finder
Pencari Film dengan api dari 'themoviedb.org'

1. Kunjungi [The Movie Database (TMDb)](https://www.themoviedb.org/).
2. Jika belum punya akun, daftar terlebih dahulu dengan mengklik tombol **Sign Up**. Jika sudah punya akun, cukup login.
3. **Buka Pengaturan API**
   - Setelah login, klik gambar profil Anda di pojok kanan atas.
   - Pilih **Settings** (Pengaturan).
   - Di menu sebelah kiri, scroll ke bawah dan klik **API**.
4. **Buat API Key**
   - Klik tombol **Create** atau **Request API Key**.
   - Pilih jenis API (biasanya **Developer API** untuk keperluan pribadi atau proyek).
   - Isi informasi yang diperlukan, seperti nama aplikasi dan deskripsi penggunaan.
   - Setelah permintaan disetujui, akan mendapatkan **API Key** yang bisa digunakan dalam proyek.
5. **Gunakan API Key di Kode Anda**
   Setelah mendapatkan API key, masukkan ke dalam kode Anda:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
   const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
   ```