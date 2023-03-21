import { defineConfig } from 'vite';

import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';

// import dns from 'dns';
// dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
