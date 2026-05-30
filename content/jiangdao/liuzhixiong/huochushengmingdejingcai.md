---
title: "刘志雄长老：活出生命的精彩系列"
date: 2026-05-30
description: "刘志雄长老《活出生命的精彩系列》讲道音频，共6集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 活出生命的精彩
weight: 50
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="/js/lifevoice-player.js"></script>

<div id="aplayer-huochushengmingdejingcai"></div>

<script>
createLifeVoicePlayer({
    id: 'aplayer-huochushengmingdejingcai',
    audio: Array.from({ length: 6 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '活出生命的精彩 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/huochushengmingdejingcai/huochushengmingdejingcai-' + fileNum + '.mp3',
           cover: '/covers/liuzhixiong/huochushengmingdejingcai.png'
        };
    })
});
</script>