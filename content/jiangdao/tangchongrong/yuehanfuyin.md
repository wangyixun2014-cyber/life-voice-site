---
title: "唐崇荣牧师：约翰福音"
date: 2026-05-28
weight: 150
description: "唐崇荣牧师《约翰福音》系列讲道音频，共146集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 约翰福音
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="/js/lifevoice-player.js?v=6"></script>

<div id="aplayer-yuehanfuyin"></div>

<script>
const yuehanfuyinAudioNumbers = Array.from({ length: 146 }, function(_, i) {
    return i + 1;
});

createLifeVoicePlayer({
    id: 'aplayer-yuehanfuyin',
    audio: yuehanfuyinAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(3, '0');
        return {
            name: '约翰福音 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yuehanfuyin/yuehanfuyin-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/yuehanfuyin.png'
        };
    })
});
</script>
