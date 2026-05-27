---
title: "福音信息与生命见证 🌿"
description: "这里收录了历年主日精选讲道与弟兄姊妹真实的生命见证音频。"
layout: "links"
---

亲爱的弟兄姊妹，欢迎来到资源站。你可以在下方直接浏览并点播收听相应的讲道与见证栏目：

### 🌟 栏目一：真实生命见证分享
<!-- 见证播放器舞台 -->
<div id="aplayer-jianzheng"></div>

<br><br>
<hr style="border: 1px dashed #ddd;">
<br><br>

### 🎙️ 栏目二：主日精选讲道录音
<!-- 讲道播放器舞台 -->
<div id="aplayer-jiangdao"></div>


<!-- ========================================================
     🎨 播放器核心引擎与全站大字号平铺样式（只需引入一次）
     ======================================================== -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<style>
.aplayer {
    font-size: 16px !important; 
    margin: 20px 0 !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
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
.aplayer .aplayer-list, .aplayer .aplayer-list ol {
    height: auto !important;      
    max-height: none !important;  
}
</style>

<script>
// 1. 初始化【见证分享】播放器
const ap1 = new APlayer({
    container: document.getElementById('aplayer-jianzheng'),
    listFolded: false, /* 默认直接列表全开 */
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

// 2. 初始化【主日讲道】播放器
const ap2 = new APlayer({
    container: document.getElementById('aplayer-jiangdao'),
    listFolded: false, /* 默认直接列表全开 */
    audio: [
        {
            name: '唐崇荣牧师 - 耶稣是谁',
            artist: '主日讲道',
            url: 'https://audio.wyxwym.com/jianzheng/ybmsgzjz.mp3',  // 👈 老王，等你把唐牧师的MP3传好后，把这里的链接换成唐牧师的直链即可！
            cover: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=300'
        }
    ]
});
</script>
