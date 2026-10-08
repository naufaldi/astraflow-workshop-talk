import { defineConfig } from 'vite'

// Slidev 53 + UnoCSS 66.10 emit one nested `dark-text-*` rule inside a ::before selector
// that lightningcss refuses to minify. Skipping CSS minification avoids the build error.
export default defineConfig({
  build: { cssMinify: false },
})
