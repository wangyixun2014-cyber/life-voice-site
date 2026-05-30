---
title: "唐崇荣牧师：希伯来书"
date: 2026-05-28
player: true
weight: 120
description: "唐崇荣牧师《希伯来书》系列讲道音频，共128集，缺第7集和第104集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 希伯来书
comments: false
---

<div id="aplayer-xibolaishu"></div>

<script>
const xibolaishuAudioNumbers = Array.from({ length: 130 }, function(_, i) {
    return i + 1;
}).filter(function(num) {
    return num !== 7 && num !== 104;
});

createLifeVoicePlayer({
    id: 'aplayer-xibolaishu',
    audio: xibolaishuAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(3, '0');
        return {
            name: '希伯来书 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/xibolaishu/xibolaishu-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/xibolaishu.png'
        };
    })
});
</script>
