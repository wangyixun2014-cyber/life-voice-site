---
title: "刘志雄长老：合神心意的婚姻"
date: 2026-05-30
description: "刘志雄长老《合神心意的婚姻》系列讲道音频，共7集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 合神心意的婚姻
weight: 20
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-heshenxinyidehunyin">连续播放：关</button>
    <span class="continuous-toggle-tip">温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。</span>
</div>

<div id="aplayer-heshenxinyidehunyin"></div>

<script>
let continuous_heshenxinyidehunyin = false;

const ap_heshenxinyidehunyin = new APlayer({
    container: document.getElementById('aplayer-heshenxinyidehunyin'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: Array.from({ length: 7 }, function(_, i) {
        const num = i + 1;
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '合神心意的婚姻 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/heshenxinyidehunyin/heshenxinyidehunyin-' + fileNum + '.mp3',
            cover: '/covers/liuzhixiong/heshenxinyidejiating.png'
        };
    })
});

document.querySelector('[data-target="aplayer-heshenxinyidehunyin"]').addEventListener('click', function() {
    continuous_heshenxinyidehunyin = !continuous_heshenxinyidehunyin;
    this.textContent = continuous_heshenxinyidehunyin ? '连续播放：开' : '连续播放：关';
});

ap_heshenxinyidehunyin.on('ended', function() {
    if (continuous_heshenxinyidehunyin) {
        ap_heshenxinyidehunyin.skipForward();
        ap_heshenxinyidehunyin.play();
    }
});
</script>
