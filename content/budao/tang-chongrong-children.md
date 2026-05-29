---
title: "唐崇荣儿童布道会：耶稣是谁 🎙️"
description: "唐崇荣牧师儿童布道会音频：耶稣是谁。"
date: 2026-05-27
comments: false      # 👈 关闭报错的评论框，保持清爽
---

### 🎙️ 欢迎收听唐崇荣牧师儿童布道会：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<!-- 唐牧师这期布道会专属的播放器 ID -->
<div id="aplayer-tcr-children"></div>


<script>
const ap_tcr_children = new APlayer({
    container: document.getElementById('aplayer-tcr-children'), /* 👈 对应上面的专属 ID */
    listFolded: false,
    preload: 'none',
    loop: 'none',
    order: 'list',
    audio: [
        {
            name: '耶稣是谁',
            artist: '唐崇荣牧师',
            url: 'https://audio.wyxwym.com/budao/tcrms-yssw-etbdh.mp3', /* 👈 老王，记得替换为你真实的音频链接 */
            cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'
        }
        
        /* 如果有第三集、第四集，就在这里加英文逗号继续写... */
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

setupAudioContinuousToggle(ap_tcr_children, 'aplayer-tcr-children');
</script>
