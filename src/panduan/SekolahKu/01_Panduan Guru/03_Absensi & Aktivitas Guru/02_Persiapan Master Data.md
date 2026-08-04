---
layout: doc.njk
title: Persiapan Master Data
description: Persipaan Master data untuk mengelola aktivitas harian guru
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

# Persiapan Master Data

Untuk memastikan akurasi pelaporan aktivitas harian, sistem memerlukan standarisasi data awal sebagai berikut:

1.  **Manajemen Profil Pendidik (Daftar Guru)**
    - Pengelolaan data identitas (NIP/NUPTK), pangkat/golongan, dan status kepegawaian.
    - Pemetaan jabatan (Guru Kelas, Guru Bidang Studi, atau Tugas Tambahan seperti Wali Kelas/Kepala Lab).

2.  **Katalog Aktivitas & Indikator Kinerja (Daftar Kegiatan)**
    - Klasifikasi kegiatan menjadi: Tatap Muka (KBM), Administrasi Akademik, dan Pengembangan Diri.

3.  **Pemetaan Kurikulum & Beban Ajar (Daftar Mata Pelajaran)**
    - Pengaturan mata pelajaran berdasarkan kurikulum yang berlaku (Kurikulum Merdeka/K-13).
