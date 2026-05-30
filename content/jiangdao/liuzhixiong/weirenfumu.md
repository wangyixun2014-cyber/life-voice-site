---
title: "刘志雄长老：为人父母"
date: 2026-05-30
description: "刘志雄长老《为人父母》系列讲道音频，共2集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 为人父母
weight: 30
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="/js/lifevoice-player.js"></script>

<div id="aplayer-weirenfumu"></div>

<script>
createLifeVoicePlayer({
    id: 'aplayer-weirenfumu',
    audio: Array.from({ length: 2 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '为人父母 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/weirenfumu/weirenfumu-' + fileNum + '.mp3',
            cover: '/covers/liuzhixiong/weirenfumu.png'
        };
    })
});
</script>