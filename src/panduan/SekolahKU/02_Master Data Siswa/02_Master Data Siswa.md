---
layout: doc.njk
title: Pengelolaan Data Siswa
description: Panduan lengkap manajemen data siswa, input, import
isSlide: true
category: Web
updated: 2026-07-28
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

# Pengelolaan Data Siswa

<center>

![logo height:200px](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260710160338832.webp)

</center>

---

# Kelebihan Master Data Siswa Aplikasi SekolahKU

Aplikasi SekolahKU dirancang dengan arsitektur multi-tahun ajaran. Setiap riwayat akademik dan data pribadi siswa tersimpan dengan aman, rapi, dan terintegrasi secara otomatis pada masing-masing periode tahun ajaran. Tidak ada lagi data yang hilang, tertumpuk, atau tertukar antar periode.

---

# Informasi Penting

### Data yang Diperlukan:

Sebelum input data siswa, pastikan data berikut sudah tersedia:

| Data Master      | Status | Keterangan                 |
| ---------------- | ------ | -------------------------- |
| **Data Kelas**   | Wajib  | Kelas tempat siswa belajar |
| **Data Jurusan** | Wajib  | Untuk penjurusan siswa     |

> [!IMPORTANT]
> **Password Default Siswa** adalah **NIS** (Nomor Induk Siswa) jika di kosongkan

---

# Akses Menu Data Siswa

### Langkah Akses:

```
Module Database Siswa → Daftar Siswa
```

### Tampilan Halaman:

![w:900](/img/sekolahku/04/screenshot_20230319-204227.png)

**Fitur yang Tersedia:**

- **Search** - Cari siswa berdasarkan nama/NIS,No.Hp,NISN dll
- **Filter** - Filter berdasarkan Tahun Ajaran, kelas/jurusan, level, Status Siswa, Duplikasi Data
- **Tambah Siswa** - Input data baru
- **Import Excel** - Upload data massal
- ️ **Edit** - Ubah data siswa

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728103853670.webp)

---

# Langkah-Langkah Tambah Siswa Manual

1. Klik tombol **<span class="text-green-600 font-bold">+ Tambah Siswa</span>** di pojok kanan atas
2. Isi formulir dengan lengkap dan sesuai data dengan benar
3. **Review** kembali semua data yang telah diisi
4. Periksa **kelengkapan** dan **kebenaran** informasi
5. Pastikan **NIS** belum digunakan siswa lain
6. Klik tombol **<span class="text-blue-600 font-bold">Simpan</span>**

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728104310093.webp)

---

# Import Data Siswa Excel

Import excel merupakan cara untuk input data siswa dalam jumlah besar (massal)

- Klik tombol **<span class="text-blue-600">Upload Excel</span>**
- Download **Template Excel**
- Isi **semua kolom** sesuai data dengan benar
- Review data siswa yang diinput
- Klik submit untuk memproses data

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728105632519.webp)

---

# Video Tutorial Import Excel

<video src="https://aurakomputer.gitlab.io/docs/img/sekolahku/04/screen-record-2023-03-19-20-59-51.mp4" style="height:500px" controls />

---

<!-- _class: lead -->

# Terima Kasih

### "Data siswa yang akurat adalah kunci pelayanan pendidikan yang berkualitas"

<center>

**Tim Pengembangan Sistem Informasi Sekolah**

&copy; 2026 - Semua Hak Dilindungi

</center>
