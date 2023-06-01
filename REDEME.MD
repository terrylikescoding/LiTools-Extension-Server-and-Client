## Project structure
├── package.json
├── node_modules/
├── server/
|   ├── index.js
|   ├── package.json
|   └── database.sqlite
└── client/
    ├── public/
    |   └── index.html
    ├── src/
    |   ├── App.vue
    |   ├── main.js
    |   ├── components/
    |   |   ├── Home.vue
    |   |   ├── Extension.vue
    |   |   └── Upload.vue
    |   ├── router/
    |   |   └── index.js
    |   ├── assets/
    |   |   └── logo.png
    |   └── styles/
    |       └── main.css
    ├── package.json
    ├── babel.config.js
    ├── webpack.config.js
    └── postcss.config.js



## todo
- [ ] 添加一个后台管理菜单，仅管理员可见
- [ ] 后期使用java实现后台系统
- [ ] 实现用户注册，登录功能
- [ ] 管理页面需要包括 消息推送，插件删除，用户管理等功能，左边是具体的菜单，右边是具体的页面，使用`<router-view>`
