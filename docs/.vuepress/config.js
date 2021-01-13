module.exports = {
  base: '/vue3-doc/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'Vue3+TS 学习文档', // 标题
  description: '手摸手学前端', // 标题下的描述
  themeConfig: { // 主题配置
    logo: '/images/logo.png',
    repo: 'sanm-zh/vue3-doc',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'vuepress', link: '/vuepress_part/' },
      {
        text: '了解更多',
        ariaLabel: 'more',
        items: [
          {
            text: '文档', items: [
              { text: 'vue3官方中文文档', link: 'https://www.vue3js.cn/docs/zh/', target: '_blank' },
              { text: '官方正式文档', link: 'https://cn.vuejs.org/v2/guide/', target: '_blank' }
            ]
          }
          ,
          {
            text: '其他', items: [
              { text: '个人博客', link: 'https://sanm-zh.github.io', target: '_blank' },
              { text: 'github', link: 'https://github.com/Sanm-ZH', target: '_blank' }
            ]
          },
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        '/guide/',
        {
          title: '一.TypeScript快速上手',
          collapsable: false,
          children: [
            {
              title: '初识 TypeScript', // 标题
              children: [ // 下级列表
                'part1/01_初识TS',
                'part1/02_安装TS',
                'part1/03_HelloWorld',
                'part1/04_webpack打包',
              ]
            },
            {
              title: 'TypeScript 常用语法',
              children: [
                'part2/1_type',
                'part2/2_interface',
                'part2/3_class',
                'part2/4_function',
                'part2/5_generic',
                'part2/6_other',
              ]
            },
          ]
        },
        {
          title: '二.Vue3快速上手',
          collapsable: false,
          children: [
            'part3/01_认识Vue3',
            'part3/02_创建vue3项目',
          ]
        },
        {
          title: '三.Composition API',
          collapsable: false,
          children: [
            'part4/01_Composition API_常用部分',
            'part4/02_Composition API_其它部分',
            'part4/03_手写组合API',
            'part4/04_Composition VS Option',
          ]
        },
        {
          title: '四.其它新组合和API',
          collapsable: false,
          children: [
            'part5/01_新组件',
            'part5/02_其他新API',
          ]
        },
        {
          title: '五.Vue3综合案例',
          collapsable: false,
          children: [
            'part6/',
          ]
        },
      ],
      '/vuepress_part/': [
        '/vuepress_part/'
      ]
    },
  },

  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./images/favicon.ico` }]
  ]
}