import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Melon Incubator",
  description: "Tech documentation hub for Frontend, Backend, and AI",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      title: "Melon 技术孵化器",
      description:
        "探索前端、后端与人工智能的创新技术，助力开发者成长的项目孵化中心",
      themeConfig: {
        siteTitle: "{ MELON Inc }",
        nav: [
          { text: "首页", link: "/" },
          {
            text: "技术文档",
            items: [
              { text: "前端开发", link: "/frontend/" },
              { text: "后端开发", link: "/backend/" },
              { text: "AIGC", link: "/aigc/" },
              { text: "Web3", link: "/web3/" },
            ],
          },
          {
            text: "项目孵化",
            items: [
              {
                text: "AI 心理咨询",
                link: "https://ai-psycho-interface.netlify.app/",
              },
              {
                text: "AI 学习路径",
                link: "https://ai-learning-path.netlify.app/",
              },
            ],
          },
        ],

        sidebar: {
          "/frontend/": [
            {
              text: "前端开发",
              items: [
                { text: "概述", link: "/frontend/" },
                {
                  text: "React 开发",
                  link: "/frontend/react/",
                },
                {
                  text: "样式解决方案",
                  items: [
                    { text: "概述", link: "/frontend/style/" },
                    {
                      text: "Tailwind CSS",
                      items: [
                        { text: "快速上手", link: "/frontend/style/tailwind/" },
                        {
                          text: "生态关系",
                          link: "/frontend/style/tailwind/relations",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          "/backend/": [
            {
              text: "后端开发",
              items: [
                { text: "概述", link: "/backend/" },
                {
                  text: "Java 开发",
                  link: "/backend/java/",
                },
              ],
            },
          ],
          "/ai/": [
            {
              text: "AI 技术",
              items: [
                { text: "概述", link: "/ai/" },
                {
                  text: "机器学习",
                  link: "/ai/machine-learning/",
                },
              ],
            },
          ],
          "/aigc/": [
            {
              text: "AIGC",
              items: [{ text: "概述", link: "/aigc/" }],
            },
          ],
          "/web3/": [
            {
              text: "Web3 开发",
              items: [
                { text: "概述", link: "/web3/" },
                {
                  text: "智能合约",
                  items: [
                    {
                      text: "Solidity 基础",
                      link: "/web3/smart-contracts/solidity/",
                    },
                    {
                      text: "合约安全",
                      link: "/web3/smart-contracts/security/",
                    },
                  ],
                },
                {
                  text: "DApp 开发",
                  items: [
                    { text: "ethers.js", link: "/web3/dapp/ethers/" },
                    { text: "Web3.js", link: "/web3/dapp/web3js/" },
                  ],
                },
                {
                  text: "区块链基础",
                  link: "/web3/blockchain/",
                },
              ],
            },
          ],
        },

        footer: {
          message: "基于 MIT 许可发布",
          copyright: "Copyright © 2024-present Melon 技术孵化器",
        },

        // 增加实用配置
        outline: "deep", // 显示深层次的标题导航
        lastUpdated: true, // 显示最后更新时间

        docFooter: {
          prev: "上一页",
          next: "下一页",
        },

        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/melon-incubator" },
    ],
    search: {
      provider: "local",
    },
  },
});
