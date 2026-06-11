import JSON5 from "json5";
import eleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { DateTime } from "luxon";
import fontAwesomePlugin from "@11ty/font-awesome";
import { getAllPosts, showInSitemap, tagList } from "./src/_config/collections";

import pluginRss from "@11ty/eleventy-plugin-rss";
import sitemap from "@quasibit/eleventy-plugin-sitemap";
import * as filters from "./src/_config/filters";

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
  eleventyConfig.addCollection("allPosts", getAllPosts);
  eleventyConfig.addCollection("showInSitemap", showInSitemap);
  eleventyConfig.addCollection("tagList", tagList);

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
