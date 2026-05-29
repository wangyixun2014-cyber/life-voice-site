---
title: "唐崇荣牧师：彼得前书"
date: 2026-05-28
description: "唐崇荣牧师《彼得前书》系列讲道音频，共7集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 彼得前书
comments: false
---

### 🎧 唐崇荣牧师：彼得前书

唐崇荣牧师《彼得前书》系列讲道音频，共7集。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-bideqianshu"></div>

<script>
const bideqianshuAudioNumbers = Array.from({ length: 7 }, function(_, i) {
    return i + 1;
});

const ap_bideqianshu = new APlayer({
    container: document.getElementById('aplayer-bideqianshu'),
    listFolded: false,
    preload: 'none',
    audio: bideqianshuAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '彼得前书 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/bideqianshu/bideqianshu-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        };
    })
});
</script>
