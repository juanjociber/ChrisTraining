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


// /**=======================================================
//  *                  EVENTO DE FORMULARIO
//  =========================================================*/
//  window.addEventListener('scroll',function(ev){
//     let animando = document.querySelector('.animate__animated  .animate__zoomIn')
//     let posicionObjeto = animando.getBoundingClientRect().top;
//     // console.log(posicionObjeto)
//     let tamañoPantalla = window.innerHeight/3;
//     if(posicionObjeto < tamañoPantalla){
//         animando.style.opacity = 1;
//     }

// })