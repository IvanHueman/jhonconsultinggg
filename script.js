// Lógica del Carrusel Automático
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
    // Quita la clase active del actual
    slides[currentSlide].classList.remove('active');
    
    // Pasa al siguiente o vuelve al inicio
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Añade la clase active al nuevo
    slides[currentSlide].classList.add('active');
}

// Cambiar cada 5 segundos
setInterval(nextSlide, 5000);

// Mantener la lógica anterior del Navbar (opcional)
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});