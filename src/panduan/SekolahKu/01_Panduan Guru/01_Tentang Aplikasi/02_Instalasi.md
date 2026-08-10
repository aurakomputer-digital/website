---
layout: doc.njk
title: Panduan Instalasi SekolahKu
isSlide: true
category: Web
updated: 2026-07-27
---

<!--
marp: true
footer: "&copy;  Aura Komputer Digital | https://s.id/aurakomputer"
style: |
    section {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1.5em;
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

# Coba Demo Gratis

Anda dapat mencoba menjalankan demo aplikasi dengan informasi terbaru di halaman awal beranda aplikasi SekolahKu.

- **Tanpa Biaya:** Jelajahi fitur secara gratis.
- **Update Berkala:** Informasi fitur terbaru selalu tersedia.
- **Tujuan:** Mengetahui kecocokan fitur sebelum instalasi penuh.

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/aurakom/20260727231146811.png)

---

# Bantuan Customer Service

Kami menyediakan layanan pendampingan penuh untuk instalasi.

- **Remote Service:** Kami bantu pasangkan di hosting atau komputer lokal secara remote.
- **Langsung:** Hubungi customer service kami untuk jadwal instalasi.
- **Terjamin:** Memastikan konfigurasi berjalan optimal sejak awal.

![bg right:30% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/aurakom/20260727231247412.png)

---

# Tutorial Instalasi Mandiri (cPanel)

![height:50px fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728090825276.webp)

## Persyaratan Sistem

Sebelum memulai, pastikan hosting mendukung:

- **PHP Version:** Minimal 8.4
- **Database:** MariaDB 10.3+ atau MySQL 8.0+
- **Extensions:** BCMath, Ctype, Fileinfo, Mbstring, OpenSSL, PDO, Tokenizer, XML, Curl.

---

## Langkah A: Persiapan Subdomain dan Folder Aplikasi

Buat Subdomain dan arahkan Document Root ke folder `/public`.

- **Contoh Subdomain:** `sekolahku.smaswastakom.com`
- **Path Folder:** `/sekolahku/public_html/sekolaku.smaswastakom.com/public`

  > **Catatan:** File `index.php` Laravel berada di dalam folder `public`jadi masing masing subdomain harus di arahkan ke folder public bukan ke directory utama.

![bg right:40% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728091145240.webp)

---

## Langkah B: Persiapan Berkas

1. Download paket aplikasi di [Halaman Release](/sekolahku/download).
2. Upload file `.zip` kedalam folder `/sekolahku/public_html/sekolahku.smaswastakom.com/`. bukan pada folder `public/
3. Extract file `.zip` kedalam folder `/sekolahku/public_html/sekolahku.smaswastakom.com/

---

## Langkah C: Konfigurasi Database (1)

<div class="flex justify-center">

<div>

1. Buat Database melalui menu **MySQL Databases**.
2. Input nama database, dan buatkan user baru untuk database tersebut.
3. Tambahkan User ke Database dan pilih **All Privileges**.

![width:300px Add roles](https://content.hostgator.com/img/mysql-manage-user-privileges.png)

</div>

<div>

![width:500px Database Menu](https://content.hostgator.com/img/new-cpanel-mysql-database.png)
![width:500px Input Nama](https://content.hostgator.com/img/new-cpanel-create-new-database.png)

</div>

</div>

---

## Langkah D: Aktivasi Aplikasi

1. Kunjungi alamat subdomain Anda `https://sekolahku.smaswastakom.com`.
2. Ikuti petunjuk instalasi yang muncul di layar.

![bg right:60% fit](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260728092348279.webp)

---

<!-- _class: lead -->

### Kendala Instalasi?

**Silahkan hubungi customer service kami.**
Kami siap membantu melalui remote untuk memastikan aplikasi terpasang dengan benar.
