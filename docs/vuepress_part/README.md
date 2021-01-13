# 使用VuePress搭建在线文档网站
## 0. 在线文档

  [VuePress官方在线文档](https://vuepress.vuejs.org/zh/)

## 1. 搭建基本环境

```bash
# 将 VuePress 作为一个本地依赖安装
npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个文件: docs/README.md
echo '# Hello VuePress!' > docs/README.md

# 启动文档项目
npx vuepress dev docs

# 构建静态文件
npx vuepress build docs
  |-- docs
    |-- .vuepress
      |-- config.js
    |-- README.md
```

## 2. 配置文档

1. 整体结构
  
```bash
|-- dist
|-- dics
  |-- .vuepress
    |-- public
      |-- images
    |-- config.js
  |-- chapter1
    |-- 01_初识TS.md
    |-- 02_安装TS.md
    |-- 03_HelloWorld.md
  |-- chapter2
    |-- 1_type.md
    |-- 2_interface.md
    |-- 3_class.md
    |-- 4_function.md
    |-- 5_generic.md
    |-- 6_other.md
  |-- chapter3
    |-- 01_react.md
    |-- 02_vue.md
  |-- chapter4
    |-- README.md
  |-- README.md
|-- package.json
```

1. docs/.vuepress/config.js  

```javascript
// 注意: base的值为github仓库的名称
module.exports = {
  base: '/vue3-doc/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'Vue3+TS 学习文档', // 标题
  description: '手摸手学前端', // 标题下的描述
  themeConfig: { // 主题配置
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
        }
      ]
    }
  }
}
```

3. docs/README.md

```bash
---
#首页
home: true  
# 图标
heroImage: /images/vue3_logo.png
# 按钮文本
actionText: 开始学习 →
# 按钮点击跳转路径
actionLink: /guide/
---
```

4. package.json  

```json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
  "deploy": "gh-pages -d docs/dist"
}
```

## 3. 发布到gitpage

1. 使用git管理当前项目  

2. 将打包的项目推送到gitpage
```bash
# 下载工具包
npm i -D gh-pages
# 执行打包命令
npm run build
# 执行部署命令
npm run deploy
```