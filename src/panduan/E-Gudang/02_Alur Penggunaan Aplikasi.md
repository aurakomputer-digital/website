---
title: "Inisiasi Master Data Awal"
description: "Berisi alur penggunaan aplikasi dari inisiasi awal"
group: "Pengenalan Aplikasi"
category: "Admin"
updated: 2026-07-05
tags:
  - dokumentasiPanduan
  - E-Gudang
  - Inventory
---

# Panduan Inisiasi Data Awal Aplikasi E-Gudang

Dokumen ini menjelaskan langkah-langkah **setup awal (initial setup)** aplikasi E-Gudang sebelum digunakan untuk operasional harian. Proses inisiasi ini **hanya dilakukan satu kali** di awal penggunaan atau ketika ada penambahan entitas bisnis baru.

> [!WARNING] Penting
> Urutan inisiasi data **harus sesuai** karena adanya relasi antar tabel (dependency). Jangan melompat ke langkah berikutnya sebelum langkah sebelumnya selesai.

## Data yang perlu di siapkan

Sebelum memulai inisiasi, siapkan data berikut agar bisa langsung di implementasikan

1. Daftar Gudang
2. Daftar Instansi
3. Daftar Produk

## Inisiasi Master Data

### Setup Gudang

Gudang adalah **lokasi fisik penyimpanan** barang yang berada di bawah sebuah Instansi.

> [!INFO] Lokasi Menu
> Master Data → Gudang

#### Langlah - Langkah

1. Klik **"+ Tambah Gudang"**
2. Isi form:

| Field           | Wajib | Keterangan                         | Contoh                          |
| --------------- | :---: | ---------------------------------- | ------------------------------- |
| **Nama Gudang** |  ✅   | Nama gudang                        | `Gudang Utama Jakarta`          |
| **Deskripsi**   |  ❌   | Deskripsi Gudang                   | `Penyimpanan Khusus bahan kain` |
| **No. HP**      |  ❌   | No. Hp Gudang yang bisa di hubungi | `Budi Santoso`                  |
| **Alamat**      |  ❌   | Alamat gudang                      | `Gudang A, Kawasan Industri`    |

3. Klik **"Simpan"**

> [!TIP] Tips
> Satu instansi bisa memiliki **banyak gudang** (misalnya: Gudang Pusat, Gudang Cabang, Gudang Transit)

### Setup instansi

Instansi adalah **entitas bisnis tertinggi** dalam sistem (misalnya: Perusahaan, Cabang, atau Unit Bisnis).

> [!INFO] Lokasi Menu
> Master Data → Instansi

#### Langlah - Langkah

1. Klik tombol **"+ Tambah Instansi"**
2. Isi form berikut:

| Field             | Wajib | Keterangan                                    | Contoh                        |
| ----------------- | :---: | --------------------------------------------- | ----------------------------- |
| **Nama Instansi** |  ✅   | Nama lengkap perusahaan                       | `PT Egudan Indonesia`         |
| **Alamat**        |  ❌   | Alamat lengkap                                | `Jl. Sudirman No. 1, Jakarta` |
| **Telepon**       |  ❌   | Nomor kontak untuk menghubungi instansi       | `021-5551234`                 |
| **Daftar Gudang** |  ❌   | Gudang mana saja yang berlasi dengan instansi | `Aktif`                       |

3. Klik **"Simpan"**

### Setup Produk

Produk adalah **item barang** yang dikelola, dan Variant adalah **variasi** dari produk tersebut (misalnya: ukuran, warna, kemasan).

> [!INFO] Lokasi Menu
> Master Data → Produk

#### Langlah - Langkah

##### Pembuatan data manual

1. Klik **"+ Tambah Produk"**
2. Isi form:

| Field                  | Wajib | Keterangan                                          | Contoh                                |
| ---------------------- | :---: | --------------------------------------------------- | ------------------------------------- |
| **Nama Produk**        |  ✅   | Nama produk                                         | `Beras Premium`                       |
| **Deskripsi**          |  ❌   | Detail produk                                       | `Beras premium kualitas 1`            |
| **Harga Beli Default** |  ❌   | Acuan harga beli (jika di aktifkan)                 | `Rp 12.000`                           |
| **Harga Jual Default** |  ❌   | Acuan harga jual                                    | `Rp 15.000`                           |
| **Kode Produk**        |  ❌   | Kode pengenal produk                                | `BJU-0012`                            |
| **Punya Vairasi**      |  ✅   | Aktif / Non-Aktif                                   | `Aktif`                               |
| **Nama Varian Produk** |  ✅   | Nama variant produk, biasa berupa warna, ukuran dll | `S, M, L, XL` `Hijau, Coklat, Kuning` |

3. Klik **"Simpan"**

> [!TIP] Tips
>
> Gunakan **SKU yang konsisten** dan mudah diingat

##### Import dari Excel

1. Download **template Excel** dari tombol "Export" pada halaman daftar produk
2. Isi data sesuai kolom template seperti pada keterangan field sebelumnya

> [!TIP] Tips
> Pada saat pengisian excel, tambahkan baris baru dengan nama produk yang sama untuk membuat variasi baru

3. Upload kembali via tombol **"Import Excel"**
