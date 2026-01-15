const playBtn = document.getElementById('play-button');
const music = document.getElementById('background-music');
const cards = document.querySelectorAll('.card');

// Controlar la música (los navegadores bloquean el auto-play)
playBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playBtn.innerText = "Pausar Música ⏸️";
    } else {
        music.pause();
        playBtn.innerText = "Seguir Música ▶️";
    }
});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
