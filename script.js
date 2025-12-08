// --- 1. Animación de "PERDÓN" letra por letra (4 segundos total) ---

const perdonText = "PERDÓN";
const perdonContainer = document.getElementById('perdon-container');
const totalDuration = 4; // Segundos

perdonText.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.classList.add('perdon-letter');
    
    // Calcula el retraso de aparición: 4s / 6 letras = 0.66s por letra
    const delay = (totalDuration / perdonText.length) * index;
    span.style.animationDelay = `${delay}s`; 
    
    perdonContainer.appendChild(span);
});


// --- 2. Generación del Fondo Estrellado y Flotante ---

const skyContainer = document.getElementById('starry-sky-container');
// Símbolos: Estrellas, Corazones, Flores
const starSymbols = ['⭐', '💖', '✨', '🌸', '❤️', '🌟']; 

function createStarParticle() {
    const particle = document.createElement('div');
    particle.classList.add('falling-particle');
    
    // Asigna un símbolo aleatorio
    particle.innerHTML = starSymbols[Math.floor(Math.random() * starSymbols.length)];
    
    // Posición y movimiento aleatorios
    const startX = Math.random() * 100; 
    const endX = startX + (Math.random() - 0.5) * 50; 
    
    particle.style.setProperty('--x-start', `${startX}vw`);
    particle.style.setProperty('--x-end', `${endX}vw`);
    
    // Velocidad y tamaño aleatorios
    particle.style.fontSize = `${Math.random() * 20 + 15}px`; 
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`; 
    particle.style.animationDelay = `-${Math.random() * 10}s`; 
    
    skyContainer.appendChild(particle);

    // Limpiar el DOM
    setTimeout(() => {
        particle.remove();
    }, 20000); 
}

// Genera una nueva partícula cada 150 milisegundos
setInterval(createStarParticle, 150);


// --- 3. Mostrar Mensaje al Tocar/Hacer Clic ---

const body = document.body;
const popup = document.getElementById('popup-message');

body.addEventListener('click', function(event) {
    // Posiciona el mensaje exactamente donde se hizo clic
    popup.style.left = `${event.clientX}px`;
    popup.style.top = `${event.clientY}px`;
    
    // Muestra el mensaje
    popup.classList.add('show-popup');

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
        popup.classList.remove('show-popup');
    }, 2000);
});
