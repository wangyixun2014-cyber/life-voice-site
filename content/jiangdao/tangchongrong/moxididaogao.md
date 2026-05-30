---
title: "唐崇荣牧师：摩西的祷告 2025"
date: 2026-05-28
weight: 10
description: "唐崇荣牧师《摩西的祷告 2025》系列讲道音频，共8集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 摩西的祷告
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-moxididaogao"></div>

<script>
const ap_moxididaogao = new APlayer({
    container: document.getElementById('aplayer-moxididaogao'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '摩西的祷告 01',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-01.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 02',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-02.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 03',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-03.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 04',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-04.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 05',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-05.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 06',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-06.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 07',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-07.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        },
        {
            name: '摩西的祷告 08',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/moxididaogao/moxididaogao-08.mp3',
            cover: '/covers/tangchongrong/moxididaogao.png'
        }
    ]
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

setupAudioContinuousToggle(ap_moxididaogao, 'aplayer-moxididaogao');
</script>
