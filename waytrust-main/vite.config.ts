import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiKey =
    env.GEMINI_API_KEY || 'AIzaSyAwQGwCwIPe-Ro3FmKP0a8LADxZ15h-13c'

  return {
    base: '/waytrust-main/', // ✅ CORRECT PLACE + SLASH
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(apiKey),
      'process.env.GEMINI_API_KEY': JSON.stringify(apiKey),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  }
});
