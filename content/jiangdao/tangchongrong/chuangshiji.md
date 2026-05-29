---
title: "唐崇荣牧师：创世记"
date: 2026-05-28
description: "唐崇荣牧师《创世记》系列讲道音频，共45集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 创世记
comments: false
---

### 🎧 唐崇荣牧师：创世记

唐崇荣牧师《创世记》系列讲道音频，共45集。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-chuangshiji"></div>

<script>
const chuangshijiAudioNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45
];

const ap_chuangshiji = new APlayer({
    container: document.getElementById('aplayer-chuangshiji'),
    listFolded: false,
    preload: 'none',
    audio: chuangshijiAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '创世记 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/chuangshiji/chuangshiji-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        };
    })
});
</script>
