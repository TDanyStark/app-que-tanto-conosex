import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/apps/abbott/que-tanto-conosex/',
  outDir: './que-tanto-conosex',
});