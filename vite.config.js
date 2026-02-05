import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    allowedHosts: ['sudokey.up.railway.app'],
  },
})

