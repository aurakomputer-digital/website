---
title: "Mutasi Antar Gudang (Transfer)"
description: "Panduan singkat pencatatan perpindahan stok antar gudang dan antar instansi"
group: "Transaksi"
category: "Admin"
updated: 2026-07-05
tags:
  - dokumentasiPanduan
  - E-Gudang
  - Inventory
---

# 🔄 Mutasi Antar Gudang (Transfer)

Panduan singkat untuk mencatat transaksi **perpindahan stok** antar gudang dalam sistem E-Gudang. Transaksi ini dilakukan ketika barang perlu dipindahkan, baik **antar gudang dalam satu instansi** maupun **antar instansi yang berbeda**.

## 🎯 Tujuan

- Mencatat perpindahan stok antar gudang/instansi secara resmi
- Mengurangi qty stok di gudang asal
- Menambah qty stok di gudang tujuan dengan nilai yang sama
- Mempertahankan **batch & HPP** asal (FIFO preserved)
- Menciptakan jejak audit (audit trail) di kedua lokasi

## 📊 Dua Jenis Mutasi dalam Satu Form

| Jenis Mutasi         | Ruang Lingkup          | Contoh Kasus                                                       |
| -------------------- | ---------------------- | ------------------------------------------------------------------ |
| **Gudang**           | Dalam satu instansi    | Pindah dari Gudang Jakarta → Gudang Surabaya (sama-sama PT Egudan) |
| **Instansi Berbeda** | Antar instansi berbeda | Pindah dari PT Egudan (Gudang Jakarta) → PT Mitra (Gudang Bandung) |

> [!INFO] Konsep Dasar
>
> - **Type: Gudang** = perpindahan internal dalam satu perusahaan (instansi sama)
> - **Type: Instansi** = perpindahan antar perusahaan / unit bisnis yang berbeda

### ✅ Master Data yang Harus Ada

```
✅ Instansi              → Master Data → Instansi
✅ Gudang                → Master Data → Gudang
✅ Produk                → Master Data → Produk & Variant
✅ Stok Tersedia         → Qty mencukupi di gudang asal
```

> [!WARNING] Stok Harus Mencukupi
> Sistem akan menolak transaksi mutasi jika qty yang diminta melebihi stok available di gudang asal. Pastikan stok mencukupi sebelum membuat transaksi.

## 🚀 Langkah-Langkah Input Mutasi

> [!INFO] Akses Menu
> Transaksi → Mutasi

1. Klik tombol **"Buat Mutasi"**
2. **Pilih Jenis Mutasi** pada dropdown di bagian atas form

| Opsi             | Deskripsi                                            |
| ---------------- | ---------------------------------------------------- |
| `Type: Gudang`   | Perpindahan antar gudang dalam instansi yang sama    |
| `Type: Instansi` | Perpindahan antar instansi (dan gudang) yang berbeda |

> [!TIP] Field Dinamis
> Setelah memilih jenis mutasi, form akan **otomatis menyesuaikan** field-field yang ditampilkan. Perhatikan perbedaan field instansi & gudang yang muncul.

3. Isikan formulir dengan data benar:

### 📝 Field Umum (Selalu Ditampilkan)

| Field          | Wajib | Keterangan                                                                                         | Contoh                      |
| -------------- | :---: | -------------------------------------------------------------------------------------------------- | --------------------------- |
| **Intansi**    |  ✅   | Pilih instansi asal dan tujuan (pilih instansi yang sama jika hanya akan memindahkan antar gudang) | `PT Egudan` → `PT Mitra`    |
| **Tanggal**    |  ✅   | Tanggal perpindahan                                                                                | `15-07-2026`                |
| **Keterangan** |  ❌   | Catatan tambahan                                                                                   | `Distribusi stok ke cabang` |
| Data Produk    |  ✅   | Pilih item yang dimutasi & qty                                                                     | `Beras Premium 5 Kg`        |

> [!TIP] Stok umum / bersama
> Untuk produk yang bersifat umum (dimiliki bersama oleh semua instansi), pilih opsi **"Umum"** pada instansi asal/tujuan.

4. Pilih **item & qty** yang akan dimutasi

| Produk             | Stock(Sekarang) | Qty Mutasi | Sisa |
| ------------------ | :-------------: | :--------: | :--: |
| Beras Premium 5 Kg |       150       |     30     | 120  |
| Minyak Goreng 10L  |       80        |     20     |  60  |

5. Klik tombol **"Buat"**

## 📝 Contoh Kasus

### Kasus 1: Type Gudang (Dalam Satu Instansi)

> PT Egudan Indonesia memindahkan stok dari Gudang Jakarta ke Gudang Surabaya untuk memenuhi permintaan cabang.

```
Jenis Mutasi    : Type: Gudang
Tanggal         : 15-07-2026
Gudang Asal     : Gudang Utama Jakarta
Gudang Tujuan   : Gudang Cabang Surabaya
Keterangan      : Distribusi stok Juli

Items:
├─ Beras Premium 5 Kg    : 30 pcs
└─ Minyak Goreng 10L     : 20 pcs
```

### Kasus 2: Type Instansi (Antar Instansi)

