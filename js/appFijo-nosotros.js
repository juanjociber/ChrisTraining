document.addEventListener('DOMContentLoaded', function() {
    navegacionFijaNosotros();
});
function navegacionFijaNosotros() {
    const barra = document.querySelector('.nav');
    const $search = document.querySelector('#buscador')
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
            $search.classList.remove('fijoBuscador')
        } else {
            barra.classList.add('fijo');
            $search.classList.add('fijoBuscador')
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('.fijo-nosotros'));
};