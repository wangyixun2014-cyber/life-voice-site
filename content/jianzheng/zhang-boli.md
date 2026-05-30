---
title: "张伯笠牧师：生命见证全集 🎙️"
description: "张伯笠牧师生命见证音频，共2集。"
date: 2026-05-26
comments: false      # 👈 核心：加上这一行，强制关闭这个页面的评论框！
---

### 🎙️ 欢迎点播收听张伯笠牧师的生命见证：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<div id="aplayer-zbl"></div>


<script>
const ap_zbl = new APlayer({
    container: document.getElementById('aplayer-zbl'),
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '生命见证（一）',
            artist: '张伯笠牧师',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz1.mp3',
            cover: '/covers/jianzheng/zhangboli.png'
        },  /* 👈 核心：第一集大括号结束这里，必须要有一个英文逗号！ */
        {
            name: '生命见证（二）',
            artist: '张伯笠牧师',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz2.mp3', /* 👈 这里是第二集的真实音频链接 */
            cover: '/covers/jianzheng/zhangboli.png'
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

setupAudioContinuousToggle(ap_zbl, 'aplayer-zbl');
</script>
