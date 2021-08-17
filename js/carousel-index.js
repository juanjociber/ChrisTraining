/*===================================
-> CREANDO CAROUSEL:@Christraining
=====================================*/
const imagenesCarousel = [{image:'img/1.jpg',perfil:'perfil1'},
                          {image:'img/2.jpg',perfil:'perfil2'},
                          {image:'img/3.jpg',perfil:'perfil3'},
                          {image:'img/4.jpg',perfil:'perfil4'},
                          {image:'img/5.jpg',perfil:'perfil5'},
                          {image:'img/3.jpg',perfil:'perfil6'},
                          {image:'img/5.jpg',perfil:'perfil7'},
                          {image:'img/4.jpg',perfil:'perfil8'}]

let imgArray = Object.entries(imagenesCarousel);

// const $Carousel__lista = document.querySelector('.carousel__lista')
// const $fragmentCarousel = document.createDocumentFragment();

// imgArray.forEach(function(event){
//     // console.log(event[1].image)
//     const $liCarousel = document.createElement("LI")
//     const $imgCarousel = document.createElement("IMG")
//     const $pCarousel = document.createElement('P')

//     $liCarousel.classList.add("carousel__elemento")
//     $imgCarousel.setAttribute("src",event[1].image)
//     $imgCarousel.setAttribute("Alt","imagen")
//     $pCarousel.textContent=event[1].perfil
//     $pCarousel.classList.add('center-aling')

//     $liCarousel.appendChild($imgCarousel)
//     $liCarousel.appendChild($pCarousel)
    
//     $fragmentCarousel.appendChild($liCarousel)
//     $Carousel__lista.appendChild($fragmentCarousel)
// });

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