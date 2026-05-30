---
title: "唐崇荣牧师：主耶稣受试探 2023"
date: 2026-05-28
weight: 60
description: "唐崇荣牧师《主耶稣受试探 2023》系列讲道音频，共9集。"
categories:
    - 讲道录音
tags:
    - 唐崇荣
    - 主耶稣受试探
comments: false
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-zhuyesushoushitan"></div>

<script>
const ap_zhuyesushoushitan = new APlayer({
    container: document.getElementById('aplayer-zhuyesushoushitan'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '主耶稣受试探 01',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-01.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 02',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-02.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 03',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-03.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 04',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-04.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 05',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-05.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 06',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-06.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 07',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-07.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 08',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-08.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
        },
        {
            name: '主耶稣受试探 09',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/jiangdao/tangchongrong/zhuyesushoushitan/zhuyesushoushitan-09.mp3',
            cover: '/covers/tangchongrong/zhuyesushoushitan.png'
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

setupAudioContinuousToggle(ap_zhuyesushoushitan, 'aplayer-zhuyesushoushitan');
</script>
