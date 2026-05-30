---
title: "唐崇荣牧师：上帝所赐给我们的产业 2024"
date: 2026-05-28
weight: 20
description: "唐崇荣牧师《上帝所赐给我们的产业 2024》系列讲道音频，共3集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 上帝所赐给我们的产业
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-shangdisuocigeiwomendechanye"></div>

<script>
const ap_shangdisuocigeiwomendechanye = new APlayer({
    container: document.getElementById('aplayer-shangdisuocigeiwomendechanye'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '上帝所赐给我们的产业 01',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/shangdisuocigeiwomendechanye/shangdisuocigeiwomendechanye-01.mp3',
            cover: '/covers/tangchongrong/shangdisuocigeiwomendechanye.png'
        },
        {
            name: '上帝所赐给我们的产业 02',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/shangdisuocigeiwomendechanye/shangdisuocigeiwomendechanye-02.mp3',
            cover: '/covers/tangchongrong/shangdisuocigeiwomendechanye.png'
        },
        {
            name: '上帝所赐给我们的产业 03',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/shangdisuocigeiwomendechanye/shangdisuocigeiwomendechanye-03.mp3',
            cover: '/covers/tangchongrong/shangdisuocigeiwomendechanye.png'
        }
    ]
});

window.aplayerInstances = window.aplayerInstances || {};
window.aplayerInstances['aplayer-shangdisuocigeiwomendechanye'] = ap_shangdisuocigeiwomendechanye;

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
    hint.textContent = '温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。';

    function getCurrentIndex() {
        try {
            if (player.list && typeof player.list.index === 'number') return player.list.index;
        } catch (e) {}
        return 0;
    }

    function updateButton() {
        btn.textContent = continuousPlay ? '连续播放：开' : '连续播放：关';
        btn.classList.toggle('is-on', continuousPlay);
    }

    btn.addEventListener('click', function() {
        continuousPlay = !continuousPlay;
        updateButton();
    });

    player.on('ended', function() {
        const endedIndex = getCurrentIndex();

        setTimeout(function() {
            try {
                if (continuousPlay) {
                    const currentIndex = getCurrentIndex();
                    const total = player.list && player.list.audios ? player.list.audios.length : 0;
                    if (currentIndex === endedIndex && total > 0 && endedIndex < total - 1 && typeof player.skipForward === 'function') {
                        player.skipForward();
                    }
                    player.play();
                } else {
                    player.pause();
                    if (player.list && typeof player.list.switch === 'function') {
                        player.list.switch(endedIndex);
                    }
                    if (player.audio) {
                        player.audio.currentTime = 0;
                    }
                }
            } catch (e) {}
        }, 180);
    });

    wrap.appendChild(btn);
    wrap.appendChild(hint);
    container.parentNode.insertBefore(wrap, container);
    updateButton();
}

setupAudioContinuousToggle(ap_shangdisuocigeiwomendechanye, 'aplayer-shangdisuocigeiwomendechanye');
</script>
