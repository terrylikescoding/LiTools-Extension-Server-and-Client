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
