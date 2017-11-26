## Vue CMS

- 简易博客内容管理系统
- 增、删、改、查、登入、登出
- 账户管理

## 技术栈

### 前端

使用Vue全家桶

- Vue.js
- Vuex
- Vue-Router
- Vue-Resource

### 后端

选择Node的Express快速搭建后端服务器

- Node.js
- MongoDB+mongose
- Express

## 构建工具

选用Webpack加载ES6，PostCSS选用Sass

- Webpack
- ES
- Sass

## 模式

采用前后端分离模式，服务端仅提供数据API，路由全权交给前端，由Vue-Router实现路由控制

项目结构

    ./vue-blog-cms
        ./dist                                  打包文件
        ./server                                服务器
            ./api                               数据接口
                ./index.js
            ./config                            数据库配置
                ./db.js
            ./mock                              模拟数据
                ./mock.json
            ./models                            数据模型
                ./index.js
            ./index.js                          服务端入口
        ./src                                   前端
            ./assets                            静态文件
                ./css
                ./fonts
                ./img
                ./js
            ./components                        Vue组件
                ./admin                         后台组件
                    ./Account.vue               账号组件
                    ./Article.vue               文章组件
                    ./Aside.vue                 侧边栏
                    ./Editor.vue                编辑组件
                    ./Home.vue                  后台主页容器
                    ./Login.vue                 登陆组件
                    ./Message.vue               头部组件
                    ./OverView.vue              预览组件
                ./common                        公用组件
                    ./Dialog.vue                弹窗组件
                    ./Loading.vue               加载组件
                    ./Particle.vue              点Canvas
                    ./StarCanvas.vue            星空Canvas
                ./website                       前台组件
                    ./Archive.vue               归档组件
                    ./Article.vue               文章组件
                    ./Blog.vue                  前台主页容器
            ./router                            前端路由
                ./index.js
            ./store                             Vuex
                ./actions.js
                ./getters.js
                ./index.js
                ./mutations.js
            ./style                             全局样式
                ./common.scss                   rest
                ./constant.scss                 sass常量
                ./includes.scss                 sass mixin
                ./index.scss                    样式主文件
            ./main.js                           Vue主文件(入口)
            ./register.js                       注册页面入口
        .babelrc                                babel配置
        .gitignore
        ./index.html                            应用主页入口
        ./package.json
        ./README.md
        ./register.html                         注册页面
        ./webpack.config.js                     webpack配置

## 开发说明

由package.json提供所有依赖配置，下载即可二次开发

### 从创酷clone项目

- https://github.com/beyondouyuan/vue-blog-cms.git

### 安装开发依赖项

- npm install

### 启动项目

- npm start 启动node服务器
- npm run dev 启动项目

### 打包项目

- npm run build
