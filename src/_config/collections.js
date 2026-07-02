/** All blog posts as a collection. */
export const getAllPosts = (collection) => {
  return collection.getFilteredByGlob("./src/posts/**/*.md").reverse();
};

/** All blog posts as a collection. */
export const getAllPanduanAplikasi = (collection) => {
  return collection.getFilteredByGlob("./src/panduan/**/application.md");
};
export const getAllDokumentasiPanduan = (collection) => {
  return collection
    .getFilteredByGlob("./src/panduan/**/*.md")
    .filter((item) => !item.inputPath.endsWith("application.md"))
    .sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
};

/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = (collection) => {
  return collection.getFilteredByGlob("./src/**/*.{md,njk}");
};

/** All tags from all posts as a collection - excluding custom collections */
export const tagList = (collection) => {
  const tagsSet = new Set();
  collection.getAll().forEach((item) => {
    if (!item.data.tags) return;
    item.data.tags
      .filter((tag) => !["posts", "docs", "all"].includes(tag))
      .forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};
