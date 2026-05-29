---
title: "于斌牧师：恩典见证全集 🎙️"
description: "于斌牧师生命见证音频。"
date: 2026-05-27
comments: false      # 👈 保持清爽，关闭报错的评论框
---

### 🎙️ 欢迎点播收听于斌牧师的生命见证：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<!-- 给于斌牧师专属的播放器 ID -->
<div id="aplayer-yubin"></div>


<script>
const ap_yubin = new APlayer({
    container: document.getElementById('aplayer-yubin'), /* 👈 对应上面的专属 ID */
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '于斌牧师见证（一）',
            artist: '于斌牧师',
            url: 'https://audio.wyxwym.com/jianzheng/ybmsgzjz.mp3', /* 👈 老王，记得把这里换成你服务器上真实的音频链接 */
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        }
        /* 如果有第二集，就在这里加英文逗号继续写... */
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

setupAudioContinuousToggle(ap_yubin, 'aplayer-yubin');
</script>
