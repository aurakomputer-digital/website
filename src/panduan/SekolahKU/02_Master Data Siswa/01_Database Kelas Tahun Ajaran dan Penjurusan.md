---
layout: doc.njk
title: Master Data Tahun Ajaran, Kelas dan Penjurusan
description: Panduan lengkap pengelolaan master data fondasi sistem informasi sekolah
isSlide: true
category: Web
updated: 2026-07-26
---

<!-- _class: lead -->

# Master Data Tahun Ajaran, Kelas dan Penjurusan

### Fondasi Pengelolaan Data Siswa yang Kuat

<center>

![logo height:200px](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260710160338832.webp)

</center>

---

<!-- _class: lead -->

## 🎯 Tujuan Pembelajaran

Setelah mempelajari modul ini, Anda akan mampu:

1. ✅ Memahami **konsep dan pentingnya** master data dalam sistem
2. ✅ Mengelola data **Penjurusan** dengan tepat
3. ✅ Mengelola data **Kelas** sesuai struktur sekolah
4. ✅ Menggunakan fitur **Import Excel** untuk efisiensi
5. ✅ Menghindari **kesalahan umum** dalam pengelolaan data

---

## 📚 Apa itu Master Data?

**Master Data** adalah data induk yang menjadi acuan utama dalam sistem dan digunakan secara berulang.

### Analogi Sederhana:

> Seperti **pondasi bangunan**, jika master data salah, seluruh data turunan (siswa, nilai, rapor) akan ikut salah.

### Hierarki Data Sekolah:

```
Tahun Ajaran
    └── Penjurusan
            └── Kelas
                    └── Siswa
```

---

## 🔍 Memahami Konsep Penjurusan

### Definisi:

**Penjurusan** adalah pengelompokan siswa berdasarkan minat, bakat, dan tujuan akademik mereka.

### Contoh Penerapan:

**SMA/MA:**

- 📐 MIPA (Matematika & Ilmu Pengetahuan Alam)
- IPS (Ilmu Pengetahuan Sosial)
- 🎨 Bahasa & Budaya

**SMK:**

- 💻 Rekayasa Perangkat Lunak
- 🔧 Teknik Kendaraan Ringan
- 🏢 Akuntansi & Keuangan
- 🎨 Desain Komunikasi Visual

---

# 1. Kelola Data Jurusan

### 📍 Akses Menu:

```
Dashboard → Daftar Siswa → Daftar Jurusan
```

![w:900](/img/sekolahku/12/Pasted-2.png)

---

## 🎯 Fungsi Data Jurusan

1. **Klasifikasi Siswa** - Mengelompokkan siswa sesuai bidang studi
2. **Kurikulum** - Menentukan mata pelajaran spesifik
3. **Pelaporan** - Memudahkan analisis per jurusan
4. **Penjadwalan** - Membantu pembagian jadwal mengajar

---

## ➕ Menambah Data Jurusan

### Langkah-langkah:

1. Klik tombol **<span class="text-green-600 font-bold">+ Tambah</span>**
2. Isi formulir dengan lengkap:
   - **Kode Jurusan** (unik, contoh: RPL, TKR, AKL)
   - **Nama Jurusan** (lengkap dan jelas)
   - **Deskripsi** (opsional, untuk penjelasan detail)
3. Klik **<span class="text-blue-600 font-bold">Submit</span>**

### ✅ Best Practice:

- Gunakan **kode standar** yang konsisten
- Hindari singkatan yang ambigu
- Pastikan nama jurusan sesuai dengan kurikulum

---

## ✏️ Mengubah/Edit Data Jurusan

### Cara Edit:

1. Cari jurusan yang ingin diubah
2. Klik ikon **<span class="text-yellow-600">✏️ Edit</span>** pada baris data
3. Lakukan perubahan
4. Klik **Update**

> [!WARNING]
> **⚠️ Peringatan Penting:**
> Perubahan data jurusan akan **berdampak otomatis** pada:
>
> - Data siswa yang sudah terdaftar
> - Laporan yang sudah dibuat
> - Riwayat akademik
>
> **Selalu backup data sebelum melakukan perubahan!**

---

## 🗑️ Menghapus Data Jurusan

### Prosedur Penghapusan:

1. Klik ikon **<span class="text-red-600">️ Hapus</span>**
2. Baca pesan konfirmasi dengan teliti
3. Klik **Ya, Hapus** untuk konfirmasi

![w:650](/img/sekolahku/12/Pasted-6.png)

---

### ⛔ Kapan TIDAK BOLEH menghapus jurusan?

**JANGAN HAPUS** jika:

- Masih ada siswa aktif di jurusan tersebut
- ❌ Masih ada data nilai/rapor terkait
- ❌ Masih ada kelas yang menggunakan jurusan ini

**Solusi Alternatif:**

