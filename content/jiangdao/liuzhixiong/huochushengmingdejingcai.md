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

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-huochushengmingdejingcai">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-huochushengmingdejingcai"></div>

<script>
let continuous_huochushengmingdejingcai = false;

const ap_huochushengmingdejingcai = new APlayer({
    container: document.getElementById('aplayer-huochushengmingdejingcai'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
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

document.querySelector('[data-target="aplayer-huochushengmingdejingcai"]').addEventListener('click', function() {
    continuous_huochushengmingdejingcai = !continuous_huochushengmingdejingcai;
    this.textContent = continuous_huochushengmingdejingcai ? '连续播放：开' : '连续播放：关';
});

ap_huochushengmingdejingcai.on('ended', function() {
    if (continuous_huochushengmingdejingcai) {
        ap_huochushengmingdejingcai.skipForward();
        ap_huochushengmingdejingcai.play();
    }
});
</script>
