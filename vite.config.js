import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://edrees.github.io/recruitya/
// If you move it to its own domain (e.g. recruitya.nl), change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/recruitya/',
});
