/*===================================
-> CREANDO CAROUSEL:@Christraining
=====================================*/
const imagenesCarousel = [{image:'img/1.jpg',perfil:'perfil 1'},
                          {image:'img/2.jpg',perfil:'perfil 2'},
                          {image:'img/3.jpg',perfil:'perfil 3'},
                          {image:'img/4.jpg',perfil:'perfil 4'},
                          {image:'img/5.jpg',perfil:'perfil 5'},
                          {image:'img/3.jpg',perfil:'perfil 6'},
                          {image:'img/5.jpg',perfil:'perfil 7'},
                          {image:'img/4.jpg',perfil:'perfil 8'}]

let imgArray = Object.entries(imagenesCarousel);

const $ulCarusel = document.querySelector('.carusel-contenedor')
const $divCarusel = document.createElement('div')
const $divRigth = document.createElement('div')
const $divLeft = document.createElement('div')
$divRigth.classList.add('carusel__btn')
$divRigth.classList.add('carusel__btn--rigth')
$divRigth.id='btnCarusel-right'
$divRigth.innerHTML= 
`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
    width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="9 6 15 12 9 18" />
</svg>`
$divLeft.classList.add('carusel__btn')
$divLeft.classList.add('carusel__btn--left')
$divLeft.id='btnCarusel-left'
$divLeft.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44"
    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="15 6 9 12 15 18" />
</svg>`
$divCarusel.classList.add('caruseles')
$divCarusel.id='caruseles'
$ulCarusel.appendChild($divCarusel);

imgArray.forEach(function (e) {
    // console.log(e[1])
    const $liCarusel = document.createElement('LI')
    const $imgCarusel = document.createElement('IMG')
    const $pCarusel = document.createElement('P')

    $liCarusel.classList.add('carusel')
    $imgCarusel.setAttribute('src',e[1].image)
    $imgCarusel.setAttribute('Alt','imagen')
    $pCarusel.innerHTML=e[1].perfil
        
    $liCarusel.appendChild($imgCarusel)
    $liCarusel.appendChild($pCarusel)
    $divCarusel.appendChild($liCarusel)
});

$divCarusel.appendChild($divRigth)
$divCarusel.appendChild($divLeft)


/**===========================
 * -> EVENTO DEL CARUSEL
 =============================*/
const $caruseles = document.querySelector('#caruseles');
let $carusel = document.querySelectorAll('.carusel');
let $caruselLast = $carusel[$carusel.length - 1];

const $btn_Left = document.querySelector('#btnCarusel-left');
const $btn_Rigth = document.querySelector('#btnCarusel-right');

dispositivo576 = ()=> window.innerWidth >=576; 

$caruseles.insertAdjacentElement('afterbegin',$caruselLast);

function siguiente(){
    let $caruselFirst = document.querySelectorAll('.carusel')[0];
    $caruseles.style.marginLeft = '-100%';
    $caruseles.style.transition ='all 0.5s';
    setTimeout(() => {
        $caruseles.style.transition = 'none';
        $caruseles.insertAdjacentElement('beforeend',$caruselFirst);
        $caruseles.style.marginLeft = '-100%';
    }, 500);
}
$btn_Rigth.addEventListener('click',function(){
    siguiente();
})

function atras(){
    let $carusel = document.querySelectorAll('.carusel');
    let $caruselLast = $carusel[$carusel.length - 1];

    $caruseles.style.marginLeft = '0';
    $caruseles.style.transition ='all 0.5s';
    setTimeout(() => {
        $caruseles.style.transition = 'none';
        $caruseles.insertAdjacentElement('afterbegin',$caruselLast);
        $caruseles.style.marginLeft = '-100%';
    }, 500);
}
$btn_Left.addEventListener('click',function(){
    atras();
})