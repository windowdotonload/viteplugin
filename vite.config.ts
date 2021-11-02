/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { defineConfig } from 'vite'
import myplugin from './plugin/viteplugin'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@':''
    }
  },
  plugins: [vue(),myplugin()]
})
