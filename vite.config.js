import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@app', replacement: path.resolve(__dirname, 'src/app') }],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
