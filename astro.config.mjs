import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), [sanity({
    projectId: "hmeoyv0h",
    dataset: "production",
    apiVersion: "2023-02-22",
    useCdn: true
  })], image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), react()]
});