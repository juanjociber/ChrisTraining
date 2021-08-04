document.addEventListener('DOMContentLoaded', function() {
    navegacionFijaNosotros();
});
function navegacionFijaNosotros() {
    const barra = document.querySelector('.nav');
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('.fijo-nosotros'));
};