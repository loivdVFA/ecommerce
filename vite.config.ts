import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server:{
    port: 3000,
  },
  css: {
     postcss: {
      plugins: [tailwind],
     },
    },
})
