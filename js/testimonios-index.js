/*===================================
-> CREANDO TESTIMONIOS:@Christraining
=====================================*/
const testimonios=[
    {   imgTestimonio:'img/persona1.jpg' ,
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'Vania H.F.',
        distrito: 'Los Olivos'},
    {   imgTestimonio:'img/persona2.jpg' ,
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'André H.F.',
        distrito: 'Los Olivos'}
    ]

let testimonioArray = Object.entries(testimonios);

const $containerTestimonio = document.querySelector('.container-sliderTestimonio')
const $sliderDiv = document.createElement('DIV')
const $sliderTestBtnRigth = document.createElement('DIV')
const $sliderTestBtnLeft = document.createElement('DIV')

$sliderTestBtnRigth.classList.add('sliderTestimonio__btn')
$sliderTestBtnRigth.classList.add('sliderTestimonio__btn--rigth')
$sliderTestBtnRigth.id='btnTestimonio-right'
$sliderTestBtnRigth.innerHTML=
`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
    width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bbbbbbe1" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="9 6 15 12 9 18" />
</svg>`
$sliderTestBtnLeft.classList.add('sliderTestimonio__btn')
$sliderTestBtnLeft.classList.add('sliderTestimonio__btn--left')
$sliderTestBtnLeft.id='btnTestimonio-left'
$sliderTestBtnLeft.innerHTML=
` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44"
    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bbbbbbe1" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="15 6 9 12 15 18" />
</svg>`
$sliderDiv.classList.add('sliderTestimonio')
$sliderDiv.id='sliderTestimonio'

$containerTestimonio.appendChild($sliderDiv)
$containerTestimonio.appendChild($sliderTestBtnRigth)
$containerTestimonio.appendChild($sliderTestBtnLeft)

testimonioArray.forEach(function(e){
    // console.log(e[1])
    const $sliderSection = document.createElement('DIV')
    const $imgSlider = document.createElement('IMG')
    const $sliderContenido = document.createElement('DIV')
    const $psliderComentario = document.createElement('P')
    const $psliderNombre = document.createElement('P')
    const $smallDistrito = document.createElement('SMALL')

    $smallDistrito.textContent=e[1].distrito
    $smallDistrito.classList.add('distrito')
    $psliderNombre.textContent=e[1].nombre
    $psliderNombre.classList.add('nombre')
    $psliderComentario.classList.add('comentario')
    $psliderComentario.innerHTML =e[1].comentario
    $sliderSection.classList.add('sliderTestimonio__section')
    $imgSlider.classList.add('sliderTestimonio__img')
    $imgSlider.setAttribute('src',e[1].imgTestimonio)
    $imgSlider.setAttribute('Alt','imagenTestimonio')
    $sliderContenido.classList.add('sliderTestimonio__contenido')
      
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

