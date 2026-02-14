
let bgMusic = null;
let musicStarted = false;

function initAudio() {
    bgMusic = new Audio('./assets/audio/got-theme.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.3; 
}

function startMusic() {
    if (!musicStarted && bgMusic) {
        bgMusic.play().catch(err => {
            console.log('Erro ao tocar música:', err);
        });
        musicStarted = true;
    }
}

function toggleMusic() {
    if (!bgMusic) return;
    
    if (bgMusic.paused) {
        bgMusic.play();
        return true;
    } else {
        bgMusic.pause();
        return false;
    }
}

window.gameOfThronesAudio = {
    init: initAudio,
    start: startMusic,
    toggle: toggleMusic
};