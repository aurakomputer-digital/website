import eleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { DateTime } from "luxon";
import fontAwesomePlugin from "@11ty/font-awesome";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/assets/css/main.css");
  eleventyConfig.addPassthroughCopy("src/assets/js/scripts.js");

  eleventyConfig.addPlugin(fontAwesomePlugin);

  eleventyConfig.addPlugin(eleventyVitePlugin, {
    viteOptions: {
      plugins: [tailwindcss()],
      build: {
        rollupOptions: {
          input: {
            main: "src/assets/css/main.css",
            scripts: "src/assets/js/scripts.js",
          },
        },
      },
    },
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
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
    dir: { input: "src", output: "_site" },
  };
}
