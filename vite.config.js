import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },  
      { find: '@hooks', replacement: '/src/hooks' }, 
      { find: '@pages', replacement: '/src/pages' },  
      { find: '@styles', replacement: '/src/styles' },
      { find: '@utils', replacement: '/src/utils' }, 
      { find: '@routes', replacement: '/src/routes' },
    ],
  },
})
