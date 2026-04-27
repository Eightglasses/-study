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
    nav: [{ text: "讲义原件", link: "/" }],
    sidebar: [
      {
        text: "讲义 PDF 原件",
        collapsed: false,
        items: [
          { text: "第 1、2 章讲义", link: "/" },
          {
            text: "第 3 章讲义",
            link: "/comprehensive-ability/handouts/02-第三章-开展社会工作服务应重点掌握的相关政治理论",
          },
          {
            text: "第 4 章讲义",
            link: "/comprehensive-ability/handouts/03-第四章-社会工作服务专业价值观与道德规范",
          },
          {
            text: "第 5 章讲义",
            link: "/comprehensive-ability/handouts/04-第五章-人类行为与社会环境",
          },
          {
            text: "第 6 章讲义（一）",
            link: "/comprehensive-ability/handouts/05-第六章-个案社会工作服务方法（一）",
          },
          {
            text: "第 6 章讲义（二）",
            link: "/comprehensive-ability/handouts/06-第六章-个案社会工作服务方法（二）",
          },
          {
            text: "第 7 章讲义",
            link: "/comprehensive-ability/handouts/07-第七章-小组社会工作服务方法",
          },
          {
            text: "第 8 章讲义（一）",
            link: "/comprehensive-ability/handouts/08-第八章-社区社会工作服务方法（一）",
          },
          {
            text: "第 8 章讲义（二）",
            link: "/comprehensive-ability/handouts/09-第八章-社区社会工作服务方法（二）",
          },
          {
            text: "第 9 章讲义",
            link: "/comprehensive-ability/handouts/10-第九章-社会工作服务的管理",
          },
          {
            text: "第 10、11 章讲义",
            link: "/comprehensive-ability/handouts/11-第十、十一章-志愿服务、社会工作服务研究",
          },
          {
            text: "第 12 章讲义（一）",
            link: "/comprehensive-ability/handouts/12-第十二章-社会工作服务相关法规与政策（一）",
          },
          {
            text: "第 12 章讲义（二）",
            link: "/comprehensive-ability/handouts/13-第十二章-社会工作服务相关法规与政策（二）",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
