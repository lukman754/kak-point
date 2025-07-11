# 🏆 KAK SISPEMA Extension

<p align="center">
  <img src="image.png" alt="KAK SISPEMA Icon" width="120" />
</p>

**KAK SISPEMA** adalah ekstensi browser untuk membantu mahasiswa Universitas Pamulang (UNPAM) menghitung dan menampilkan ringkasan point Kredit Aktivitas Kemahasiswaan (KAK) secara otomatis di platform [SISPEMA UNPAM](https://sispema.unpam.ac.id/).

---

## ✨ Fitur Utama

- **Perhitungan Point Otomatis**: Hitung total point KAK dari berbagai kategori secara real-time.
- **Ringkasan Visual**: Tampilkan ringkasan nilai, breakdown per kategori, dan predikat secara interaktif.
- **Popup Minimalis**: UI modern, minimalis, dan tidak mengganggu tampilan SISPEMA.
- **Referensi SK-KAK**: Link langsung ke dokumen SK-KAK resmi untuk transparansi perhitungan.

---

## 🚀 Cara Install

1. **Download** file ekstensi ini 👉 [Klik Untuk Download](https://github.com/lukman754/kak-point/releases/download/v1.0/kak-point-1.0.zip).
2. Extrak file yang sudah di download tadi
3. Buka browser Chrome/Edge/Brave, masuk ke `chrome://extensions/`.
4. Aktifkan **Developer Mode** (Mode Pengembang).
5. Klik **Load unpacked** (Muat tanpa dikemas) dan pilih folder ekstensi ini.
6. Buka [https://sispema.unpam.ac.id/](https://sispema.unpam.ac.id/) dan klik tombol ringkasan di pojok kanan bawah!

---

## 🚀 Cara Jalankan di Console (tanpa extension)

1. Buka DevTools (F12 → tab Console).
2. Jika muncul alert "allow pasting", ketik:
   `allow pasting`
3. Lalu jalankan:

```
document.head.appendChild(Object.assign(document.createElement('script'), {
  src: 'https://cdn.jsdelivr.net/gh/lukman754/kak-point@v1.0/sispema.js?t=' + Date.now()
}));
```

---

## 🖼️ Preview

<img width="1920" height="976" alt="image" src="https://github.com/user-attachments/assets/d2fa3ed4-8068-446f-9b34-25dbf50a16f3" />

---

## 📄 Referensi

- [SK-KAK.pdf (Google Drive)](https://drive.google.com/file/d/13Sc1r6c8CSlmhs7fMpjDfzeWDpXyanzs/view?usp=sharing)
- [SISPEMA UNPAM](https://sispema.unpam.ac.id/)

---

<div align="center">
  <p>Dibuat dengan ❤️ untuk mahasiswa UNPAM</p>

[![GitHub](https://img.shields.io/badge/Follow-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/lukman754)
[![Instagram](https://img.shields.io/badge/Follow-Instagram-E4405F?style=for-the-badge&logo=instagram)](https://instagram.com/_.chopin)
[![Support Me](https://img.shields.io/badge/Support_with_Coffee-FF813F?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://saweria.co/chopin)

  <p>© 2025 <a href="https://instagram.com/_.chopin">Lukman Muludin</a>. All Rights Reserved.</p>
</div>
