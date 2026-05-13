import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        sourcemap: true,
        minify: false // readable code in prod
    },
    css: {
        devSourcemap: true
    },
})