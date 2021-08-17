/*===================================
-> CREANDO TESTIMONIOS:@Christraining
=====================================*/
const testimonios=[
    {   imgTestimonio:'img/persona1.jpg' ,
        comentario: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae.`,
        nombre: 'Vania H.F.',
        distrito: 'Los Olivos'},
    {   imgTestimonio:'img/persona2.jpg' ,
        comentario: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae.`,
        nombre: 'André H.F.',
        distrito: 'Los Olivos'}
    ]

let testimonioArray = Object.entries(testimonios);

const $containerTestimonio = document.querySelector('.container-sliderTestimonio')
const $sliderDiv = document.createElement('DIV')
$sliderDiv.classList.add('sliderTestimonio')
$sliderDiv.id='sliderTestimonio'

$containerTestimonio.appendChild($sliderDiv)

testimonioArray.forEach(function(e){
    console.log(e[1])
    const $sliderSection = document.createElement('DIV')
    const $imgSlider = document.createElement('IMG')
    const $sliderContenido = document.createElement('DIV')
    const $psliderComentario = document.createElement('P')
    const $psliderNombre = document.createElement('P')
    const $spanComillasInicio = document.createElement('SPAN')
    const $spanComillasFin = document.createElement('SPAN')
    
    const $smallDistrito = document.createElement('SMALL')

    $smallDistrito.textContent=e[1].distrito
    $smallDistrito.classList.add('distrito')
    $spanComillasInicio.classList.add('comillas')
    $spanComillasInicio.textContent='"'
    $spanComillasFin.classList.add('comillas')
    $spanComillasFin.textContent='"'
    $psliderNombre.textContent=e[1].nombre
    $psliderNombre.classList.add('nombre')
    $psliderComentario.classList.add('comentario')
    $psliderComentario.textContent=e[1].comentario
    $sliderSection.classList.add('sliderTestimonio__section')
    $imgSlider.classList.add('sliderTestimonio__img')
    $imgSlider.setAttribute('src',e[1].imgTestimonio)
    $imgSlider.setAttribute('Alt','imagenTestimonio')
    $sliderContenido.classList.add('sliderTestimonio__contenido')


    $psliderComentario.appendChild($spanComillasInicio)
    // $psliderComentario.append($spanComillasFin)
    
    
    
    $sliderContenido.appendChild($psliderComentario)
    $sliderContenido.appendChild($psliderNombre)
    $sliderContenido.appendChild($smallDistrito)

    
    $sliderSection.appendChild($imgSlider)
    $sliderSection.appendChild($sliderContenido)
    $sliderDiv.appendChild($sliderSection)
});



/**======================================
 * -> EVENTO SLIDER TESTIMONIO
 ========================================*/
const $sliderTestimonio = document.querySelector('#sliderTestimonio');
let $sliderSection = document.querySelectorAll('.sliderTestimonio__section');
let $sliderSectionLast = $sliderSection[$sliderSection.length -1];

const $btnLeft = document.querySelector('#btnTestimonio-left');
const $btnRigth = document.querySelector('#btnTestimonio-right');

$sliderTestimonio.insertAdjacentElement('afterbegin',$sliderSectionLast);

function Next(){
    let $sliderSectionFirst = document.querySelectorAll('.sliderTestimonio__section')[0];
    $sliderTestimonio.style.marginLeft = '-200%';
    $sliderTestimonio.style.transition = 'all 0.5s';
    setTimeout(() => {  
        $sliderTestimonio.style.transition = 'none';
        $sliderTestimonio.insertAdjacentElement('beforeend',$sliderSectionFirst);
        $sliderTestimonio.style.marginLeft = '-100%';
    }, 500);
}

$btnRigth.addEventListener('click',function(){
    Next();
})

function Prev(){
    let $sliderSection = document.querySelectorAll('.sliderTestimonio__section');
    let $sliderSectionLast = $sliderSection[$sliderSection.length -1];

    $sliderTestimonio.style.marginLeft = '0';
    $sliderTestimonio.style.transition = 'all 0.5s';
    setTimeout(() => {  
        $sliderTestimonio.style.transition = 'none';
        $sliderTestimonio.insertAdjacentElement('afterbegin',$sliderSectionLast);
        $sliderTestimonio.style.marginLeft = '-100%';
    }, 500);
}

$btnLeft.addEventListener('click',function(){
    Prev();
})


// setInterval(() => {
//    Next(); 
// }, 10000);
