import { Marp } from "@marp-team/marp-core";

/** Converts string to a slug form. */
export const slugify = (str) => {
  if (!str) return "";
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

export const groupKeys = (obj) => {
  return obj ? Object.keys(obj) : [];
};
export const filterBy = (arr, key, value) => {
  if (!arr) return [];
  return arr.filter((item) => item[key] === value);
};

export const filterByIncludes = (arr, key, value) => {
  if (!arr) return [];
  return arr.filter((item) => item[key].includes(value));
};

export const sortBy = (arr, key) => {
  if (!arr) return [];
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

export const dateToIso = (date) => {
  if (!date) return new Date().toISOString();
  return new Date(date).toISOString();
};

export const readableDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const limit = (arr, limit) => {
  return arr.slice(0, limit);
};

export const htmlDateString = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {
    zone: "Asia/Jakarta",
  }).toFormat("yy-MM-dd");
};

export const toJson = (value) => {
  return JSON.stringify(value, null, 2);
};

export function getPanduanFolderCurrentPage(inputPath) {
  if (!inputPath) return "";

  // Menghapus './src/panduan/' di awal path
  const relativePath = inputPath.replace(/^\.\/src\/panduan\//, "");

  // Mengambil bagian pertama sebelum tanda '/' berikutnya
  const app = relativePath.split("/")[0];
  return `./src/panduan/${app}/`;
}

export function renderMarp(markdownContent) {
  if (!markdownContent) return "";

  // Instance Marp Core (bisa dikustomisasi opsi-nya)
  const marp = new Marp({
    html: true, // Mengizinkan tag HTML di Markdown
    inlineSVG: true, // Mendukung efek background SVG bawaan Marp
  });

  // Render content Markdown ke HTML + CSS
  const { html, css } = marp.render(markdownContent);

  // Kembalikan gabungan CSS dan HTML Slide
  return `
      <style>${css}</style>
      <div class="marp-slide-wrapper">
        ${html}
      </div>
    `;
}