- ✅ **Nonaktifkan** jurusan (jika sistem mendukung)
- ✅ **Pindahkan** siswa ke jurusan lain terlebih dahulu
- ✅ **Arsipkan** untuk referensi masa depan

---

<!-- _class: lead -->

## 🏫 Memahami Konsep Kelas

### Definisi:

**Kelas** adalah satuan kelompok belajar yang memfasilitasi proses pembelajaran harian.

### Struktur Kelas:

```
Tahun Ajaran 2026/2027
├── Kelas X (10)
│   ├── X-RPL-1
│   ├── X-RPL-2
│   └── X-TKR-1
├── Kelas XI (11)
│   ├── XI-RPL-1
│   └── XI-TKR-1
└── Kelas XII (12)
    ├── XII-RPL-1
    └── XII-TKR-1
```

---

# 2. Kelola Data Kelas

### 📍 Akses Menu:

```
Dashboard → Daftar Siswa → Daftar Kelas
```

![w:900](/img/sekolahku/12/Pasted-7.png)

---

## 🎯 Informasi Penting dalam Data Kelas

Setiap data kelas harus memuat:

| Field            | Keterangan            | Contoh              |
| ---------------- | --------------------- | ------------------- |
| **Tahun Ajaran** | Periode akademik      | 2026/2027           |
| **Tingkat**      | Kelas/tingkatan       | X, XI, XII          |
| **Jurusan**      | Bidang studi          | RPL, TKR, AKL       |
| **Nama Kelas**   | Identifikasi unik     | X-RPL-1             |
| **Wali Kelas**   | Guru penanggung jawab | Budi Santoso, S.Kom |
| **Kapasitas**    | Jumlah maksimal siswa | 36 siswa            |

---

## ➕ Menambah Data Kelas

### Langkah Detail:

1. Klik tombol **<span class="text-green-600 font-bold">+ Tambah Kelas</span>**

2. Isi formulir dengan cermat:
   - Pilih **Tahun Ajaran** (harus sudah dibuat sebelumnya)
   - Pilih **Tingkat/Kelas** (X/XI/XII atau 10/11/12)
   - Pilih **Jurusan** dari dropdown
   - Isi **Nama Kelas** (otomatis atau manual)
   - Pilih **Wali Kelas** (guru yang terdaftar)
   - Tentukan **Kapasitas Maksimum**

3. **Review** kembali data yang diinput
4. Klik **<span class="text-blue-600 font-bold">Simpan</span>**

---

## ✏️ Mengedit Data Kelas

### Skenario Perubahan:

**Perubahan Ringan** (Aman):

- ✅ Mengganti wali kelas
- ✅ Menyesuaikan kapasitas
- ✅ Koreksi typo nama kelas

**Perubahan Berat** (Perlu Hati-hati):

- ⚠️ Mengganti jurusan (berpengaruh pada siswa)
- ⚠️ Mengubah tahun ajaran (tidak direkomendasikan)
- ⚠️ Mengubah tingkat/kelas

> [!TIP]
> **Tips:** Untuk perubahan berat, pertimbangkan untuk membuat kelas baru dan memindahkan siswa secara bertahap.

---

## Fitur Import Excel - Overview

### Mengapa Import Excel?

**Tanpa Import:**

- ⏱️ Input manual 30 kelas = 2-3 jam
- 😓 Risiko human error tinggi
- 🔁 Proses berulang dan membosankan

**Dengan Import:**

- ⚡ Input 30 kelas = 5-10 menit
- ✅ Validasi otomatis oleh sistem
- 📋 Template terstandarisasi

---

## 📥 Fitur Import Excel - Langkah 1/3

### Persiapan File:

1. Klik tombol **<span class="text-purple-600">📥 Download Template</span>**
2. Buka file Excel yang telah diunduh
3. **JANGAN UBAH** struktur kolom dan header
4. Isi data sesuai contoh yang disediakan

### Format Template:

```
| Tahun_Ajaran | Tingkat | Jurusan | Nama_Kelas | Wali_Kelas | Kapasitas |
|--------------|---------|---------|------------|------------|-----------|
| 2026/2027    | X       | RPL     | X-RPL-1    | Budi S.    | 36        |
| 2026/2027    | X       | RPL     | X-RPL-2    | Ani W.     | 36        |
```

---

## 📤 Fitur Import Excel - Langkah 2/3

### Upload dan Proses:

1. Klik tombol **<span class="text-blue-600">Import</span>**
2. Klik **Pilih File** atau **Drag & Drop** file Excel
3. Sistem akan melakukan **validasi awal**
4. Klik **Proses Import**

### Indikator Proses:

- 🔄 **Processing...** - Sistem sedang memproses
- ⏳ **Validating...** - Pengecekan data
- ✅ **Success!** - Import berhasil

---

