---
title: "唐崇荣牧师：以弗所书"
date: 2026-05-28
weight: 140
description: "唐崇荣牧师《以弗所书》系列讲道音频，共20讲，另含Q&A。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 以弗所书
comments: false
---

### 🎧 唐崇荣牧师：以弗所书

唐崇荣牧师《以弗所书》系列讲道音频，共20讲，另含 Q&A。  
请点击下方列表收听。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yifusuoshu"></div>

<script>
const yifusuoshuAudioNumbers = Array.from({ length: 20 }, function(_, i) {
    return i + 1;
});

const yifusuoshuMainAudio = yifusuoshuAudioNumbers.map(function(num) {
    const fileNum = String(num).padStart(2, '0');
    return {
        name: '以弗所书 ' + fileNum,
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yifusuoshu/yifusuoshu-' + fileNum + '.mp3',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
    };
});

const yifusuoshuQaAudio = [
    {
        name: '以弗所书 Q&A',
        artist: '唐崇荣牧师',
        url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/yifusuoshu/yifusuoshu-qa.mp3',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
    }
];

const ap_yifusuoshu = new APlayer({
    container: document.getElementById('aplayer-yifusuoshu'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: yifusuoshuMainAudio.concat(yifusuoshuQaAudio)
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

setupAudioContinuousToggle(ap_yifusuoshu, 'aplayer-yifusuoshu');
</script>
