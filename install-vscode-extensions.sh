#!/bin/bash

echo "正在安装 VS Code 插件..."

# React 代码片段插件
code --install-extension dsznajder.es7-react-js-snippets

# 自动重命名标签插件
code --install-extension formulahendry.auto-rename-tag

# 括号配对颜色插件
code --install-extension CoenraadS.bracket-pair-colorizer-2

# Prettier 格式化插件
code --install-extension esbenp.prettier-vscode

# JavaScript ES6 代码片段
code --install-extension xabikos.JavaScriptSnippets

echo "插件安装完成！"
echo "请重启 VS Code 以激活插件。"

