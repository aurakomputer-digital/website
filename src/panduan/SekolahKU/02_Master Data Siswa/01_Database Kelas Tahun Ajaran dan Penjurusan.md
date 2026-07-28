---
layout: doc.njk
title: Master Data Tahun Ajaran, Kelas dan Penjurusan
description: Panduan lengkap pengelolaan master data fondasi sistem informasi sekolah
isSlide: true
category: Web
updated: 2026-07-26
---

<!--
marp: true
footer: "&copy;  Aura Komputer Digital | https://s.id/aurakomputer"
style: |
    section {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1.2em;
    }
    h1 {
      color: #2c3e50;
      border-bottom: 2px solid #2980b9;
      padding-bottom: 10px;
    }
    h2 {
      color: #2980b9;
    }
    section.lead {
      text-align: center;
    }
    section.lead h1 {
      border-bottom: none;
      font-size: 1.5em;
    }
    section.lead h2 {
    }
    ul {
      font-size: 0.9em;
      line-height: 1.6;
    }
    strong {
      color: #2c3e50;
    }
-->

<!-- _class: lead -->

# Master Data Tahun Ajaran, Kelas dan Penjurusan

### Fondasi Pengelolaan Data Siswa yang Kuat

<center>

![logo height:200px](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260710160338832.webp)

</center>

---

# Tujuan Pembelajaran

Setelah mempelajari modul ini, Anda akan mampu:

1.  Memahami **konsep dan pentingnya** master data dalam sistem
2.  Mengelola data **Penjurusan** dengan tepat
3.  Mengelola data **Kelas** sesuai struktur sekolah
4.  Menggunakan fitur **Import Excel** untuk efisiensi
5.  Menghindari **kesalahan umum** dalam pengelolaan data

---

# Apa itu Master Data?

**Master Data** adalah data induk yang menjadi acuan utama dalam sistem dan digunakan secara berulang.

### Analogi Sederhana:

> Seperti **pondasi bangunan**, jika master data salah, seluruh data turunan (siswa, nilai, rapor) akan ikut salah.

![bg right:20% 80%](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728095815806.webp)

---

# Memahami Konsep Penjurusan

### Definisi:

**Penjurusan** adalah pengelompokan siswa berdasarkan minat, bakat, dan tujuan akademik mereka.

### Contoh Penerapan:

```
SMA/MA:

- MIPA (Matematika & Ilmu Pengetahuan Alam)
- IPS (Ilmu Pengetahuan Sosial)
- Bahasa & Budaya

SMK:

- Rekayasa Perangkat Lunak
- Teknik Kendaraan Ringan
- Akuntansi & Keuangan
- Desain Komunikasi Visual

```

---

# Kelola Data Jurusan

### Akses Menu:

```
Module Database Siswa → Daftar Jurusan
```

![bg right:40% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728100229145.webp)
![w:900](/img/sekolahku/12/Pasted-2.png)

---

# Fungsi Data Jurusan

1. **Klasifikasi Siswa** - Mengelompokkan siswa sesuai bidang studi
2. **Kurikulum** - Menentukan mata pelajaran spesifik
3. **Pelaporan** - Memudahkan analisis per jurusan
4. **Penjadwalan** - Membantu pembagian jadwal mengajar

---

# Menambah Data Jurusan

### Langkah-langkah:

1. Klik tombol **<span class="text-green-600 font-bold">+ Tambah</span>**
2. Isi formulir dengan lengkap:
   - **Kode Jurusan** (unik, contoh: RPL, TKR, AKL)
   - **Nama Jurusan** (lengkap dan jelas)
   - **Deskripsi** (opsional, untuk penjelasan detail)
3. Klik **<span class="text-blue-600 font-bold">Submit</span>**

### Best Practice:

- Gunakan **kode standar** yang konsisten
- Hindari singkatan yang ambigu
- Pastikan nama jurusan sesuai dengan kurikulum

![bg right:40% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728100623208.webp)

---

# ️ Mengubah/Edit Data Jurusan

### Cara Edit:

1. Cari jurusan yang ingin diubah
2. Klik ikon **<span class="text-yellow-600">️ Edit</span>** pada baris data
3. Lakukan perubahan
4. Klik **Update**

> [!WARNING]
> **️ Peringatan Penting:**
> Perubahan data jurusan akan **berdampak otomatis** pada:
>
> - Data siswa yang sudah terdaftar
> - Laporan yang sudah dibuat
> - Riwayat akademik
>
> **Selalu backup data sebelum melakukan perubahan!**

![bg right:40% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728100819133.webp)

---

## ️ Menghapus Data Jurusan

### Prosedur Penghapusan:

