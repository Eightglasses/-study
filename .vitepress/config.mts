import { defineConfig } from "vitepress";

export default defineConfig({
  title: "初级社工笔记",
  description: "初级社会工作者考试备考指南与笔记",
  // 忽略部分不需要渲染的文件或目录，避免报错
  srcExclude: ["package.json", "node_modules/**", ".vitepress/**"],
  themeConfig: {
    // 设置页面大纲展示层级（可选配置，用于右侧目录）
    outline: {
      level: [2, 3],
      label: "本章目录",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "综合能力", link: "/comprehensive-ability/chapter1" },
    ],
    sidebar: [
      {
        text: "社会工作综合能力",
        collapsed: false,
        items: [
          { text: "前言", link: "/comprehensive-ability/index" },
          { text: "第一章：内涵与原则", link: "/comprehensive-ability/chapter1" },
          { text: "第二章：发展的基本原则", link: "/comprehensive-ability/chapter2" },
          { text: "第三章：相关政治理论", link: "/comprehensive-ability/chapter3" },
          { text: "第四章：价值观与道德规范", link: "/comprehensive-ability/chapter4" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
