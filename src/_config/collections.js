import path from "path";

/** All blog posts as a collection. */
export const getAllPosts = (collection) => {
  return collection.getFilteredByGlob("./src/posts/**/*.md").reverse();
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

/** All blog posts as a collection. */
export const allPanduanAplikasi = (collection) => {
  return collection.getFilteredByGlob("./src/panduan/**/application.md");
};
export const allDokumentasiPanduan = (collection) => {
  return collection
    .getFilteredByGlob("./src/panduan/**/*.md")
    .filter((item) => !item.inputPath.endsWith("application.md"))
    .sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
};
export const docsTree = (collectionApi) => {
  const allDocs = collectionApi.getFilteredByGlob("src/panduan/**/*.md");
  const tree = {};

  allDocs.forEach((item) => {
    // Ambil path relatif dari folder panduan
    // Contoh: "SekolahKu/01_Panduan Guru/01_Tentang Aplikasi/01_Pengenalan.md"
    const relativePath = path.relative("src/panduan", item.inputPath);
    const parts = relativePath.split(path.sep);

    let currentLevel = tree;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;

      if (isFile) {
        if (!currentLevel._files) currentLevel._files = [];

        // Bersihkan angka prefix nama file jika ada (misal "01_Pengenalan" -> "Pengenalan")
        const cleanTitle =
          item.data.title || part.replace(/^\d+_\s*/, "").replace(/\.md$/, "");

        currentLevel._files.push({
          title: cleanTitle,
          url: item.url,
          inputPath: item.inputPath,
          order: part,
        });

        // Urutkan file berdasarkan nama/prefix angka
        currentLevel._files.sort((a, b) => a.order.localeCompare(b.order));
      } else {
        // Bersihkan nama folder dari prefix angka (misal "01_Panduan Guru" -> "Panduan Guru")
        const folderDisplayName = part.replace(/^\d+_\s*/, "");

        if (!currentLevel[part]) {
          currentLevel[part] = {
            _name: folderDisplayName,
            _files: [],
          };
        }
        currentLevel = currentLevel[part];
      }
    });
  });

  return tree;
};
