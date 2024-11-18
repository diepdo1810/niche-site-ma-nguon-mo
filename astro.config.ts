import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: page => {
        const excludedPaths = [
          "/posts/",
          "/tags/",
          "/about/",
          "/archives/",
          "/search/",
        ];
        return !excludedPaths.some(path => page.includes(path));
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "Nội dung" }],
      [
        remarkCollapse,
        {
          test: "Nội dung",
          summary: "Mục lục",
        },
      ],
      remarkGfm,
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  experimental: {
    contentLayer: true,
  },
});
