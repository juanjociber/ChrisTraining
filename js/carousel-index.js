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

const $Carousel__lista = document.querySelector('.carousel__lista')
const $fragmentCarousel = document.createDocumentFragment();

imgArray.forEach(function(event){
    // console.log(event[1].image)
    const $liCarousel = document.createElement("LI")
    const $imgCarousel = document.createElement("IMG")
    const $pCarousel = document.createElement('P')

    $liCarousel.classList.add("carousel__elemento")
    $imgCarousel.setAttribute("src",event[1].image)
    $imgCarousel.setAttribute("Alt","imagen")
    $pCarousel.textContent=event[1].perfil
    $pCarousel.classList.add('center-aling')

    $liCarousel.appendChild($imgCarousel)
    $liCarousel.appendChild($pCarousel)
    
    $fragmentCarousel.appendChild($liCarousel)
    $Carousel__lista.appendChild($fragmentCarousel)
});