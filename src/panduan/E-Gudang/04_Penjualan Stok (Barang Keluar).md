---
title: "Barang Keluar (Penjualan)"
description: "Panduan singkat pencatatan transaksi penjualan barang keluar dari gudang"
group: "Pengenalan Aplikasi"
category: "Admin"
updated: 2026-07-05
tags:
  - dokumentasiPanduan
  - E-Gudang
  - Inventory
---

# 📤 Barang Keluar (Penjualan)

Panduan singkat untuk mencatat transaksi **penjualan barang keluar** dari gudang. Transaksi ini dilakukan **setiap kali** Anda menjual stok ke customer, baik untuk penjualan harian maupun pengiriman rutin.

## 🎯 Tujuan

- Mencatat penjualan barang ke customer secara resmi
- Mengurangi qty stok di gudang asal
- Menghitung **HPP (Harga Pokok Penjualan)** berdasarkan metode FIFO/Average **(jika diaktifkan)**
- Menciptakan jejak audit (audit trail) untuk setiap transaksi

## 📋 Persiapan Data

Sebelum membuat transaksi, pastikan data berikut sudah tersedia:

### ✅ Master Data yang Harus Ada

```
✅ Gudang        → Master Data → Gudang
✅ Instansi      → Master Data → Instansi
✅ Produk        → Master Data → Produk & Variant
✅ Stok Tersedia → Pastikan qty mencukupi di gudang asal
```

> [!WARNING] Cek Ketersediaan Stok
> Sistem akan menolak transaksi jika qty yang diminta melebihi stok available di gudang asal. Pastikan stok mencukupi sebelum membuat transaksi.

## 🚀 Langkah-Langkah Input Barang Keluar

> [!INFO] Akses Menu
> Transaksi → Barang Keluar

1. Klik tombol **"Buat Barang Keluar"**
2. Isikan formulir dengan data benar:

| Field          | Wajib | Keterangan                                     | Contoh                 |
| -------------- | :---: | ---------------------------------------------- | ---------------------- |
| **Tanggal**    |  ✅   | Tanggal penjualan                              | `05-07-2026`           |
| **Instansi**   |  ✅   | Pilih dari Master                              | `PT Egudan Indonesia`  |
| **Customer**   |  ❌   | Pilih dari master partner (bisa tambah manual) | `PT Toko Sejahtera`    |
| **Keterangan** |  ❌   | Catatan tambahan                               | `Penjualan stok Juli`  |
| Data Produk    |  ✅   | Pilih dari master                              | `Beras Premium 5 Kg`   |
| **Gudang**     |  ✅   | Pilih dari Master                              | `Gudang Utama Jakarta` |

> [!HELP] Contoh Inputan
> ![contoh inputan](https://raw.githubusercontent.com/aurakomputer-digital/obsidian-assets/main/20260705235956321.webp)

3. Klik tombol **"Buat"**

## 📊 Dampak Transaksi ke Sistem

Setelah transaksi disimpan, sistem otomatis melakukan:

### 1. Pengurangan Stok produk

- Sebelum: Stok Beras Premium 5 Kg = 150 pcs
- Setelah: Stok Beras Premium 5 Kg = 100 pcs (-50)

### 2. Konsumsi Batch FIFO (jika diaktifkan)

Sistem akan mengambil stok dari **batch paling awal (FIFO)**:

| Batch            | Qty Awal | Qty Terambil | Sisa |
| ---------------- | :------: | :----------: | :--: |
| B2026-001 (lama) |   100    |      50      |  50  |
| B2026-050 (baru) |    50    |      0       |  50  |

> [!INFO] Metode FIFO
> Sistem otomatis mengambil dari batch yang **paling pertama masuk** terlebih dahulu untuk perhitungan HPP yang akurat.

### 3. Audit Trail

Transaksi tercatat di:

- ✅ **Kartu Stok** produk → muncul baris "Sale Out -50"
- ✅ **Stock Movement Log** → detail pergerakan stok
- ✅ **Laporan Riwayat Transaksi** → dengan filter tanggal

### ✅ DO (Lakukan)

- **Cek stok tersedia** sebelum input — pastikan qty mencukupi
- **Pilih gudang asal yang benar** — stok hanya bisa diambil dari gudang yang memiliki stok
- **Isi keterangan** dengan jelas — memudahkan pelacakan di kemudian hari
- **Input di hari yang sama** dengan tanggal penjualan — menjaga akurasi laporan

### ❌ DON'T (Hindari)

- ❌ Jangan input barang keluar **sebelum barang fisik dikirim**
- ❌ Jangan pilih **gudang asal yang salah** — stok akan berkurang di gudang yang tidak seharusnya
- ❌ Jangan **double input** transaksi yang sama — akan menyebabkan stok minus
- ❌ Jangan kosongkan **customer** jika transaksi memang untuk customer tertentu

## ❓ Troubleshooting

| Masalah                                 | Solusi                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------- |
| **"Stok tidak mencukupi"**              | Cek stok di gudang asal — pastikan qty available ≥ qty yang diminta       |
| **"Customer tidak muncul di dropdown"** | Pastikan partner sudah dibuat dengan tipe = `Customer` & status = `Aktif` |
| **"Produk tidak bisa dipilih"**         | Pastikan produk sudah punya variant & ada stok di gudang asal             |
| **"Gudang asal tidak muncul"**          | Pastikan gudang sudah terhubung ke instansi yang dipilih                  |
| **"Stok jadi minus setelah transaksi"** | Batalkan transaksi (Cancel), lalu input ulang dengan qty yang benar       |
