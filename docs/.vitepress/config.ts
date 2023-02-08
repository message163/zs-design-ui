const sidebar = {
  "/": [
    { text: "介绍", link: "/" },
    {
      text: "通用",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "Button 按钮", link: "/components/button/" },
      ],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" },
  ],
};
const socialLinks = [
    {
        icon:"github",
        link:"https://github.com/message163/zs-design-ui"
    }
]
const config = {
  base:"/zs-design-ui/temp/",
  title: "🔨  Zs-Design-ui",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
    socialLinks     
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
