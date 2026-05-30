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
            loop: 'none',
            order: 'list',
            audio: config.audio
        });

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

        btn.addEventListener('click', function () {
            continuousPlay = !continuousPlay;
            updateButton();
        });

        player.on('ended', function () {
            const endedIndex = getCurrentIndex();
        
            setTimeout(function () {
                try {
                    if (continuousPlay) {
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
            }, 300);
        });

        updateButton();

        window.lifeVoicePlayers = window.lifeVoicePlayers || {};
        window.lifeVoicePlayers[config.id] = player;

        return player;
    };
})();
