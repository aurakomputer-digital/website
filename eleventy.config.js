import tailwindcss from "eleventy-plugin-tailwindcss-4";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { DateTime } from "luxon";
import fontAwesomePlugin from "@11ty/font-awesome";
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addPlugin(tailwindcss, {
    input: "styles/main.css",
    output: "assets/main.css",
  });

  eleventyConfig.addPlugin(fontAwesomePlugin);

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
