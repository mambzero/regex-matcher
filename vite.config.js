import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.BASE_URL,
    root: path.resolve(__dirname, 'src'),
    publicDir: '../public',
    build: {
      outDir: '../dist'
    },
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      }
    },
    server: {
      port: 3000,
      hot: true
    }
  }
});