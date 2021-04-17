import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    ViteComponents({
        customComponentResolvers: ViteIconsResolver({
          componentPrefix: '',
      })
    }),
    Icons(),
  ],
})
