(function () {
    window.createLifeVoicePlayer = function createLifeVoicePlayer(config) {
        if (!config || !config.id || !Array.isArray(config.audio)) return null;

        const container = document.getElementById(config.id);
        if (!container) return null;

        if (container.dataset.lifevoicePlayerReady === '1') return null;
        container.dataset.lifevoicePlayerReady = '1';

        const wrap = document.createElement('div');
        wrap.className = 'audio-mode-toggle-wrap';

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'audio-mode-toggle-btn';
        btn.textContent = '连续播放：关';

        const hint = document.createElement('span');
        hint.className = 'audio-mode-toggle-hint';
        hint.textContent = '温馨提醒：音频文件较大，建议在 WiFi 环境下收听，避免流量消耗过多。';

        wrap.appendChild(btn);
        wrap.appendChild(hint);
        container.parentNode.insertBefore(wrap, container);

        let continuousPlay = false;

        const player = new APlayer({
            container: container,
            listFolded: false,
            preload: 'none',

            // 注意：APlayer 的 loop:none 仍然会在列表中继续下一首，
            // 所以下面会用原生 ended 捕获来接管播放逻辑。
            loop: 'none',
            order: 'list',
            audio: config.audio
        });

        function getCurrentIndex() {
            try {
                if (player.list && typeof player.list.index === 'number') {
                    return player.list.index;
                }
            } catch (e) {}
            return 0;
        }

        function getTotal() {
            try {
                if (player.list && Array.isArray(player.list.audios)) {
                    return player.list.audios.length;
                }
            } catch (e) {}
            return config.audio.length;
        }

        function updateButton() {
            btn.textContent = continuousPlay ? '连续播放：开' : '连续播放：关';
            btn.classList.toggle('is-on', continuousPlay);
        }

        btn.addEventListener('click', function () {
            continuousPlay = !continuousPlay;
            updateButton();
        });

        /*
            核心修复：
            不用 player.on('ended')，因为 APlayer 自己也会处理 ended。
            这里用原生 audio 的捕获阶段拦截 ended，
            阻止 APlayer 自动跳下一首，然后由我们自己决定是否下一首。
        */
        player.audio.addEventListener('ended', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const currentIndex = getCurrentIndex();
            const total = getTotal();

            if (continuousPlay) {
                if (currentIndex < total - 1) {
                    player.skipForward();

                    setTimeout(function () {
                        player.play();
                    }, 200);
                } else {
                    player.pause();

                    if (player.audio) {
                        player.audio.currentTime = 0;
                    }
                }
            } else {
                player.pause();

                if (player.audio) {
                    player.audio.currentTime = 0;
                }

                if (player.list && typeof player.list.switch === 'function') {
                    player.list.switch(currentIndex);
                }
            }
        }, true);

        updateButton();

        window.lifeVoicePlayers = window.lifeVoicePlayers || {};
        window.lifeVoicePlayers[config.id] = player;

        return player;
    };
})();
