---
title: "刘志雄长老：约拿书"
date: 2026-05-30
description: "刘志雄长老《约拿书》系列讲道音频，共10集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 约拿书
weight: 70
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-yuenashu">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-yuenashu"></div>

<script>
let continuous_yuenashu = false;

const ap_yuenashu = new APlayer({
    container: document.getElementById('aplayer-yuenashu'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: Array.from({ length: 10 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '约拿书 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/yuenashu/yuenashu-' + fileNum + '.mp3',
            cover: 'https://audio.wyxwym.com/covers/liuzhixiong/yuenashu.png'
        };
    })
});

document.querySelector('[data-target="aplayer-yuenashu"]').addEventListener('click', function() {
    continuous_yuenashu = !continuous_yuenashu;
    this.textContent = continuous_yuenashu ? '连续播放：开' : '连续播放：关';
});

ap_yuenashu.on('ended', function() {
    if (continuous_yuenashu) {
        ap_yuenashu.skipForward();
        ap_yuenashu.play();
    }
});
</script>
