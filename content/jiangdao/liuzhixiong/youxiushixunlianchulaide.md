---
title: "刘志雄长老：优秀是训练出来的"
date: 2026-05-30
description: "刘志雄长老《优秀是训练出来的》系列讲道音频，共8集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 优秀是训练出来的
weight: 60
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-youxiushixunlianchulaide">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-youxiushixunlianchulaide"></div>

<script>
let continuous_youxiushixunlianchulaide = false;

const ap_youxiushixunlianchulaide = new APlayer({
    container: document.getElementById('aplayer-youxiushixunlianchulaide'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: Array.from({ length: 8 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '优秀是训练出来的 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/youxiushixunlianchulaide/youxiushixunlianchulaide-' + fileNum + '.mp3',
            cover: '/covers/liuzhixiong/youxiushixunlianchulaide.png'
        };
    })
});

document.querySelector('[data-target="aplayer-youxiushixunlianchulaide"]').addEventListener('click', function() {
    continuous_youxiushixunlianchulaide = !continuous_youxiushixunlianchulaide;
    this.textContent = continuous_youxiushixunlianchulaide ? '连续播放：开' : '连续播放：关';
});

ap_youxiushixunlianchulaide.on('ended', function() {
    if (continuous_youxiushixunlianchulaide) {
        ap_youxiushixunlianchulaide.skipForward();
        ap_youxiushixunlianchulaide.play();
    }
});
</script>
