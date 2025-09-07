# 井字棋游戏

一个使用 React 构建的经典井字棋游戏。

## 功能特性

- 🎮 完整的井字棋游戏逻辑
- 🎯 自动胜利判定
- 🔄 游戏重置功能
- 📱 响应式设计，支持移动设备
- 🎨 现代化的用户界面
- ⚡ 流畅的动画效果

## 技术栈

- React 18
- CSS3 (Grid Layout, Flexbox)
- 现代 JavaScript (ES6+)

## 安装和运行

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm start
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 游戏规则

- 两名玩家轮流在 3x3 的棋盘上下棋
- 玩家 X 先手，玩家 O 后手
- 第一个在横向、纵向或对角线上连成三个相同符号的玩家获胜
- 如果棋盘填满但没有玩家获胜，则为平局

## 项目结构

```
井字棋/
├── public/
│   └── index.html          # HTML 模板
├── src/
│   ├── App.js             # 主游戏组件
│   ├── index.js           # 应用入口
│   └── styles.css         # 样式文件
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 开发

- `pnpm start` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm test` - 运行测试

## 许可证

MIT License



