---
title: "刘志雄长老：约拿书"
date: 2026-05-30
player: true
description: "刘志雄长老《约拿书》系列讲道音频，共10集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 约拿书
weight: 70
comments: false
---

<div id="aplayer-yuenashu"></div>

<script>
createLifeVoicePlayer({
    id: 'aplayer-yuenashu',
    audio: Array.from({ length: 10 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '约拿书 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/yuenashu/yuenashu-' + fileNum + '.mp3',
           cover: '/covers/liuzhixiong/yuenashu.png'
        };
    })
});
</script>
