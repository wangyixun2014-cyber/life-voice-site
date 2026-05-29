---
title: "唐崇荣牧师：圣经中的审判"
date: 2026-05-28
description: "唐崇荣牧师《圣经中的审判》系列讲道音频，共51集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 圣经中的审判
comments: false
---

### 🎧 唐崇荣牧师：圣经中的审判

唐崇荣牧师《圣经中的审判》系列讲道音频，共51集。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-shengjingzhongdeshenpan"></div>

<script>
const shengjingzhongdeshenpanAudioNumbers = Array.from({ length: 51 }, function(_, i) {
    return i + 1;
});

const ap_shengjingzhongdeshenpan = new APlayer({
    container: document.getElementById('aplayer-shengjingzhongdeshenpan'),
    listFolded: false,
    preload: 'none',
    audio: shengjingzhongdeshenpanAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '圣经中的审判 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/shengjingzhongdeshenpan/shengjingzhongdeshenpan-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        };
    })
});
</script>
