import jsconfigPaths from 'vite-jsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
});
