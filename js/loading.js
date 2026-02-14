
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const enterButton = document.getElementById('enter-westeros');
    const mainContent = document.querySelector('body > *:not(#loading-screen)');
    
    window.gameOfThronesAudio.init();
    
    let progress = 0;
    const progressBar = document.querySelector('.loading-progress-fill');
    const loadingText = document.querySelector('.loading-text');
    
    const messages = [
        'Forjando espadas...',
        'Invocando dragões...',
        'Preparando o Trono de Ferro...',
        'O inverno está chegando...',
        'Aumente o volume para uma experiência imersiva!'
    ];
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            enterButton.classList.add('visible');
            loadingText.textContent = messages[4];
        } else {
            const messageIndex = Math.floor((progress / 100) * (messages.length - 1));
            loadingText.textContent = messages[messageIndex];
        }
        progressBar.style.width = progress + '%';
    }, 300);
    

    enterButton.addEventListener('click', () => {
        
        window.gameOfThronesAudio.start();
        
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 1000);
    });
});