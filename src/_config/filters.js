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
