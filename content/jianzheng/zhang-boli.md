---
title: "张伯笠牧师 - 生命见证全集 🎙️"
date: 2026-05-26
comments: false      # 👈 核心：加上这一行，强制关闭这个页面的评论框！
---

### 🎙️ 欢迎点播收听张伯笠牧师的生命见证：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<div id="aplayer-zbl"></div>

<style>
/* 1. 原有基础设置：整体卡片、大标题、列表全展开 */
.aplayer { font-size: 16px !important; margin: 20px 0 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important; }
.aplayer .aplayer-info .aplayer-music .aplayer-title { font-size: 19px !important; font-weight: bold !important; line-height: normal !important; }
.aplayer .aplayer-list ol li { font-size: 16px !important; height: 44px !important; line-height: 44px !important; }
.aplayer .aplayer-list, .aplayer .aplayer-list ol { height: auto !important; max-height: none !important; }

/* === 2. 针对控制区图标和时间的放大 === */
.aplayer .aplayer-info .aplayer-music .aplayer-author { font-size: 16px !important; color: #555 !important; line-height: normal !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time { font-size: 15px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon { width: 22px !important; height: 22px !important; margin-left: 12px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon svg { width: 22px !important; height: 22px !important; }

/* === 3. 终极排版微调（彻底修复文字削顶，并保持完美呼吸感） === */

/* 核心修复：取消默认死高度，让容器自适应我们的大字号，彻底告别被裁切 */
.aplayer .aplayer-info {
    height: auto !important; 
    padding-top: 16px !important;    /* 顶部留出舒适的空隙 */
    padding-bottom: 16px !important; /* 底部也留出空隙 */
}

/* 标题和下方进度条拉开距离，自然排布 */
.aplayer .aplayer-info .aplayer-music {
    margin-bottom: 12px !important;
}

/* 播放列表微微下移，避免和控制区粘连 */
.aplayer .aplayer-list {
    margin-top: 8px !important; 
}
</style>

<script>
const ap = new APlayer({
    container: document.getElementById('aplayer-zbl'),
    listFolded: false,
    audio: [
        {
            name: '生命见证（一）',
            artist: '张伯笠牧师',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz1.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        },  /* 👈 核心：第一集大括号结束这里，必须要有一个英文逗号！ */
        {
            name: '生命见证（二）',
            artist: '张伯笠牧师',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz2.mp3', /* 👈 这里是第二集的真实音频链接 */
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        }
    ]
});
</script>