## ✅ Fitur Import Excel - Langkah 3/3

### Interpretasi Hasil:

**🟢 Import Berhasil:**

```
✅ 25 data berhasil diimport
⚠️ 0 data gagal
ℹ️ 0 data duplikat
```

** Import Sebagian Gagal:**

```
✅ 20 data berhasil diimport
❌ 5 data gagal
⚠️ Lihat detail error di bawah
```

---

## 🐛 Troubleshooting Import Excel

### Error Umum & Solusi:

| Error                       | Penyebab                  | Solusi                                  |
| --------------------------- | ------------------------- | --------------------------------------- |
| **Data duplikat**           | Kelas sudah ada           | Hapus baris atau edit data existing     |
| **Jurusan tidak ditemukan** | Kode jurusan salah        | Cek kode jurusan di menu Daftar Jurusan |
| **Wali kelas tidak valid**  | Nama guru tidak terdaftar | Pastikan guru sudah ada di Data Guru    |
| **Format tahun salah**      | Tidak sesuai format       | Gunakan format YYYY/YYYY (2026/2027)    |
| **Kapasitas negatif**       | Angka tidak valid         | Isi dengan angka positif (min. 1)       |

---

## 💡 Tips Import Efisien

### Sebelum Import:

1. ✅ Pastikan **Tahun Ajaran** sudah dibuat
2. ✅ Pastikan **Data Jurusan** sudah lengkap
3. ✅ Pastikan **Data Guru** sudah tersedia
4. ✅ Bersihkan data dari **formatting Excel** yang tidak perlu
5. ✅ Simpan file dengan **encoding UTF-8**

### Setelah Import:

1.  **Review** hasil import di daftar kelas
2.  📝 **Catat** kelas yang gagal untuk diperbaiki
3.  🔄 **Ulangi** import hanya untuk data yang gagal
4.  ✅ **Verifikasi** data secara acak

---

## 🔍 Validasi Data Kelas

### Checklist Setelah Input:

- [ ] Semua kelas sudah terdaftar
- [ ] Jumlah kelas sesuai rencana
- [ ] Wali kelas sudah ditugaskan dengan benar
- [ ] Kapasitas kelas realistis
- [ ] Tidak ada duplikasi nama kelas
- [ ] Tahun ajaran sudah tepat
- [ ] Jurusan sudah sesuai

---

## ⚡ Shortcut & Tips Cepat

### Keyboard Shortcut:

- **Ctrl + F** - Cari kelas dengan cepat
- **Ctrl + Click** - Pilih multiple rows (jika tersedia)
- **Esc** - Tutup modal/dialog

### Tips Produktivitas:

1. 📋 **Copy-Paste** dari Excel untuk input manual cepat
2. **Bookmark** halaman yang sering diakses
3. 📅 **Jadwalkan** input data di awal tahun ajaran
4. 💾 **Export** data secara berkala untuk backup

---

## 🚨 Kesalahan Umum yang Harus Dihindari

### ❌ DON'T:

- Menghapus jurusan/kelas yang masih aktif
- Input data tanpa validasi
- Menggunakan kode/nama yang tidak konsisten
- Lupa backup sebelum perubahan besar
- Import data tanpa cek template

### ✅ DO:

- Selalu backup data penting
- Validasi data sebelum submit
- Gunakan standar penamaan yang konsisten
- Dokumentasikan perubahan penting
- Test import dengan data kecil dulu

---

## 📋 Rangkuman

### Poin-Poin Penting:

1. **Master Data** adalah fondasi sistem - kelola dengan hati-hati
2. **Jurusan** mengelompokkan siswa berdasarkan bidang studi
3. **Kelas** adalah unit pembelajaran terkecil
4. **Import Excel** menghemat waktu untuk input massal
5. **Validasi** adalah kunci data yang berkualitas
6. **Backup** sebelum melakukan perubahan besar

---

<!-- _class: lead -->

## 🎓 Anda Telah Menyelesaikan Modul Ini!

### Langkah Selanjutnya:

- 📖 Pelajari modul **"Input Data Siswa"**
- 📖 Pelajari modul **"Manajemen Tahun Ajaran"**
- Pelajari modul **"Penjadwalan Pembelajaran"**

---

## 📞 Butuh Bantuan?

### Pusat Bantuan Sistem Informasi Sekolah

**Kontak Support:**

- Email: support@sekolahku.sch.id
- 📱 WhatsApp: 0812-3456-7890
- 🌐 Helpdesk: https://help.sekolahku.sch.id

**Jam Operasional:**
Senin - Jumat: 08.00 - 16.00 WIB

---

<!-- _class: end -->

# Terima Kasih

### "Data yang baik adalah awal dari keputusan yang baik"

<center>

**Tim Pengembangan Sistem Informasi Sekolah**

© 2026 - Semua Hak Dilindungi

</center>
