---
title: "唐崇荣儿童布道会 - 耶稣是谁 🎙️"
date: 2026-05-27
comments: false      # 👈 关闭报错的评论框，保持清爽
---

### 🎙️ 欢迎收听唐崇荣牧师儿童布道会：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<!-- 唐牧师这期布道会专属的播放器 ID -->
<div id="aplayer-tcr-children"></div>

<style>
/* === 咱们精心打磨的终极完美排版 CSS === */
.aplayer { font-size: 16px !important; margin: 20px 0 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important; }
.aplayer .aplayer-list ol li { font-size: 16px !important; height: 44px !important; line-height: 44px !important; }
.aplayer .aplayer-list, .aplayer .aplayer-list ol { height: auto !important; max-height: none !important; }

.aplayer .aplayer-info { height: auto !important; padding-top: 16px !important; padding-bottom: 16px !important; }

.aplayer .aplayer-info .aplayer-music {
    height: auto !important;           
    overflow: visible !important;      
    margin-bottom: 14px !important;    
    padding-bottom: 2px !important;    
}

.aplayer .aplayer-info .aplayer-music .aplayer-title { font-size: 19px !important; font-weight: bold !important; line-height: 1.2 !important; }
.aplayer .aplayer-info .aplayer-music .aplayer-author { font-size: 16px !important; color: #555 !important; line-height: 1.2 !important; }

.aplayer .aplayer-info .aplayer-controller .aplayer-time { font-size: 15px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon { width: 22px !important; height: 22px !important; margin-left: 12px !important; }
.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon svg { width: 22px !important; height: 22px !important; }

.aplayer .aplayer-list { margin-top: 8px !important; }
</style>

<script>
const ap_tcr_children = new APlayer({
    container: document.getElementById('aplayer-tcr-children'), /* 👈 对应上面的专属 ID */
    listFolded: false,
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
</script>
