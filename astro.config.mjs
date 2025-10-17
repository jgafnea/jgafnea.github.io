// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  site: 'https://jgafnea.github.io',
  integrations: [
    UnoCSS({
      injectReset: true
    }),
    icon()
  ],
});
