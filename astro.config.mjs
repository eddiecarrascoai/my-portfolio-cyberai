import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://eddiecarrascoai.github.io',
  base: isProd ? '/my-portfolio-cyberai' : '/',
});