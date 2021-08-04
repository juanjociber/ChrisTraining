/**=======================================================
 *              NAVEGACIÓN ESTÁTICA
 =========================================================*/
 document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
});
function navegacionFija() {
    const barra1 = document.querySelector('#nav');
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra1.classList.remove('fijo');
        } else {
            barra1.classList.add('fijo');
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('#fijo'));
};



