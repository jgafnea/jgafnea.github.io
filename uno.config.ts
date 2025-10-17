import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  // Keep tailwind-compatible classes
  presets: [presetUno()],
  theme: {
    fontFamily: {
      body: ['Roboto Slab Variable', 'sans-serif'],
    },
  },
});
