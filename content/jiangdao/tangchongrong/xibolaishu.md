---
title: "唐崇荣牧师：希伯来书"
date: 2026-05-28
weight: 120
description: "唐崇荣牧师《希伯来书》系列讲道音频，共128集，缺第7集和第104集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 希伯来书
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-xibolaishu"></div>

<script>
const xibolaishuAudioNumbers = Array.from({ length: 130 }, function(_, i) {
    return i + 1;
}).filter(function(num) {
    return num !== 7 && num !== 104;
});

const ap_xibolaishu = new APlayer({
    container: document.getElementById('aplayer-xibolaishu'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: xibolaishuAudioNumbers.map(function(num) {
        const fileNum = String(num).padStart(3, '0');
        return {
            name: '希伯来书 ' + fileNum,
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/xibolaishu/xibolaishu-' + fileNum + '.mp3',
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
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

setupAudioContinuousToggle(ap_xibolaishu, 'aplayer-xibolaishu');
</script>
