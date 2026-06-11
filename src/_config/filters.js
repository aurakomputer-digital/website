/** Converts string to a slug form. */
export const slugifyString = (text) => {
  if (!text) return "";

  return text
    .toString()
    .normalize("NFD") // 1. Pisahkan karakter aksen dari huruf dasar (é -> e + ´)
    .replace(/[\u0300-\u036f]/g, "") // 2. Hapus tanda aksen tersebut
    .toLowerCase() // 3. Ubah semua huruf menjadi kecil
    .trim() // 4. Hapus spasi di awal dan akhir string
    .replace(/[^a-z0-9]+/g, "-") // 5. Ganti SEMUA karakter non-alfanumerik (spasi, &, !, dll) dengan '-'
    .replace(/^-+|-+$/g, ""); // 6. Hapus '-' jika kebetulan ada di paling awal atau paling akhir
};

export const groupBy = (arr, key) => {
  if (!arr) return {};
  return arr.reduce((acc, item) => {
    const group = item[key] || "other";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
};

export const filterBy = (arr, key, value) => {
  if (!arr) return [];
  return arr.filter((item) => item[key] === value);
};

export const sortBy = (arr, key) => {
  if (!arr) return [];
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};
