import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // API가 localhost:5173만 받아줘서 포트 고정
  server: {
    port: 5173,
    strictPort: true,
  },
})
