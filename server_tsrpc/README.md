- 安装软件
    - 安装 MongoDB 官网地址：https://www.mongodb.org/downloads, 选择操作系统及位数，进入下载页

- 启动（监视）、关闭所有服务器
    - npm run start:all
    - npm run shutdown:all

- 调试环境
    - npm run dev:gate 启动网关服务器
    - npm run dev:match 启动匹配服务器
    - npm run dev:room 启动房间服务器
    - npm run dev:room2 再启动一个房间服务器测试分布式
    - npm run build 构建发布
- 生产环境
    - npm install pm2@latest -g 安装工具
    - pm2 start ecosystem.config.js --env production 启用production环境变量启动服务器
    - pm2 start ecosystem.config.js --env develop 启用develop环境变量启动服务器
    - pm2 delete all 停止所有服务器


- tsrpc细节教程[参考](https://tsrpc.cn/) 
