---
title: "刘志雄长老：合神心意的家庭"
date: 2026-05-30
description: "刘志雄长老《合神心意的家庭》系列讲道音频，共10集。"
categories:
    - 讲道录音
tags:
    - 刘志雄
    - 合神心意的家庭
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div class="continuous-toggle-wrap">
    <button class="continuous-toggle-btn" data-target="aplayer-heshenxinyidejiating">连续播放：关</button>
    <span class="continuous-toggle-tip">当前播完本集会停止</span>
</div>

<div id="aplayer-heshenxinyidejiating"></div>

<script>
const heshenxinyidejiatingAudioNumbers = Array.from({ length: 10 }, function(_, i) {
    return i + 1;
});

const ap_heshenxinyidejiating = new APlayer({
    container: document.getElementById('aplayer-heshenxinyidejiating'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: heshenxinyidejiatingAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(2, '0');
        return {
            name: '合神心意的家庭 ' + fileNum,
            artist: '刘志雄长老',
            url: 'https://audio.wyxwym.com/jiangdao/liuzhixiong/heshenxinyidejiating/heshenxinyidejiating-' + fileNum + '.mp3',
            cover: '/covers/liuzhixiong/heshenxinyidejiating.png'
        };
    })
});

window.aplayerInstances = window.aplayerInstances || {};
window.aplayerInstances['aplayer-heshenxinyidejiating'] = ap_heshenxinyidejiating;
</script>
