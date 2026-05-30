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
        let handlingEnded = false;

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
            记录用户当前点播的是第几集。
            这样即使 APlayer 内部想自动跳，我们也知道真正结束的是哪一集。
        */
        if (player.list && typeof player.list.switch === 'function') {
            const originalSwitch = player.list.switch.bind(player.list);

            player.list.switch = function (index) {
                if (typeof index === 'number') {
                    currentIndex = index;
                }
                return originalSwitch(index);
            };
        }

        /*
            禁止 APlayer 自己在 ended 后自动 skipForward。
            后续全部由我们自己的逻辑控制。
        */
        if (typeof player.skipForward === 'function') {
            const originalSkipForward = player.skipForward.bind(player);

            player.skipForward = function () {
                if (handlingEnded) return;
                return originalSkipForward();
            };
        }

        /*
            用原生 audio ended 捕获阶段接管结束逻辑。
            关：停在当前集
            开：只前进一集，不会跳到 3、5、7
        */
        player.audio.addEventListener('ended', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            if (handlingEnded) return;
            handlingEnded = true;

            const endedIndex = currentIndex;
            const total = getTotal();

            setTimeout(function () {
                try {
                    if (continuousPlay) {
                        const nextIndex = endedIndex + 1;

                        if (nextIndex < total) {
                            switchTo(nextIndex);
                            resetAudioTime();

                            setTimeout(function () {
                                player.play();
                            }, 200);
                        } else {
                            player.pause();
                            switchTo(endedIndex);
                            resetAudioTime();
                        }
                    } else {
                        player.pause();
                        switchTo(endedIndex);
                        resetAudioTime();
                    }
                } catch (e) {}

                setTimeout(function () {
                    handlingEnded = false;
                }, 800);
            }, 120);
        }, true);

        updateButton();

        window.lifeVoicePlayers = window.lifeVoicePlayers || {};
        window.lifeVoicePlayers[config.id] = player;

        return player;
    };
})();
