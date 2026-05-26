---
title: "小羊诗歌 - 《一粒麦子》专辑完整收听 💿"
description: "主打歌《一粒麦子》、《祢的居所何等可爱》等 11 首经典曲目完整收录，支持在线收听与灵修。"
date: 2026-05-26
categories:
    - 赞美诗歌
tags:
    - "小羊诗歌"
    - "一粒麥子"
image: "https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=800"
comments: false # 彻底消灭最底下的 Disqus 报错框
---

亲爱的弟兄姊妹，这里是小羊诗歌《一粒麦子》整张专辑。电脑端直接在正文收听，手机端会自动开启精美的底部悬浮模式：

<style>
/* 1. 全局文字与间距放大 */
.aplayer {
    font-size: 16px !important; 
    margin: 20px 0 !important;
}
.aplayer .aplayer-info .aplayer-music .aplayer-title {
    font-size: 19px !important; 
    font-weight: bold !important;
}
.aplayer .aplayer-list ol li {
    font-size: 16px !important;  
    height: 42px !important;     
    line-height: 42px !important;
}

/* 2. 手机端专属改造（宽度小于767px） */
@media (max-width: 767px) {
    #aplayer-yilimaizi {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
        margin: 0 !important;
        z-index: 99999 !important; /* 确保盖在最上层 */
        box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.15) !important;
        background: #fff !important;
    }
    
    /* 🌟 核心防穿透锁：死死锁住手机歌单的滑动事件，禁止它传递给背景 */
    .aplayer .aplayer-list {
        max-height: 200px !important;       /* 限制列表高度，防止撑满全屏 */
        overflow-y: auto !important;         /* 允许内部上下滚动 */
        touch-action: pan-y !important;      /* 强制手机只处理内部垂直拖拽 */
        -webkit-overflow-scrolling: touch !important; /* 彻底激活苹果/安卓的顺滑滚动 */
    }
}
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yilimaizi"></div>

<script>
const ap = new APlayer({
    container: document.getElementById('aplayer-yilimaizi'),
    fixed: false,      
    mini: false,       
    listFolded: true,  /* 🌟 核心命令：强制让列表在手机/电脑上默认“折叠收起”，只有点击才会弹出来 */
    audio: [
        {
            name: '一粒麥子',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/一粒麥子.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '一路靠著祂',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/一路靠著祂.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '弟兄和睦同居',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/弟兄和睦同居.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '有一道河',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/有一道河.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '為祢所認識',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/為祢所認識.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '祢的居所何等可爱',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/祢的居所何等可爱.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '聖哉全能主',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/聖哉全能主.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '藏身祢的怀里',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/藏身祢的怀里.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '那一天',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/那一天.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '醫治這地',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/醫治這地.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '陪我走過春夏秋冬',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/陪我走過春夏秋冬.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        }
    ]
});
</script>
