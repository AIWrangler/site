import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    tailwind(),
    integrations: [sanity()],
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
});
