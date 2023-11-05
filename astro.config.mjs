import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  base: '.', // Set a path prefix.
  site: 'https://anurag-dhamala.github.io/',
  // Use to generate your sitemap and canonical URLs in your final build.
  // trailingSlash: 'always',
  // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own),
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai'
    }
  },
  integrations: [tailwind({}), sitemap(), robotsTxt(), astroImageTools]
});