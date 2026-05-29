---
title: "唐崇荣牧师：约翰福音"
date: 2026-05-28
weight: 150
description: "唐崇荣牧师《约翰福音》系列讲道音频，共146集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 约翰福音
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yuehanfuyin"></div>

<script>
const yuehanfuyinAudioNumbers = Array.from({ length: 146 }, function(_, i) {
    return i + 1;
});

const ap_yuehanfuyin = new APlayer({
    container: document.getElementById('aplayer-yuehanfuyin'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: yuehanfuyinAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(3, '0');
        return {
            name: '约翰福音 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yuehanfuyin/yuehanfuyin-' + fileNum + '.mp3',
            cover: '/covers/tangchongrong/yuehanfuyin.png'
        };
    })
});

function setupAudioContinuousToggle(player, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !player || container.dataset.toggleReady === '1') return;
    container.dataset.toggleReady = '1';

    let continuousPlay = false;

    const wrap = document.createElement('div');
    wrap.className = 'audio-mode-toggle-wrap';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'audio-mode-toggle-btn';
    btn.textContent = '连续播放：关';

    const hint = document.createElement('span');
    hint.className = 'audio-mode-toggle-hint';
    hint.textContent = '默认播完本集停止，点击可切换连续播放';

    function updateButton() {
        btn.textContent = continuousPlay ? '连续播放：开' : '连续播放：关';
        btn.classList.toggle('is-on', continuousPlay);
        hint.textContent = continuousPlay ? '当前会自动播放下一集' : '当前播完本集会停止';
    }

    btn.addEventListener('click', function() {
        continuousPlay = !continuousPlay;
        updateButton();
    });

    player.on('ended', function() {
        if (!continuousPlay) return;
        setTimeout(function() {
            try {
                player.skipForward();
                player.play();
            } catch (e) {}
        }, 300);
    });

    wrap.appendChild(btn);
    wrap.appendChild(hint);
    container.parentNode.insertBefore(wrap, container);
    updateButton();
}

setupAudioContinuousToggle(ap_yuehanfuyin, 'aplayer-yuehanfuyin');
</script>
