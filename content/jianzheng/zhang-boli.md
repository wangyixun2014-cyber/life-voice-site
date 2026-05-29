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
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        },  /* 👈 核心：第一集大括号结束这里，必须要有一个英文逗号！ */
        {
            name: '生命见证（二）',
            artist: '张伯笠牧师',
            url: 'https://audio.wyxwym.com/jianzheng/zblmsjz2.mp3', /* 👈 这里是第二集的真实音频链接 */
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
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

setupAudioContinuousToggle(ap_zbl, 'aplayer-zbl');
</script>
