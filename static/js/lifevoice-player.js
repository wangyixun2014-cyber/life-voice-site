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
        let currentIndex = 0;
        let stoppedAtEnd = false;

        const player = new APlayer({
            container: container,
            listFolded: false,
            preload: 'none',
            // 让 APlayer 在“连续播放：开”时使用自己的顺序播放，避免我们手动切歌造成 1→3→5。
            loop: 'none',
            order: 'list',
            audio: config.audio
        });

        function updateButton() {
            btn.textContent = continuousPlay ? '连续播放：开' : '连续播放：关';
            btn.classList.toggle('is-on', continuousPlay);
        }

        function resetCurrentAudio() {
            try {
                player.pause();
                if (player.audio) {
                    player.audio.currentTime = 0;
                }
                if (player.list && typeof player.list.switch === 'function') {
                    player.list.switch(currentIndex);
                }
            } catch (e) {}
        }

        btn.addEventListener('click', function () {
            continuousPlay = !continuousPlay;
            stoppedAtEnd = false;
            updateButton();
        });

        // 记录用户手动点播的曲目序号。
        if (player.list && typeof player.list.switch === 'function') {
            const originalSwitch = player.list.switch.bind(player.list);
            player.list.switch = function (index) {
                if (typeof index === 'number') {
                    currentIndex = index;
                    stoppedAtEnd = false;
                }
                return originalSwitch(index);
            };
        }

        // 用户重新播放时，允许下一次结束时再次停住。
        player.audio.addEventListener('play', function () {
            if (player.audio && player.audio.currentTime < 1) {
                stoppedAtEnd = false;
            }
        });

        /*
            核心逻辑：
            1. 连续播放：开 → 不做任何手动切歌，完全交给 APlayer 自己顺序播放 1→2→3。
            2. 连续播放：关 → 在真正 ended 之前提前停住，阻止 APlayer 自动进入下一集。
            这样不会出现“双重切歌”导致的 1→3→5。
        */
        player.audio.addEventListener('timeupdate', function () {
            try {
                if (continuousPlay) return;
                if (stoppedAtEnd) return;
                if (!player.audio || !isFinite(player.audio.duration) || player.audio.duration <= 0) return;

                const remaining = player.audio.duration - player.audio.currentTime;
                if (remaining > 0.35) return;

                stoppedAtEnd = true;
                resetCurrentAudio();
            } catch (e) {}
        });

        updateButton();

        window.lifeVoicePlayers = window.lifeVoicePlayers || {};
        window.lifeVoicePlayers[config.id] = player;

        return player;
    };
})();
