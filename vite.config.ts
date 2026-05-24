import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MyPortfolio/',  // Add this line
  plugins: [react()],
})