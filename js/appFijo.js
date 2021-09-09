/**=======================================================
 *              NAVEGACIÓN ESTÁTICA
 =========================================================*/
 document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();

});
function navegacionFija() {
    const barra1 = document.querySelector('#nav');
    const $search = document.querySelector('#buscador')
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            console.log(barra1)
            console.log($search)
            barra1.classList.remove('fijo')
            $search.classList.remove('fijoBuscador')
        } else {
            barra1.classList.add('fijo')
            $search.classList.add('fijoBuscador')
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('#fijo'));
};




