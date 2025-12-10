import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // 部署到 GitHub Pages 时请将 base 设为仓库名路径，若改仓库名请同步修改
  base: '/ImmerScape-dev/',
  // 将 scenes 目录作为静态资源目录直接拷贝到 dist 根，供 /scenes/* 访问
  publicDir: 'scenes',
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

