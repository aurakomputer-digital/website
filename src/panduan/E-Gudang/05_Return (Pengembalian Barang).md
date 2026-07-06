---
title: "Pengembalian Barang (Return)"
description: "Panduan singkat pencatatan transaksi pengembalian barang dari pembelian dan penjualan"
group: "Pengenalan Aplikasi"
category: "Transaksi"
updated: 2026-07-05
tags:
  - dokumentasiPanduan
  - E-Gudang
  - Inventory
---

# ↩️ Pengembalian Barang (Return)

Panduan singkat untuk mencatat transaksi **pengembalian barang** dalam sistem E-Gudang. Transaksi ini dilakukan ketika ada barang yang dikembalikan, baik **ke supplier** (karena rusak/tidak sesuai) maupun **dari customer** (karena komplain/batal beli).

## 🎯 Tujuan

- Mencatat pengembalian barang secara resmi dengan referensi ke transaksi asal
- Menyesuaikan qty stok di gudang (bertambah atau berkurang)
- Mengoreksi nilai persediaan & HPP
- Menciptakan jejak audit (audit trail) yang terhubung ke transaksi asal

## 📊 Dua Kategori Pengembalian

| Kategori            | Arah Barang            | Dampak Stok  | Referensi               |
| ------------------- | ---------------------- | :----------: | ----------------------- |
| **Return Purchase** | Gudang kita → Supplier | ❌ Berkurang | Purchase (Barang Masuk) |
| **Return Sale**     | Customer → Gudang kita | ✅ Bertambah | Sale (Barang Keluar)    |

> [!INFO] Konsep Dasar
>
> - **Return Purchase** = kita mengembalikan barang yang **pernah kita beli** dari supplier
> - **Return Sale** = customer mengembalikan barang yang **pernah mereka beli** dari kita

## 📋 Persiapan Data

Sebelum membuat transaksi return, pastikan data berikut sudah tersedia:

### ✅ Master Data yang Harus Ada

```
✅ Instansi              → Master Data → Instansi
✅ Gudang                → Master Data → Gudang
✅ Produk                → Master Data → Produk & Variant
✅ Transaksi Asal        → Harus sudah ada (Purchase atau Sale)
✅ Stok Tersedia         → Khusus Return Purchase, stok harus mencukupi
```

> [!WARNING] Wajib Ada Transaksi Asal
> Transaksi return **harus merujuk** ke transaksi Purchase atau Sale yang sudah ada. Sistem tidak mengizinkan return tanpa referensi transaksi asal.

## 🚀 Langkah-Langkah Input Return

> [!INFO] Akses Menu
> Transaksi → Pengambalian Barang

1. Klik tombol **"Buat Return"**
2. **Pilih Jenis Return** pada dropdown di bagian atas form

| Opsi              | Deskripsi                             |
| ----------------- | ------------------------------------- |
| `Return Purchase` | Mengembalikan barang ke supplier      |
| `Return Sale`     | Menerima kembali barang dari customer |

> [!TIP] Field Dinamis
> Setelah memilih jenis return, form akan **otomatis menyesuaikan** field-field yang ditampilkan. Perhatikan label dan gudang yang berubah sesuai jenis return yang dipilih.

3. Pilih **Transaksi Asal** yang akan diretur

> [!TIP] Pencarian Transaksi Asal
> Gunakan filter tanggal, nomor transaksi, atau nama partner untuk menemukan transaksi asal dengan cepat. Sistem hanya akan menampilkan transaksi sesuai jenis return yang dipilih.

4. Isikan formulir dengan data benar:

### 📝 Field Umum (Selalu Ditampilkan)

| Field            | Wajib | Keterangan                           | Contoh               |
| ---------------- | :---: | ------------------------------------ | -------------------- |
| **Jenis Return** |  ✅   | `Return Purchase` atau `Return Sale` | `Return Purchase`    |
| **Tanggal**      |  ✅   | Tanggal pengembalian                 | `10-07-2026`         |
| **Keterangan**   |  ❌   | Catatan tambahan                     | `5 pcs penyok`       |
| Data Produk      |  ✅   | Pilih item yang diretur & qty        | `Beras Premium 5 Kg` |

### 🔄 Field Dinamis (Berubah Sesuai Jenis Return)

| Field      |    Return Purchase     |       Return Sale        |
| ---------- | :--------------------: | :----------------------: |
| **Gudang** | Gudang Asal (pengirim) | Gudang Tujuan (penerima) |

5. Pilih **item & qty** yang akan diretur (tidak harus semua item dari transaksi asal)

| Produk             | Qty Transaksi Asal | Qty Retur | Sisa |
| ------------------ | :----------------: | :-------: | :--: |
| Beras Premium 5 Kg |         50         |     5     |  45  |
| Minyak Goreng 10L  |         30         |     0     |  30  |

