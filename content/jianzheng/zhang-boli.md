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
.aplayer .aplayer-list ol li { font-size: 16px !important; height: 44px !important; line-height: 44px !important; }
.aplayer .aplayer-list, .aplayer .aplayer-list ol { height: auto !important; max-height: none !important; }

/* 2. 彻底打通信息区的“天花板”和“地板” */
.aplayer .aplayer-info {
    height: auto !important; 
    padding-top: 16px !important;
    padding-bottom: 16px !important;
}

/* === 3. 核心修复：掀翻标题盒子的底层规矩，彻底告别削底！ === */
.aplayer .aplayer-info .aplayer-music {
    height: auto !important;           /* 👈 打破 20px 的死高度 */
    overflow: visible !important;      /* 👈 核心：强制显示完整笔画，不准裁切！ */
    margin-bottom: 14px !important;    /* 👈 与下方进度条保持舒适间距 */
    padding-bottom: 2px !important;    /* 👈 给底部留一点点呼吸空间 */
}

/* 标题和名字的字号与行高 */
.aplayer .aplayer-info .aplayer-music .aplayer-title { 
    font-size: 19px !important; 
    font-weight: bold !important; 
    line-height: 1.2 !important; 
}
.aplayer .aplayer-info .aplayer-music .aplayer-author { 
    font-size: 16px !important; 
    color: #555 !important; 
    line-height: 1.2 !important; 
}

/* 4. 控制区图标和时间放大 */
.aplayer .aplayer-info .aplayer-controller .aplayer-time { font-size: 15px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon { width: 22px !important; height: 22px !important; margin-left: 12px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon svg { width: 22px !important; height: 22px !important; }

/* 5. 播放列表微微下移 */
.aplayer .aplayer-list { margin-top: 8px !important; }
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
