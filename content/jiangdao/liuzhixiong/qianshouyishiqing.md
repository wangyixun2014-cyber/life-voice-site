---
title: "刘志雄长老：牵手一世情"
date: 2026-05-30
description: "刘志雄长老《牵手一世情》讲道音频，共1集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 牵手一世情
weight: 80
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-qianshouyishiqing">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-qianshouyishiqing"></div>

<script>
const ap_qianshouyishiqing = new APlayer({
    container: document.getElementById('aplayer-qianshouyishiqing'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '牵手一世情',
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/qianshouyishiqing/qianshouyishiqing-01.mp3',
            cover: 'https://audio.wyxwym.com/covers/liuzhixiong/qianshouyishiqing.png'
        }
    ]
});

document.querySelector('[data-target="aplayer-qianshouyishiqing"]').addEventListener('click', function() {
    this.textContent = this.textContent.includes('关') ? '连续播放：开' : '连续播放：关';
});
</script>
