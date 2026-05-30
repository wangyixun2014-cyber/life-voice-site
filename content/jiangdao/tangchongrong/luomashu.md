---
title: "唐崇荣牧师：罗马书"
date: 2026-05-28
player: true
weight: 110
description: "唐崇荣牧师《罗马书》系列讲道音频，共93集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 罗马书
comments: false
---

<div id="aplayer-luomashu"></div>

<script>
const luomashuAudioNumbers = Array.from({ length: 93 }, function(_, i) {
    return i + 1;
});

createLifeVoicePlayer({
    id: 'aplayer-luomashu',
    audio: luomashuAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '罗马书 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/luomashu/luomashu-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/luomashu.png'
        };
    })
});
</script>
