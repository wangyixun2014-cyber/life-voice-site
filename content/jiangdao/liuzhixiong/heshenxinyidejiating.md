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

setupAudioContinuousToggle(ap_heshenxinyidejiating, 'aplayer-heshenxinyidejiating');
</script>
