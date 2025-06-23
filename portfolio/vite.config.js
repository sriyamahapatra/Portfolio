import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // optional, default is 'local'
      localsConvention: 'camelCase', // convert class names to camelCase in JS
    },
  },
});

