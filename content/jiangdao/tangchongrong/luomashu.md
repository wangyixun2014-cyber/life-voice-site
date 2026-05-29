---
title: "唐崇荣牧师：罗马书"
date: 2026-05-28
description: "唐崇荣牧师《罗马书》系列讲道音频，共93集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 罗马书
comments: false
---

### 🎧 唐崇荣牧师：罗马书

唐崇荣牧师《罗马书》系列讲道音频，共93集。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-luomashu"></div>

<script>
const luomashuAudioNumbers = Array.from({ length: 93 }, function(_, i) {
    return i + 1;
});

const ap_luomashu = new APlayer({
    container: document.getElementById('aplayer-luomashu'),
    listFolded: false,
    preload: 'none',
    audio: luomashuAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '罗马书 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/luomashu/luomashu-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        };
    })
});
</script>
