document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const cards = document.querySelectorAll('.card');

    // Función para iniciar música al primer clic en cualquier parte de la web
    const iniciarMusica = () => {
        music.play().catch(e => console.log("Audio esperando interacción..."));
        // Una vez que inicia, quitamos este evento para que no se repita
        document.removeEventListener('click', iniciarMusica);
    };
    
    document.addEventListener('click', iniciarMusica);

    // Lógica para girar las cartas al hacer clic
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});
