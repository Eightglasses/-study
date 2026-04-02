import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "初级社工笔记",
  description: "初级社会工作者考试备考指南与笔记",
  // 忽略部分不需要渲染的文件或目录，避免报错
  srcExclude: ['package.json', 'node_modules/**', '.vitepress/**'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '综合能力', link: '/初级_社会工作综合能力' }
    ],
    sidebar: [
      {
        text: '初级备考笔记',
        items: [
          { text: '社会工作综合能力', link: '/初级_社会工作综合能力' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
