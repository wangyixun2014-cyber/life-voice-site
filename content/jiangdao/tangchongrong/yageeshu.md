---
title: "唐崇荣牧师：雅各书"
date: 2026-05-28
player: true
weight: 130
description: "唐崇荣牧师《雅各书》系列讲道音频，共45集，另含Q&A 8集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 雅各书
comments: false
---

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
        cover: '/covers/tangchongrong/yageeshu.png'
    };
});

const yageeshuQaAudio = yageeshuQaNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '雅各书 Q&A ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yageeshu/yageeshu-qa-' + fileNum + '.mp3',
        cover: '/covers/tangchongrong/yageeshu.png'
    };
});

createLifeVoicePlayer({
    id: 'aplayer-yageeshu',
    audio: yageeshuMainAudio.concat(yageeshuQaAudio)
});
</script>
