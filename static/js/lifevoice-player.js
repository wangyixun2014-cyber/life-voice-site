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
        let endingHandled = false;

        const player = new APlayer({
            container: container,
            listFolded: false,
            preload: 'none',
            loop: 'none',
            order: 'list',
            audio: config.audio
        });

        function getTotal() {
            return config.audio.length;
        }

        function switchTo(index) {
            if (index < 0 || index >= getTotal()) return;

            currentIndex = index;

            try {
                if (player.list && typeof player.list.switch === 'function') {
                    player.list.switch(index);
                }
            } catch (e) {}
        }

        function resetAudioTime() {
            try {
                if (player.audio) {
                    player.audio.currentTime = 0;
                }
            } catch (e) {}
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
            记录用户点击的是第几集。
            这样我们不用依赖 APlayer 自己的 index。
        */
        if (player.list && typeof player.list.switch === 'function') {
            const originalSwitch = player.list.switch.bind(player.list);

            player.list.switch = function (index) {
                if (typeof index === 'number') {
                    currentIndex = index;
                    endingHandled = false;
                }

                return originalSwitch(index);
            };
        }

        /*
            核心修复：
            不用 ended 控制，因为 ended 容易和 APlayer 自带下一首逻辑冲突。
            改成 timeupdate，在音频快结束前接管。
        */
        player.audio.addEventListener('timeupdate', function () {
            try {
                if (!player.audio || !player.audio.duration) return;

                const duration = player.audio.duration;
                const currentTime = player.audio.currentTime;
                const remaining = duration - currentTime;

                if (remaining > 0.8) return;
                if (endingHandled) return;

                endingHandled = true;

                const endedIndex = currentIndex;
                const total = getTotal();

                if (continuousPlay) {
                    const nextIndex = endedIndex + 1;

                    if (nextIndex < total) {
                        player.pause();

                        setTimeout(function () {
                            switchTo(nextIndex);
                            resetAudioTime();

                            setTimeout(function () {
                                endingHandled = false;
                                player.play();
                            }, 200);
                        }, 100);
                    } else {
                        player.pause();
                        switchTo(endedIndex);
                        resetAudioTime();
                        endingHandled = false;
                    }
                } else {
                    player.pause();
                    switchTo(endedIndex);
                    resetAudioTime();
                    endingHandled = false;
                }
            } catch (e) {}
        });

        /*
            防止真正 ended 时 APlayer 又补跳一次。
        */
        player.audio.addEventListener('ended', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            player.pause();
        }, true);

        updateButton();

        window.lifeVoicePlayers = window.lifeVoicePlayers || {};
        window.lifeVoicePlayers[config.id] = player;

        return player;
    };
})();
