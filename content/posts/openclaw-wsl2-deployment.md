---
title: Windows WSL2 部署 OpenClaw 全攻略
date: 2026-02-08T21:40:00+08:00
lastmod: 2026-02-08T21:40:00
draft: false
showComments: true
author: Armyja
tags:
  - OpenClaw
  - WSL2
  - AI Assistant
  - Telegram
keywords:
  - OpenClaw
  - WSL2
  - Telegram Bot
  - AI 助手
description: 详细介绍如何在 Windows WSL2 环境下部署和配置 OpenClaw AI 助手，并集成 Telegram 频道。
---

## 引言

在 Windows 环境下想要运行一个强大的 AI 助手，又不想放弃 Linux 的命令行体验？WSL2（Windows Subsystem for Linux 2）是最佳选择。本文将详细介绍如何在 WSL2 中部署 OpenClaw，并配置 Telegram 频道进行交互。

## WSL2 环境准备

### 1. 启用 WSL2 功能

```powershell
# 以管理员身份运行 PowerShell
wsl --install
```

这会自动安装 Ubuntu（默认发行版）和 WSL2。安装完成后需要重启系统。

### 2. 更新系统

```bash
sudo apt update && sudo apt upgrade -y
```

### 3. 安装必要工具

```bash
# 安装 curl、git、nodejs 等
sudo apt install -y curl git wget build-essential
```

## 安装 OpenClaw

### 1. 使用 npm 全局安装

```bash
sudo npm install -g openclaw
```

### 2. 启动引导程序

```bash
openclaw onboard
```

引导程序会引导你完成以下配置：

- **工作区目录**：选择存放配置和文件的目录
- **模型配置**：配置 AI 模型提供商（如 MiniMax、OpenAI 等）
- **Telegram 集成**：配置 Telegram Bot Token

### 3. 配置 Telegram Bot

#### 3.1 创建 Bot

1. 在 Telegram 中搜索 `@BotFather`
2. 发送 `/newbot` 创建新 Bot
3. 按照提示设置 Bot 名称和用户名
4. 获取 Bot Token

#### 3.2 配置 OpenClaw

编辑配置文件：

```bash
nano ~/.openclaw/openclaw.json
```

关键配置项：

```json
{
  "channels": {
    "telegram": {
      "botToken": "你的Bot Token",
      "dmPolicy": "pairing",
      "groupPolicy": "allowlist"
    }
  }
}
```

#### 3.3 配对用户

用户需要在 Telegram 中与 Bot 对话，然后管理员批准配对请求：

```bash
openclaw telegram pair
```

## 配置详解

### 基础配置示例

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "minimax-portal/MiniMax-M2.1"
      },
      "verboseDefault": "on",
      "workspace": "/home/用户名/.openclaw/workspace"
    }
  },
  "commands": {
    "bash": true
  },
  "channels": {
    "telegram": {
      "dmPolicy": "pairing",
      "groupPolicy": "allowlist",
      "streamMode": "partial",
      "groups": {
        "群ID": {
          "requireMention": false,
          "groupPolicy": "open"
        }
      }
    }
  }
}
```

### 命令配置

```json
{
  "commands": {
    "native": "auto",
    "nativeSkills": "auto",
    "bash": true
  }
}
```

开启 `bash` 命令后，可以在对话中直接执行 Shell 命令。

## 常用技能

OpenClaw 自带多个实用技能：

| 技能名称 | 功能 |
|---------|------|
| weather | 查询天气 |
| healthcheck | 系统安全检查 |
| skill-creator | 创建自定义技能 |
| tmux | 管理 tmux 会话 |
| github | GitHub CLI 集成 |

### 安装 GitHub CLI

```bash
sudo apt install gh -y
gh auth login --web
```

## 高级配置

### 群聊自动回复

在群聊中无需 @ 提及即可自动回复：

```json
{
  "channels": {
    "telegram": {
      "groupAllowFrom": ["*"],
      "groups": {
        "-100123456789": {
          "requireMention": false,
          "groupPolicy": "open"
        }
      }
    }
  }
}
```

### 内存搜索

启用长期记忆功能：

```json
{
  "agents": {
    "defaults": {
      "memorySearch": {
        "enabled": true,
        "sources": ["memory", "sessions"]
      }
    }
  }
}
```

## 测试与使用

### 1. 启动 OpenClaw

```bash
openclaw
```

### 2. Telegram 交互

- **私聊**：直接发送消息
- **群聊**：无需 @ 提及（配置后）
- **命令**：使用 `/help` 获取帮助

### 3. 常用命令

```bash
# 查看状态
openclaw status

# 重启服务
openclaw restart

# 查看日志
openclaw logs
```

## 常见问题

### Q1: WSL2 与 Windows 文件互通

```bash
# 在 WSL 中访问 Windows 文件
cd /mnt/c/Users/你的用户名/

# 将 WSL 项目链接到 Windows 桌面
ln -s ~/.openclaw/workspace /mnt/c/Users/你的用户名/Desktop/openclaw
```

### Q2: 代理配置

如果需要代理：

```bash
export HTTP_PROXY="http://代理地址:端口"
export HTTPS_PROXY="http://代理地址:端口"
```

### Q3: Telegram 连接问题

1. 检查 Bot Token 是否正确
2. 确认网络可以访问 Telegram API
3. 检查 `dmPolicy` 和 `groupPolicy` 配置

## 总结

通过 WSL2，我们可以在 Windows 上享受完整的 Linux 开发和运维体验，同时通过 OpenClaw 获得强大的 AI 助手能力。配合 Telegram 频道，可以实现随时随地的智能交互。

## 参考资源

- [OpenClaw 官方文档](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [WSL2 官方文档](https://docs.microsoft.com/windows/wsl)
