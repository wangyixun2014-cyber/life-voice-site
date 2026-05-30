---
title: "刘志雄长老：如何教导儿女"
date: 2026-05-30
description: "刘志雄长老《如何教导儿女》讲道音频，共1集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 如何教导儿女
weight: 90
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-ruhejiaodaoernv">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-ruhejiaodaoernv"></div>

<script>
const ap_ruhejiaodaoernv = new APlayer({
    container: document.getElementById('aplayer-ruhejiaodaoernv'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '如何教导儿女',
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/ruhejiaodaoernv/ruhejiaodaoernv-01.mp3',
            cover: 'https://audio.wyxwym.com/covers/liuzhixiong/ruhejiaodaoernv.png'
        }
    ]
});

document.querySelector('[data-target="aplayer-ruhejiaodaoernv"]').addEventListener('click', function() {
    this.textContent = this.textContent.includes('关') ? '连续播放：开' : '连续播放：关';
});
</script>
