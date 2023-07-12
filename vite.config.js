import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `.env.${mode}` }).parsed;

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      'process.env': env,
    },
  };
});