1. Klik ikon **<span class="text-red-600">️ Hapus</span>**
2. Baca pesan konfirmasi dengan teliti
3. Klik **Ya, Hapus** untuk konfirmasi

![w:650](/img/sekolahku/12/Pasted-6.png)

![bg right:40% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728100910738.webp)

---

# Kapan TIDAK BOLEH menghapus jurusan?

**JANGAN HAPUS** jika:

- Masih ada siswa aktif di jurusan tersebut
- Masih ada data nilai/rapor terkait
- Masih ada kelas yang menggunakan jurusan ini

**Solusi Alternatif:**

- **Nonaktifkan** jurusan (jika sistem mendukung)
- **Pindahkan** siswa ke jurusan lain terlebih dahulu
- **Arsipkan** untuk referensi masa depan

![bg right:40%](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728100956437.webp)

---

# Memahami Konsep Kelas

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

# Kelola Data Kelas

### Akses Menu:

```
Dashboard → Daftar Siswa → Daftar Kelas
```

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728101206132.webp)

---

## Informasi Penting dalam Data Kelas

Setiap data kelas harus memuat:

| Field            | Keterangan                                                                                  | Contoh                   |
| ---------------- | ------------------------------------------------------------------------------------------- | ------------------------ |
| **Kelas Khusus** | Digunakan untuk membuat data kelas khusus (biasa digunakan untuk mendampingi kelas reguler) | Kelas bahasa inggris     |
| **Tahun Ajaran** | Periode akademik                                                                            | 2026-2027                |
| **Tingkat**      | Kelas/tingkatan                                                                             | 10, 11, 12               |
| **Jurusan**      | Bidang studi                                                                                | RPL, TKR, AKL            |
| **Nama Kelas**   | Identifikasi unik                                                                           | X-RPL-1                  |
| **Wali Kelas**   | Guru penanggung jawab                                                                       | Budi Santoso, S.Kom      |
| **Kelompok**     | Digunakan untuk mengelompokan data kelas (biasa digunakan untuk kelas khusus)               | Yamaha, Toshiba, Reguler |

---

# Menambah Data Kelas

### Langkah Detail:

1. Klik tombol **<span class="text-green-600 font-bold">+ Tambah Kelas</span>**

2. Isi formulir dengan dan benar:
3. **Review** kembali data yang diinput
4. Klik **<span class="text-blue-600 font-bold">Simpan</span>**

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728102031429.webp)

---

# ️ Mengedit Data Kelas

### Skenario Perubahan:

**Perubahan Ringan** (Aman):

- Mengganti wali kelas
- Koreksi typo nama kelas

**Perubahan Berat** (Perlu Hati-hati):

- ️ Mengganti jurusan (berpengaruh pada siswa)
- ️ Mengubah tahun ajaran (tidak direkomendasikan)
- ️ Mengubah tingkat/kelas

> [!TIP]
> **Tips:** Untuk perubahan berat, pertimbangkan untuk membuat kelas baru dan memindahkan siswa secara bertahap.

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728102211867.webp)

---

# Fitur Import Excel - Overview

### Mengapa Import Excel?

**Tanpa Import:**

- ️ Input manual 30 kelas = 2-3 jam
- Risiko human error tinggi
- Proses berulang dan membosankan

**Dengan Import:**

- Input 30 kelas = 5-10 menit
- Validasi otomatis oleh sistem
- Template terstandarisasi

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728102300709.webp)

---

## Troubleshooting Import Excel

### Error Umum & Solusi:

| Error                       | Penyebab            | Solusi                                  |
| --------------------------- | ------------------- | --------------------------------------- |
| **Data duplikat**           | Kelas sudah ada     | Hapus baris atau edit data existing     |
| **Jurusan tidak ditemukan** | Kode jurusan salah  | Cek kode jurusan di menu Daftar Jurusan |
| **Format tahun salah**      | Tidak sesuai format | Gunakan format YYYY/YYYY (2026/2027)    |

---

# Kesalahan Umum yang Harus Dihindari

### DON'T:

- Menghapus jurusan/kelas yang masih aktif
- Input data tanpa validasi
- Menggunakan kode/nama yang tidak konsisten
- Lupa backup sebelum perubahan besar
- Import data tanpa cek template

### DO:

- Selalu backup data penting
- Validasi data sebelum submit
- Gunakan standar penamaan yang konsisten
- Dokumentasikan perubahan penting
- Test import dengan data kecil dulu


![bg right:40%](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728100956437.webp)

---

<!-- _class: lead -->

# Terima Kasih

### "Data yang baik adalah awal dari keputusan yang baik"

<center>

**Tim Pengembangan Sistem Informasi Sekolah**

&copy; 2026 - Semua Hak Dilindungi

</center>
