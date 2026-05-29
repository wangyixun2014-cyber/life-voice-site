---
title: "唐崇荣牧师：雅各书"
date: 2026-05-28
description: "唐崇荣牧师《雅各书》系列讲道音频，共45集，另含Q&A 8集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 雅各书
comments: false
---

### 🎧 唐崇荣牧师：雅各书

唐崇荣牧师《雅各书》系列讲道音频，共45集，另含 Q&A 8集。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yageeshu"></div>

<script>
const yageeshuMainNumbers = Array.from({ length: 45 }, function(_, i) {
    return i + 1;
});

const yageeshuQaNumbers = Array.from({ length: 8 }, function(_, i) {
    return i + 1;
});

const yageeshuMainAudio = yageeshuMainNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '雅各书 ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yageeshu/yageeshu-' + fileNum + '.mp3',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
    };
});

const yageeshuQaAudio = yageeshuQaNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '雅各书 Q&A ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yageeshu/yageeshu-qa-' + fileNum + '.mp3',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
    };
});

const ap_yageeshu = new APlayer({
    container: document.getElementById('aplayer-yageeshu'),
    listFolded: false,
    preload: 'none',
    audio: yageeshuMainAudio.concat(yageeshuQaAudio)
});
</script>
