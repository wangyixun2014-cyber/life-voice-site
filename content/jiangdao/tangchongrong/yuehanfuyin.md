---
title: "唐崇荣牧师：约翰福音"
date: 2026-05-28
description: "唐崇荣牧师《约翰福音》系列讲道音频，共146集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 约翰福音
comments: false
---

### 🎧 唐崇荣牧师：约翰福音

唐崇荣牧师《约翰福音》系列讲道音频，共146集。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yuehanfuyin"></div>

<script>
const yuehanfuyinAudioNumbers = Array.from({ length: 146 }, function(_, i) {
    return i + 1;
});

const ap_yuehanfuyin = new APlayer({
    container: document.getElementById('aplayer-yuehanfuyin'),
    listFolded: false,
    preload: 'none',
    audio: yuehanfuyinAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(3, '0');
        return {
            name: '约翰福音 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yuehanfuyin/yuehanfuyin-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        };
    })
});
</script>
