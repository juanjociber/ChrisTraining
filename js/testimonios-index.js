/*===================================
-> CREANDO TESTIMONIOS:@Christraining
=====================================*/
const testimonios=[
    {   imgTestimonio:'img/persona1.jpg' ,
        comentario: `"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae".`,
        nombre: 'Vania H.F.',
        distrito: 'Los Olivos'},
    {   imgTestimonio:'img/persona2.jpg' ,
        comentario: `"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae".`,
        nombre: 'Andre H.F.',
        distrito: 'Los Olivos'}
    ]

let testimonioArray = Object.entries(testimonios);

const $swiper_wrapper = document.querySelector('.swiper-wrapper')
const $fragmetTestimonios = document.createDocumentFragment();

testimonioArray.forEach(function(eve){
    // console.log(eve[1])
    const $swiper_slide = document.createElement('DIV')
    $swiper_slide.classList.add('swiper-slide')

    const $figureTestimonio = document.createElement('FIGURE')
    $figureTestimonio.classList.add('figure-testimonio')
    $figureTestimonio.classList.add('swiper-slide')

    const $imgTestimonio = document.createElement('IMG')
    $imgTestimonio.classList.add('figure-testimonio__imagen')
    $imgTestimonio.setAttribute('src',eve[1].imgTestimonio)
    $imgTestimonio.setAttribute('Alt','imagen-testimonio')
    
    const $divTestimonio = document.createElement('DIV')
    $divTestimonio.classList.add('contenido-figure')
    
    const $blockquote = document.createElement('BLOCKQUOTE')
    
    const $pTestimonio = document.createElement('P')
    $pTestimonio.textContent= eve[1].comentario 
    $pTestimonio.classList.add('blockquote-texto')
    
    const $figcaptionTestimonio = document.createElement('FIGCAPTION')
    $figcaptionTestimonio.classList.add('figcaption-testimonio')
    
    const $ftNombre =document.createElement('DIV')
    $ftNombre.textContent=eve[1].nombre
    $ftNombre.classList.add('ft-nombre')
    
    const $ftDistrito =document.createElement('DIV')
    $ftDistrito.textContent = eve[1].distrito
    $ftDistrito.classList.add('ft-distrito')

    /**==== Agregando al DOM =====*/
    $figcaptionTestimonio.appendChild($ftNombre)
    $figcaptionTestimonio.appendChild($ftDistrito)

    $blockquote.appendChild($pTestimonio)
    $divTestimonio.appendChild($blockquote)

    $divTestimonio.appendChild($figcaptionTestimonio)

    $figureTestimonio.appendChild($imgTestimonio)
    $figureTestimonio.appendChild($divTestimonio)
    
    $swiper_slide.appendChild($figureTestimonio)
    $fragmetTestimonios.appendChild($swiper_slide)
    $swiper_wrapper.appendChild($fragmetTestimonios)
});