---
title: "唐崇荣牧师：《启示录》基督给七间教会的信息"
date: 2026-05-28
weight: 50
description: "唐崇荣牧师《启示录》基督给七间教会的信息系列讲道音频，共15集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 《启示录》基督给七间教会的信息
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="/js/lifevoice-player.js?v=6"></script>

<div id="aplayer-qishilugeiqigejiaohui"></div>

<script>
const qishilugeiqigejiaohuiAudioNumbers = Array.from({ length: 15 }, function(_, i) {
    return i + 1;
});

createLifeVoicePlayer({
    id: 'aplayer-qishilugeiqigejiaohui',
    audio: qishilugeiqigejiaohuiAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '启示录给七个教会 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/qishilugeiqigejiaohui/qishilugeiqigejiaohui-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/qishilugeiqigejiaohui.png'
        };
    })
});
</script>
