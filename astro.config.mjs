import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      noExternal: ['maplibre-gl'],
    },
    plugins: [tailwindcss()],
  },
});