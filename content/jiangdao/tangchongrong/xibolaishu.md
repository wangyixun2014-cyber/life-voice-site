---
title: "唐崇荣牧师：希伯来书"
date: 2026-05-28
description: "唐崇荣牧师《希伯来书》系列讲道音频，共128集，缺第7集和第104集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 希伯来书
comments: false
---

### 🎧 唐崇荣牧师：希伯来书

唐崇荣牧师《希伯来书》系列讲道音频，共128集。  
本系列缺第7集和第104集，播放列表已自动跳过。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-xibolaishu"></div>

<script>
const xibolaishuAudioNumbers = Array.from({ length: 130 }, function(_, i) {
    return i + 1;
}).filter(function(num) {
    return num !== 7 && num !== 104;
});

const ap_xibolaishu = new APlayer({
    container: document.getElementById('aplayer-xibolaishu'),
    listFolded: false,
    preload: 'none',
    audio: xibolaishuAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(3, '0');
        return {
            name: '希伯来书 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/xibolaishu/xibolaishu-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        };
    })
});
</script>