6. Klik tombol **"Buat"**

## 📊 Dampak Transaksi ke Sistem

Setelah transaksi disimpan, sistem otomatis melakukan penyesuaian sesuai jenis return yang dipilih:

### 🔴 Dampak Return Purchase

#### 1. Pengurangan Stok

- Sebelum: Stok Beras Premium 5 Kg = 150 pcs
- Setelah: Stok Beras Premium 5 Kg = 145 pcs (-5)

#### 2. Penyesuaian Nilai Persediaan

Nilai persediaan akan berkurang sesuai HPP batch yang diretur (FIFO).

#### 3. Audit Trail

Transaksi tercatat di:

- ✅ **Kartu Stok** produk → muncul baris "Return Purchase -5"
- ✅ **Stock Movement Log** → dengan referensi ke `PO/2026/07/001`
- ✅ **Laporan Riwayat Transaksi** → tipe `Return Purchase`

### 🟢 Dampak Return Sale

#### 1. Penambahan Stok

- Sebelum: Stok Beras Premium 5 Kg = 100 pcs
- Setelah: Stok Beras Premium 5 Kg = 102 pcs (+2)

#### 2. Penyesuaian Nilai Persediaan

Barang yang kembali akan masuk sebagai batch baru (atau menambah batch lama) dengan HPP sesuai harga jual saat transaksi asal.

#### 3. Audit Trail

Transaksi tercatat di:

- ✅ **Kartu Stok** produk → muncul baris "Return Sale +2"
- ✅ **Stock Movement Log** → dengan referensi ke `SO/2026/07/005`
- ✅ **Laporan Riwayat Transaksi** → tipe `Return Sale`

## 🔄 Perbandingan Dampak per Jenis Return

| Aspek                    |      Return Purchase      |        Return Sale         |
| ------------------------ | :-----------------------: | :------------------------: |
| **Arah barang**          |    Keluar dari gudang     |      Masuk ke gudang       |
| **Pihak lawan**          |         Supplier          |          Customer          |
| **Dampak stok**          |       ❌ Berkurang        |        ✅ Bertambah        |
| **Dampak keuangan**      | Hutang berkurang / refund | Piutang berkurang / refund |
| **Referensi**            |    Transaksi Purchase     |       Transaksi Sale       |
| **Field Kondisi Barang** |       ❌ Tidak ada        |           ✅ Ada           |

## 💡 Tips Penting

### ✅ DO (Lakukan)

- **Pilih jenis return yang tepat** di awal form — field akan menyesuaikan otomatis
- **Cek fisik barang** sebelum return — pastikan kondisi & qty sesuai
- **Pilih alasan return yang jelas** — untuk evaluasi supplier/customer
- **Foto kondisi barang** sebagai bukti (simpan di folder arsip)
- **Input di hari yang sama** dengan tanggal pengembalian fisik
- **Hubungkan ke transaksi asal** yang benar — jangan salah referensi
- **Untuk Return Sale**, isi **kondisi barang** agar bisa ditindaklanjuti

### ❌ DON'T (Hindari)

- ❌ Jangan salah pilih **Jenis Return** — dampaknya berlawanan (stok bertambah vs berkurang)
- ❌ Jangan buat return **tanpa cek fisik barang**
- ❌ Jangan return **melebihi qty transaksi asal**
- ❌ Jangan **double input** return untuk transaksi yang sama
- ❌ Jangan pilih **gudang yang berbeda** dari transaksi asal (kecuali ada alasan khusus)

## ❓ Troubleshooting

| Masalah                                                           | Solusi                                                                             |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **"Transaksi asal tidak muncul"**                                 | Pastikan transaksi asal sudah berstatus `Posted` (bukan `Draft`)                   |
| **"Jenis return tidak bisa diubah setelah pilih transaksi asal"** | Reset form terlebih dahulu, lalu pilih jenis return sebelum memilih transaksi asal |
| **"Qty retur melebihi qty asal"**                                 | Sistem membatasi qty retur ≤ qty transaksi asal — sesuaikan qty                    |
| **"Stok tidak mencukupi untuk Return Purchase"**                  | Cek stok di gudang — pastikan qty available ≥ qty yang akan diretur                |
| **"Produk tidak bisa dipilih"**                                   | Pastikan produk ada di transaksi asal & masih aktif                                |
| **"Field Kondisi Barang tidak muncul"**                           | Pastikan jenis return = `Return Sale` — field ini hanya untuk Return Sale          |
| **"Return terlanjur salah input"**                                | Batalkan transaksi return (Cancel), lalu buat ulang dengan data benar              |
