---
title: "刘志雄长老：出人头地"
date: 2026-05-30
description: "刘志雄长老《出人头地》系列讲道音频，共3集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 出人头地
weight: 40
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-churentoudi">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-churentoudi"></div>

<script>
let continuous_churentoudi = false;

const ap_churentoudi = new APlayer({
    container: document.getElementById('aplayer-churentoudi'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: Array.from({ length: 3 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '出人头地 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/churentoudi/churentoudi-' + fileNum + '.mp3',
            cover: '/covers/liuzhixiong/churentoudi.png'
        };
    })
});

document.querySelector('[data-target="aplayer-churentoudi"]').addEventListener('click', function() {
    continuous_churentoudi = !continuous_churentoudi;
    this.textContent = continuous_churentoudi ? '连续播放：开' : '连续播放：关';
});

ap_churentoudi.on('ended', function() {
    if (continuous_churentoudi) {
        ap_churentoudi.skipForward();
        ap_churentoudi.play();
    }
});
</script>
