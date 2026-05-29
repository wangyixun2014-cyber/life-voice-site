---
title: "唐崇荣牧师：雅各书"
date: 2026-05-28
weight: 130
description: "唐崇荣牧师《雅各书》系列讲道音频，共45集，另含Q&A 8集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 雅各书
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yageeshu"></div>

<script>
const yageeshuMainNumbers = Array.from({ length: 45 }, function(_, i) {
    return i + 1;
});

const yageeshuQaNumbers = Array.from({ length: 8 }, function(_, i) {
    return i + 1;
});

const yageeshuMainAudio = yageeshuMainNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '雅各书 ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yageeshu/yageeshu-' + fileNum + '.mp3',
        cover: '/covers/tangchongrong/yageeshu.png'
    };
});

const yageeshuQaAudio = yageeshuQaNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '雅各书 Q&A ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yageeshu/yageeshu-qa-' + fileNum + '.mp3',
        cover: '/covers/tangchongrong/yageeshu.png'
    };
});

const ap_yageeshu = new APlayer({
    container: document.getElementById('aplayer-yageeshu'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: yageeshuMainAudio.concat(yageeshuQaAudio)
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

setupAudioContinuousToggle(ap_yageeshu, 'aplayer-yageeshu');
</script>
