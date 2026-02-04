import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  preview: {
    allowedHosts: ['sudoku-pro.up.railway.app'],
  },
})

