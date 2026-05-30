---
title: "唐崇荣牧师：以弗所书"
date: 2026-05-28
player: true
weight: 140
description: "唐崇荣牧师《以弗所书》系列讲道音频，共20讲，另含Q&A。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 以弗所书
comments: false
---

<div id="aplayer-yifusuoshu"></div>

<script>
const yifusuoshuAudioNumbers = Array.from({ length: 20 }, function(_, i) {
    return i + 1;
});

const yifusuoshuMainAudio = yifusuoshuAudioNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '以弗所书 ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yifusuoshu/yifusuoshu-' + fileNum + '.mp3',
        cover: '/covers/tangchongrong/yifusuoshu.png'
    };
});

const yifusuoshuQaAudio = [
    {
        name: '以弗所书 Q&A',
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yifusuoshu/yifusuoshu-qa.mp3',
        cover: '/covers/tangchongrong/yifusuoshu.png'
    }
];

createLifeVoicePlayer({
    id: 'aplayer-yifusuoshu',
    audio: yifusuoshuMainAudio.concat(yifusuoshuQaAudio)
});
</script>
