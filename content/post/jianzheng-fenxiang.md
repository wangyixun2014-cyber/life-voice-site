---
title: "真实生命恩典见证分享 🌟"
description: "收录张伯笠牧师、于斌牧师等真实生命改变、信仰历程的感人见证音频。"
date: 2026-05-26
categories:
    - "见证分享" # 👈 核心：写上这个，它就会自动归类到左侧的“见证分享”菜单里！
comments: false
---

亲爱的弟兄姊妹，这里收录了弟兄姊妹与牧者真实的生命见证，聆听他们如何在一生中经历主的恩典与奇妙带领。你可以直接在下方浏览完整曲目并点播收听：

<!-- 🎨 专属大字号 + 彻底瓦解内外双层高度限制样式（电脑手机全部列表全开） -->
<style>
.aplayer {
    font-size: 16px !important; 
    margin: 25px 0 !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}
.aplayer .aplayer-info .aplayer-music .aplayer-title {
    font-size: 19px !important; 
    font-weight: bold !important;
}
.aplayer .aplayer-list ol li {
    font-size: 16px !important;  
    height: 44px !important;     
    line-height: 44px !important;
}
.aplayer .aplayer-list,
.aplayer .aplayer-list ol {
    height: auto !important;      
    max-height: none !important;  
}
</style>

<!-- 1. 引入播放器样式与脚本 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<!-- 2. 播放器舞台 -->
<div id="aplayer-jianzheng"></div>

<!-- 3. 注入刚刚上传的 3 个见证音频 -->
<script>
const ap = new APlayer({
    container: document.getElementById('aplayer-jianzheng'),
    fixed: false,      
    mini: false,       
    listFolded: false, /* 强制让列表默认直接完全展开 */
    audio: [
        {
            name: '张伯笠牧师见证（一）',
            artist: '见证分享',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz1.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        },
        {
            name: '张伯笠牧师见证（二）',
            artist: '见证分享',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz2.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        },
        {
            name: '于斌牧师归主见证',
            artist: '见证分享',
            url: 'https://audio.wyxwym.com/jianzheng/ybmsgzjz.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        }
    ]
});
</script>
