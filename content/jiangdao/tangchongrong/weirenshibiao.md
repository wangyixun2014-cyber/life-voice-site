---
title: "唐崇荣牧师：为人师表"
date: 2026-05-28
player: true
weight: 999
description: "唐崇荣牧师《为人师表》系列讲道音频，共7集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 为人师表
comments: false
---

<div id="aplayer-weirenshibiao"></div>

<script>
const weirenshibiaoAudioNumbers = Array.from({ length: 7 }, function(_, i) {
    return i + 1;
});

createLifeVoicePlayer({
    id: 'aplayer-weirenshibiao',
    audio: weirenshibiaoAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '为人师表 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/weirenshibiao/weirenshibiao-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/weirenshibiao.png'
        };
    })
});
</script>
