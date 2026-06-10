import eleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { DateTime } from "luxon";
import fontAwesomePlugin from "@11ty/font-awesome";
import { getAllPosts, showInSitemap, tagList } from "./src/_config/collections";
import { slugifyString } from "./src/_config/filters/slugify";

export default function (eleventyConfig) {
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

  eleventyConfig.addPlugin(fontAwesomePlugin);
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

  eleventyConfig.addFilter("slugify", slugifyString);

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Asia/Jakarta",
    }).toFormat("yy-MM-dd");
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Asia/Jakarta",
    }).toFormat("dd-MM-yy");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
