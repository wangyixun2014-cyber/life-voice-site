<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<div id="aplayer-yilimaizi"></div>

<script>
const ap = new APlayer({
    container: document.getElementById('aplayer-yilimaizi'),
    audio: [
        {
            name: '一粒麥子',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/一粒麥子.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '一路靠著祂',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/一路靠著祂.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        },
        {
            name: '弟兄和睦同居',
            artist: '小羊诗歌',
            url: 'https://audio.wyxwym.com/praise-songs/yilimaizi/弟兄和睦同居.mp3',
            cover: 'https://images.unsplash.com/photo-1544427928-c49cddee6eac?w=300'
        }
        // 后续的歌可以照猫画虎一条条往下加...
    ]
});
</script>
