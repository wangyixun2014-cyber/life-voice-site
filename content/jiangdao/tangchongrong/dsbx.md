---
title: "唐崇荣牧师：登山宝训 (全38集) ⛰️"
date: 2026-05-27
comments: false
---

### 📖 欢迎聆听《登山宝训》系列解经讲道：

<!-- Wi-Fi 流量温馨提醒 (静态文本) -->
<div style="background-color: #f8f9fa; border-left: 4px solid #5c7cfa; padding: 12px 16px; margin: 15px 0; border-radius: 4px; color: #555; font-size: 15px; line-height: 1.6;">
    📡 <strong>温馨提示：</strong> 本系列包含 38 集全长高清录音。为避免消耗过多手机数据，建议您在连接 <strong>Wi-Fi（无线网络）</strong> 的环境下进行聆听。
</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<!-- 登山宝训专属播放器 ID -->
<div id="aplayer-dengshan"></div>

<style>
/* === 精心打磨的完美排版 CSS === */
.aplayer { font-size: 16px !important; margin: 20px 0 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important; }
.aplayer .aplayer-list ol li { font-size: 16px !important; height: 44px !important; line-height: 44px !important; border-bottom: 1px solid #eee; }
.aplayer .aplayer-list, .aplayer .aplayer-list ol { height: auto !important; max-height: none !important; }
.aplayer .aplayer-info { height: auto !important; padding-top: 16px !important; padding-bottom: 16px !important; }
.aplayer .aplayer-info .aplayer-music { height: auto !important; overflow: visible !important; margin-bottom: 14px !important; padding-bottom: 2px !important; }
.aplayer .aplayer-info .aplayer-music .aplayer-title { font-size: 19px !important; font-weight: bold !important; line-height: 1.2 !important; }
.aplayer .aplayer-info .aplayer-music .aplayer-author { font-size: 16px !important; color: #555 !important; line-height: 1.2 !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time { font-size: 15px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon { width: 22px !important; height: 22px !important; margin-left: 12px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon svg { width: 22px !important; height: 22px !important; }
.aplayer .aplayer-list { margin-top: 8px !important; }
</style>

<script>
const base_url = 'https://audio.wyxwym.com/jiangdao/tangchongrong/dengshanbaoxun/';
const default_cover = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300'; 

// === 播放器初始化与 38 集完整列表 ===
const ap_dengshan = new APlayer({
    container: document.getElementById('aplayer-dengshan'),
    listFolded: false,
    preload: 'none',   // 👈 核心省流设置：绝对不后台偷跑流量
    audio: [
        { name: '登山宝训 01', artist: '唐崇荣牧师', url: base_url + '登山宝训01_1.mp3', cover: default_cover },
        { name: '登山宝训 02', artist: '唐崇荣牧师', url: base_url + '登山宝训02_1.mp3', cover: default_cover },
        { name: '登山宝训 03', artist: '唐崇荣牧师', url: base_url + '登山宝训03_1.mp3', cover: default_cover },
        { name: '登山宝训 04', artist: '唐崇荣牧师', url: base_url + '登山宝训04_1.mp3', cover: default_cover },
        { name: '登山宝训 05', artist: '唐崇荣牧师', url: base_url + '登山宝训05_1.mp3', cover: default_cover },
        { name: '登山宝训 06', artist: '唐崇荣牧师', url: base_url + '登山宝训06_1.mp3', cover: default_cover },
        { name: '登山宝训 07', artist: '唐崇荣牧师', url: base_url + '登山宝训07_1.mp3', cover: default_cover },
        { name: '登山宝训 08', artist: '唐崇荣牧师', url: base_url + '登山宝训08_1.mp3', cover: default_cover },
        { name: '登山宝训 09', artist: '唐崇荣牧师', url: base_url + '登山宝训09_1.mp3', cover: default_cover },
        { name: '登山宝训 10', artist: '唐崇荣牧师', url: base_url + '登山宝训10_1.mp3', cover: default_cover },
        { name: '登山宝训 11', artist: '唐崇荣牧师', url: base_url + '登山宝训11_1.mp3', cover: default_cover },
        { name: '登山宝训 12', artist: '唐崇荣牧师', url: base_url + '登山宝训12_1.mp3', cover: default_cover },
        { name: '登山宝训 13', artist: '唐崇荣牧师', url: base_url + '登山宝训13_1.mp3', cover: default_cover },
        { name: '登山宝训 14', artist: '唐崇荣牧师', url: base_url + '登山宝训14_1.mp3', cover: default_cover },
        { name: '登山宝训 15', artist: '唐崇荣牧师', url: base_url + '登山宝训15_1.mp3', cover: default_cover },
        { name: '登山宝训 16', artist: '唐崇荣牧师', url: base_url + '登山宝训16_1.mp3', cover: default_cover },
        { name: '登山宝训 17', artist: '唐崇荣牧师', url: base_url + '登山宝训17_1.mp3', cover: default_cover },
        { name: '登山宝训 18', artist: '唐崇荣牧师', url: base_url + '登山宝训18_1.mp3', cover: default_cover },
        { name: '登山宝训 19', artist: '唐崇荣牧师', url: base_url + '登山宝训19_1.mp3', cover: default_cover },
        { name: '登山宝训 20', artist: '唐崇荣牧师', url: base_url + '登山宝训20_1.mp3', cover: default_cover },
        { name: '登山宝训 21', artist: '唐崇荣牧师', url: base_url + '登山宝训21_1.mp3', cover: default_cover },
        { name: '登山宝训 22', artist: '唐崇荣牧师', url: base_url + '登山宝训22_1.mp3', cover: default_cover },
        { name: '登山宝训 23', artist: '唐崇荣牧师', url: base_url + '登山宝训23_1.mp3', cover: default_cover },
        { name: '登山宝训 24', artist: '唐崇荣牧师', url: base_url + '登山宝训24_1.mp3', cover: default_cover },
        { name: '登山宝训 25', artist: '唐崇荣牧师', url: base_url + '登山宝训25_1.mp3', cover: default_cover },
        { name: '登山宝训 26', artist: '唐崇荣牧师', url: base_url + '登山宝训26_1.mp3', cover: default_cover },
        { name: '登山宝训 27', artist: '唐崇荣牧师', url: base_url + '登山宝训27_1.mp3', cover: default_cover },
        { name: '登山宝训 28', artist: '唐崇荣牧师', url: base_url + '登山宝训28_1.mp3', cover: default_cover },
        { name: '登山宝训 29', artist: '唐崇荣牧师', url: base_url + '登山宝训29_1.mp3', cover: default_cover },
        { name: '登山宝训 30', artist: '唐崇荣牧师', url: base_url + '登山宝训30_1.mp3', cover: default_cover },
        { name: '登山宝训 31', artist: '唐崇荣牧师', url: base_url + '登山宝训31_1.mp3', cover: default_cover },
        { name: '登山宝训 32', artist: '唐崇荣牧师', url: base_url + '登山宝训32_1.mp3', cover: default_cover },
        { name: '登山宝训 33', artist: '唐崇荣牧师', url: base_url + '登山宝训33_1.mp3', cover: default_cover },
        { name: '登山宝训 34', artist: '唐崇荣牧师', url: base_url + '登山宝训34_1.mp3', cover: default_cover },
        { name: '登山宝训 35', artist: '唐崇荣牧师', url: base_url + '登山宝训35_1.mp3', cover: default_cover },
        { name: '登山宝训 36', artist: '唐崇荣牧师', url: base_url + '登山宝训36_1.mp3', cover: default_cover },
        { name: '登山宝训 37', artist: '唐崇荣牧师', url: base_url + '登山宝训37_1.mp3', cover: default_cover },
        { name: '登山宝训 38', artist: '唐崇荣牧师', url: base_url + '登山宝训38_1.mp3', cover: default_cover }
    ]
});

// === 网络流量智能侦测与弹窗拦截 ===
let hasWarned = false; // 记录是否已经提醒过

ap_dengshan.on('play', function () {
    // 获取当前设备的网络状态
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    // 发现是 cellular（手机移动流量）且没提醒过
    if (connection && connection.type === 'cellular' && !hasWarned) {
        ap_dengshan.pause(); // 瞬间暂停，阻止流量消耗
        
        // 弹出系统级询问框
        const userAgree = confirm("📡 系统检测到您可能正在使用【手机移动数据】。\n\n本系列音频较长（共38集），继续播放可能会消耗较多流量。\n\n是否确认继续播放？（建议在 Wi-Fi 环境下收听）");
        
        if (userAgree) {
            hasWarned = true; // 用户确认后放行
            ap_dengshan.play();
        }
    }
});
</script>
