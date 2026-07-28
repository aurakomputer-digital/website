import MarkdownItObsidianCallouts from "markdown-it-obsidian-callouts";
import JSON5 from "json5";
import eleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import fontAwesomePlugin from "@11ty/font-awesome";

import * as filters from "./src/_config/filters.js";
import * as collections from "./src/_config/collections.js";

import pluginRss from "@11ty/eleventy-plugin-rss";
import sitemap from "@quasibit/eleventy-plugin-sitemap";

function cleanSlugify(filePathStem) {
  return filePathStem
    .split("/")
    .map((part) => {
      // 1. Hapus prefix angka & underscore di awal (misal "01_Panduan Guru" -> "Panduan Guru")
      const cleaned = part.replace(/^\d+_\s*/, "");

      // 2. Ubah menjadi slug (huruf kecil, ganti spasi/karakter non-alphanumeric dengan '-')
      return cleaned
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "") // Hapus karakter khusus
        .replace(/\s+/g, "-") // Ganti spasi dengan -
        .replace(/-+/g, "-"); // Hapus strip berulang
    })
    .join("/");
}

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("json5", (contents) => JSON5.parse(contents));

  // --------------------- custom wtach targets
  eleventyConfig.addWatchTarget("./src/assets/**/*.{css,js,svg,png,jpeg}");
  eleventyConfig.addWatchTarget("./src/_includes/**/*.{webc}");

  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("page", "page.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");
  eleventyConfig.addLayoutAlias("tags", "tags.njk");

  //	---------------------  Collections
  for (const [name, filter] of Object.entries(collections)) {
    if (typeof filter === "function") {
      eleventyConfig.addCollection(name, filter);
    }
  }

  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/css/main.css");
  eleventyConfig.addPassthroughCopy("src/assets/js/scripts.js");

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(fontAwesomePlugin);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://aurakomputer.my.id",
    },
    lastModifiedProperty: "modified",
    permalink: "/sitemap.xml",
  });
  eleventyConfig.addPlugin(eleventyVitePlugin, {
    viteOptions: {
      plugins: [tailwindcss()],
      build: {
        rolldownOptions: {
          input: {
            main: "src/assets/css/main.css",
            scripts: "src/assets/js/scripts.js",
          },
        },
      },
    },
  });

  for (const [name, filter] of Object.entries(filters)) {
    if (typeof filter === "function") {
      eleventyConfig.addFilter(name, filter);
    }
  }

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.permalink) {
        return data.permalink;
      }

      if (
        data.page.inputPath &&
        data.page.inputPath.startsWith("./src/panduan/")
      ) {
        const cleanPath = cleanSlugify(data.page.filePathStem);
        return `${cleanPath}/index.html`;
      }

      return data.page.filePathStem + "/index.html";
    },
  });

  eleventyConfig.amendLibrary("md", MarkdownItObsidianCallouts);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
}
