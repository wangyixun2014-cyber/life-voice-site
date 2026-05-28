# 生命之音：内容添加说明

本网站是 Hugo 静态网站，主要通过 `content/` 目录下的 Markdown 文件生成页面。

## 常用目录

- `content/jiangdao/`：讲道录音、解经系列
- `content/jianzheng/`：见证分享
- `content/budao/`：布道会、专题信息
- `content/post/`：首页推荐文章

## 新增音频页面注意事项

1. 每个播放器的 `div id` 必须唯一，例如 `aplayer-wangmingdao`。
2. JavaScript 里的 `container` 要和上面的 id 对应。
3. 建议保留 `preload: 'none'`，避免用户刚打开页面就自动消耗流量。
4. 播放器样式已经统一放在 `assets/scss/custom.scss`，以后新页面不用再复制大段 CSS。

## 新增页面基础模板

```md
---
title: "页面标题 🎙️"
description: "页面简介。"
date: 2026-05-28
comments: false
---

### 🎙️ 欢迎收听：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-demo"></div>

<script>
const ap_demo = new APlayer({
    container: document.getElementById('aplayer-demo'),
    listFolded: false,
    preload: 'none',
    audio: [
        {
            name: '第一集',
            artist: '讲员名称',
            url: 'https://audio.wyxwym.com/xxx.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        }
    ]
});
</script>
```
