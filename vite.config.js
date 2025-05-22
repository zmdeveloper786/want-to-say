import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'want-to-say' with your actual repository name
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  base: '/want-to-say/',
})
