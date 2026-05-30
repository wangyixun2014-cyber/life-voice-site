---
title: "唐崇荣牧师：圣经中的各种审判 2021"
date: 2026-05-28
weight: 70
description: "唐崇荣牧师《圣经中的各种审判 2021》系列讲道音频，共51集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 圣经中的各种审判
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="/js/lifevoice-player.js?v=6"></script>

<div id="aplayer-shengjingzhongdeshenpan"></div>

<script>
const shengjingzhongdeshenpanAudioNumbers = Array.from({ length: 51 }, function(_, i) {
    return i + 1;
});

createLifeVoicePlayer({
    id: 'aplayer-shengjingzhongdeshenpan',
    audio: shengjingzhongdeshenpanAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '圣经中的审判 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/shengjingzhongdeshenpan/shengjingzhongdeshenpan-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/shengjingzhongdeshenpan.png'
        };
    })
});
</script>