> PT Egudan Indonesia mengirim barang ke PT Mitra Sejahtera (instansi berbeda) sebagai titipan jual.

```
Jenis Mutasi    : Type: Instansi
Tanggal         : 16-07-2026
Instansi Asal   : PT Egudan Indonesia
Gudang Asal     : Gudang Utama Jakarta
Instansi Tujuan : PT Mitra Sejahtera
Gudang Tujuan   : Gudang Konsinyasi Bandung
Keterangan      : Titipan jual konsinyasi

Items:
├─ Beras Premium 5 Kg    : 50 pcs
└─ Gula Pasir 1 Kg       : 100 pcs
```

## 📊 Dampak Transaksi ke Sistem

Setelah transaksi disimpan, sistem otomatis melakukan:

### 1. Pengurangan Stok di Gudang Asal

- Sebelum: Stok Beras Premium 5 Kg di Gudang Jakarta = 150 pcs
- Setelah: Stok Beras Premium 5 Kg di Gudang Jakarta = 120 pcs (-30)

### 2. Penambahan Stok di Gudang Tujuan

- Sebelum: Stok Beras Premium 5 Kg di Gudang Surabaya = 50 pcs
- Setelah: Stok Beras Premium 5 Kg di Gudang Surabaya = 80 pcs (+30)

### 4. Audit Trail

Transaksi tercatat di **dua sisi**:

- ✅ **Kartu Stok** gudang asal → muncul baris "Transfer Out -30"
- ✅ **Kartu Stok** gudang tujuan → muncul baris "Transfer In +30"
- ✅ **Stock Movement Log** → detail pergerakan dengan referensi mutasi
- ✅ **Laporan Riwayat Transaksi** → tipe `Mutasi`

## 🔄 Perbandingan Dampak per Jenis Mutasi

| Aspek                |         Type: Gudang          |            Type: Instansi            |
| -------------------- | :---------------------------: | :----------------------------------: |
| **Ruang lingkup**    |      Internal 1 instansi      |            Antar instansi            |
| **Field Instansi**   |      Tidak perlu dipilih      |    Wajib dipilih (asal & tujuan)     |
| **Field Gudang**     | Asal & Tujuan (instansi sama) |    Asal & Tujuan (instansi beda)     |
| **Dampak stok**      |     Sama: -asal, +tujuan      |         Sama: -asal, +tujuan         |
| **Dampak HPP**       |         Tidak berubah         |            Tidak berubah             |
| **Kasus penggunaan** |      Distribusi internal      | Titipan jual, konsinyasi, bagi hasil |

## 💡 Tips Penting

### ✅ DO (Lakukan)

- **Pilih jenis mutasi yang tepat** di awal form — field akan menyesuaikan otomatis
- **Cek stok tersedia** di gudang asal sebelum input
- **Isi keterangan dengan jelas** — menjelaskan alasan perpindahan (distribusi, konsinyasi, dll)
- **Input di hari yang sama** dengan tanggal pengiriman fisik barang
- **Pastikan gudang tujuan sudah aktif** dan terdaftar di sistem
- **Untuk Type: Instansi**, pastikan kedua instansi sudah memiliki relasi bisnis yang jelas

### ❌ DON'T (Hindari)

- ❌ Jangan salah pilih **Jenis Mutasi** — akan mempengaruhi field yang ditampilkan
- ❌ Jangan mutasi **melebihi stok available** di gudang asal
- ❌ Jangan pilih **gudang asal = gudang tujuan** — sistem akan menolak
- ❌ Jangan **double input** mutasi untuk pengiriman yang sama
- ❌ Jangan gunakan mutasi untuk **menyesuaikan selisih stok** — gunakan Stock Opname
- ❌ Jangan pilih **instansi tujuan yang salah** untuk Type: Instansi — sulit diperbaiki

## ❓ Troubleshooting

| Masalah                                                 | Solusi                                                                                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **"Stok tidak mencukupi"**                              | Cek stok di gudang asal — pastikan qty available ≥ qty yang akan dimutasi                                                |
| **"Gudang tujuan tidak muncul di dropdown"**            | Pastikan gudang sudah dibuat & status = `Aktif`. Untuk Type: Gudang, pastikan gudang tujuan berada di instansi yang sama |
| **"Instansi tujuan tidak muncul"**                      | Pastikan instansi sudah dibuat & status = `Aktif`                                                                        |
| **"Tidak bisa pilih gudang asal dan tujuan yang sama"** | Sistem memvalidasi — gudang asal dan tujuan harus berbeda                                                                |
| **"Produk tidak bisa dipilih"**                         | Pastikan produk punya stok di gudang asal & masih aktif                                                                  |
| **"Field Instansi tidak muncul"**                       | Pastikan jenis mutasi = `Type: Instansi` — field ini hanya untuk Type Instansi                                           |
| **"Mutasi terlanjur salah input"**                      | Batalkan transaksi mutasi (Cancel), lalu buat ulang dengan data benar                                                    |
| **"HPP di gudang tujuan berbeda dengan asal"**          | Ini tidak seharusnya terjadi — hubungi support jika menemukan kasus ini                                                  |
