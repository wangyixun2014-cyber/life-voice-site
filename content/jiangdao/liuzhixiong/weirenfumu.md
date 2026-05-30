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

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-weirenfumu">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-weirenfumu"></div>

<script>
let continuous_weirenfumu = false;

const ap_weirenfumu = new APlayer({
    container: document.getElementById('aplayer-weirenfumu'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: Array.from({ length: 2 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '为人父母 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/weirenfumu/weirenfumu-' + fileNum + '.mp3',
            cover: '/covers/liuzhixiong/heshenxinyidejiating.png'
        };
    })
});

document.querySelector('[data-target="aplayer-weirenfumu"]').addEventListener('click', function() {
    continuous_weirenfumu = !continuous_weirenfumu;
    this.textContent = continuous_weirenfumu ? '连续播放：开' : '连续播放：关';
});

ap_weirenfumu.on('ended', function() {
    if (continuous_weirenfumu) {
        ap_weirenfumu.skipForward();
        ap_weirenfumu.play();
    }
});
</script>
