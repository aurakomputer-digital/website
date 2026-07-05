---
title: "Inisiasi Stok (Barang Masuk)"
description: "Panduan singkat pencatatan transaksi pembelian barang masuk ke gudang"
group: "Pengenalan Aplikasi"
category: "Admin"
updated: 2026-07-05
tags:
  - dokumentasiPanduan
  - E-Gudang
  - Inventory
---

# 🛒 Barang Masuk (Purchase)

Panduan singkat untuk mencatat transaksi **pembelian barang masuk** ke dalam gudang. Transaksi ini dilakukan **setiap kali** Anda membeli stok dari supplier, baik untuk operasional harian maupun restock rutin.

## 🎯 Tujuan

- Mencatat pembelian barang dari supplier secara resmi
- Menambah qty stok di gudang tujuan
- Menghitung **HPP (Harga Pokok Penjualan)** berdasarkan metode FIFO/Average **(jika di aktifkan)**
- Menciptakan jejak audit (audit trail) untuk setiap transaksi

## 📋 Persiapan Data

Sebelum membuat transaksi, pastikan data berikut sudah tersedia:

### ✅ Master Data yang Harus Ada

```
✅ Instansi      → Master Data → Instansi
✅ Gudang        → Master Data → Gudang
✅ Produk        → Master Data → Produk & Variant
```

## 🚀 Langkah-Langkah Input Barang Masuk

> [!INFO] Akses Menus
> Transaksi → Barang Masuk

1. Klik tombol **"Buat Barang Masuk"**
2. Isikan formulir dengan data benar:

| Field             | Wajib | Keterangan                                                 | Contoh                 |
| ----------------- | :---: | ---------------------------------------------------------- | ---------------------- |
| **Tanggal**       |  ✅   | Tanggal pembelian                                          | `05-07-2026`           |
| **Gudang Tujuan** |  ✅   | Gudang penerima barang                                     | `Gudang Utama Jakarta` |
| **Supplier**      |  ❌   | Pilih dari master partner (bisa tambah manual)             | `PT Supplier Jaya`     |
| **Keterangan**    |  ❌   | Catatan tambahan                                           | `Pembelian stok Juli`  |
| Data Produk       |  ✅   | Pilih dari master                                          | `Beras Premium 5 Kg`   |
| **Instansi**      |  ❌   | Perusahaan master instansi **(kosongkan untuk data umum)** | `PT Egudan Indonesia`  |

> [!TIP] Stok umum / bersama
> Kosongkan kolom **Instansi** untuk produk yang bersama dengan semua instansi

> [!HELP] Contoh Inputan
> ![contoh inputan](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260705233833542.webp)

3. Klik tombol **"Buat"**

## 📊 Dampak Transaksi ke Sistem

Setelah transaksi di-post, sistem otomatis melakukan:

1. Pengupdatean Stok produk

- Sebelum: Stok Beras Premium 5 Kg = 100 pcs
- Setelah: Stok Beras Premium 5 Kg = 150 pcs (+50)

2. Audit Trail

Transaksi tercatat di:

- ✅ **Kartu Stok** produk → muncul baris "Purchase In +50"
- ✅ **Stock Movement Log** → detail pergerakan stok
- ✅ **Laporan Riwayat Transaksi** → dengan filter tanggal
