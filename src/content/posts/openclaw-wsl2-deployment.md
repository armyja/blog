---
title: Windows WSL2 部署 OpenClaw 全攻略
published: 2026-02-08T21:40:00+08:00
draft: false
showComments: true
author: Armyja
tags:
  - OpenClaw
  - WSL2
  - AI Assistant
  - Telegram
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

### 2. 解决 WSL 启动错误（踩坑 💥）

如果启动 WSL 时出现错误代码 `0xc03a0014`：

```
Installing, this may take a few minutes...
WslRegisterDistribution failed with error: 0xc03a0014
```

**解决方案：**
1. 打开 Windows **设备管理器**
2. 找到 **Microsoft 虚拟驱动器枚举器**
3. 右键 → 启用设备
4. 重新进入 WSL，输入用户名和密码即表示成功

### 3. 更新系统

⚠️ **重要：** WSL 里的基础软件默认装不了，必须先更新软件源！

```bash
sudo apt update && sudo apt upgrade -y
```

### 4. 安装必要工具

```bash
# 安装 curl、git、nodejs 等
sudo apt install -y curl git wget build-essential
```

### 5. WSL 网络模式配置（踩坑 💥）

如果主机使用了 V2RayN 等代理软件，**NAT 模式下 WSL 无法直接访问主机的代理**。

**解决方案：启用镜像模式 + 自动代理**

编辑 Windows 用户目录下的 `.wslconfig` 文件（如果没有就创建）：

```ini
# C:\Users\你的用户名\.wslconfig
[wsl2]
networkingMode=mirrored
autoProxy=true
```

然后重启 WSL：

```powershell
wsl --shutdown
# 重新打开 WSL 终端
```

**效果：**
- WSL 可以直接使用主机 IP `127.0.0.1` 访问代理
- Telegram 等需要代理的 channel 收发消息正常

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

## 常用工具配置

### 1. VS Code 连接 WSL（推荐）

#### 1.1 安装步骤

1. **在 Windows 上安装 VS Code**（不是 WSL 里！）
   - 下载地址：https://code.visualstudio.com/download
   - 安装时勾选 **"添加到 PATH"**

2. **安装远程开发扩展包**
   - 打开 VS Code
   - 按 `Ctrl+Shift+X` 打开扩展面板
   - 搜索并安装 **"Remote - WSL"**（属于 ms-vscode-remote 扩展包）

3. **WSL 里先更新软件源**
   ```bash
   sudo apt update
   ```

#### 1.2 打开 WSL 项目

**方式一：命令行（推荐）**
```bash
cd /你的项目目录
code .
```

**方式二：VS Code 里连接**
1. `Ctrl+Shift+P` 打开命令面板
2. 输入 `WSL`
3. 选择 "WSL: Reopen Folder in WSL"

#### 1.3 扩展安装注意事项

- **只需装一次**（主题、UI 扩展）
- **需要单独装**（Python、调试器、linting 等）- 在 WSL 里装

⚠️ 如果 WSL 里没装扩展，VS Code 会显示 ⚠️ 图标，点击 "在 WSL 中安装" 即可。

### 安装 GitHub CLI

```bash
sudo apt install gh -y
gh auth login --web
```

## OpenClaw 高级配置

### 1. 配置系统代理（踩坑 💥）

如果使用了 V2RayN 等代理软件，需要让 OpenClaw Gateway 服务使用代理，否则 Telegram 无法收发消息。

**方案一：编辑 systemd 服务文件**

```bash
sudo systemctl edit openclaw-gateway.service
```

添加以下内容：

```ini
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:代理端口"
Environment="HTTPS_PROXY=http://127.0.0.1:代理端口"
Environment="ALL_PROXY=http://127.0.0.1:代理端口"
```

**方案二：直接编辑服务文件**

```bash
sudo nano /etc/systemd/system/openclaw-gateway.service
```

在 `[Service]` 段落下添加：

```
Environment="HTTP_PROXY=http://127.0.0.1:端口"
Environment="HTTPS_PROXY=http://127.0.0.1:端口"
```

**重启服务使配置生效：**

```bash
sudo systemctl daemon-reload
sudo systemctl restart openclaw-gateway.service
```

### 2. 验证代理是否生效

```bash
# 查看服务环境变量
sudo systemctl show openclaw-gateway.service | grep Environment=
```

### 3. Telegram 群聊配置

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

### OpenClaw 官方资源
- [OpenClaw 官方文档](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)

### WSL2 官方文档
- [WSL2 官方文档](https://docs.microsoft.com/windows/wsl)
- [WSL 启动错误 0xc03a0014 解决方案](https://blog.csdn.net/m0_52329284/article/details/147005298)
- [WSL 网络配置（NAT/镜像模式）](https://learn.microsoft.com/zh-cn/windows/wsl/networking)
- [VS Code 连接 WSL 教程](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)
