import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    // 使用数组形式控制匹配优先级，先匹配更具体的 three/addons
    alias: [
      { find: 'three/addons', replacement: resolve(__dirname, 'node_modules/three/examples/jsm') },
      { find: 'three', replacement: resolve(__dirname, 'node_modules/three') },
      { find: '@tweenjs/tween.js', replacement: resolve(__dirname, 'node_modules/@tweenjs/tween.js') },
    ]
  }
});

