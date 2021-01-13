## 文档
## 使用VuePress搭建github在线blog
- 创建一个远程仓库
- 修改docs/.vuepress/config.js: ```base: '/${自定义路径}/'```
- 打包文档: ```npm run build```
- 将项目推送到github
  ```bash
  git init
  git add .
  git commit -m "init"
  git push origin master
  ```
- 发布文档: ```npm run deploy```
- 访问在线文档: https://sanm-zh.github.io/vue3-doc/