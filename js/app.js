/**================================================
 -> CONTROL DE MENÚ RESPONSIVE
 * ================================================
 */
document.addEventListener('DOMContentLoaded',()=>{
    MenuResponsive();        
})
function MenuResponsive(){
    let menu = document.querySelector('#btnMenu')
    let menuContent = document.querySelector('.men')
    let enlaceVideo = document.querySelector('section .navegacion li')
    
    console.log(enlaceVideo)
    let contador = 1

    menu.addEventListener('click',function(){
        if(contador == 1){
            menuContent.classList.add('menu-active')
            
            contador = 0
        }
        else{
            contador = 1;
            menuContent.classList.remove('menu-active')
        }
    })
};

/**================================================
 -> CONTROL DE SUB_MENÚ RESPONSIVE
 * ================================================
 */
const icoAngulo = document.querySelector('#icoAngulo')
const subMenu = document.querySelector('.submen')
let mqMax767 = window.matchMedia('(max-width:767px)')
conta = 1    

function mqSubmenu(mqMax767){
    if(mqMax767.matches){
        console.log('movil')
        subMenu.style.display ='none'
        
    }
    else{
        console.log('desktop')
        subMenu.style.display='block'
        
    }
}
mqSubmenu(mqMax767)
mqMax767.addListener(mqSubmenu)

icoAngulo.addEventListener('click',function(){
    if(conta == 1){
        subMenu.style.display='block'
        icoAngulo.setAttribute('transform','rotate(180)')
        conta = 0
    }
    else{
        conta = 1
        subMenu.style.display='none'
        icoAngulo.setAttribute('transform','rotate(0)')
        
    }
})

/*======================================================
 -> TEXTO PARALLAX (ESCRIBE CARACTER POR CARACTER)
 =======================================================*/
function viewAqui(){
   const $click = document.querySelector('#click')
   let printCadena
   const observando= new IntersectionObserver(function(e){
       if(e[0].isIntersecting){
           console.log('Ingreso de evento');
           let escritura = str =>{
                let arrayStr = str.split('');
                let i = 0;
                printCadena = setInterval(function () {
                    if(arrayStr[i] === ''){
                        $click.innerHTML += arrayStr[i];
                        $click.innerHTML += arrayStr[i + 1];
                        i +=2;                        
                    }
                    else{
                        $click.innerHTML += arrayStr[i];
                        i++
                    }
                    if(i=== arrayStr.length){
                        clearInterval(printCadena);
                    }
                },300);
           }
           escritura('Aquí');
       }
       else{
           console.log('Salida de evento')
           clearInterval(printCadena)
           $click.innerHTML= ""
       }
   });
   observando.observe(document.querySelector('#banner'))
};
viewAqui();

/*=================
 -> SLIDER VIDEO
 ==================*/
function cargarVideo(url){
	document.getElementById('sliderVideo').src=url;
}

/*================
-> ARREGLOS:
==================*/
const videos = ['video/video1.mp4','video/video2.mp4','video/video3.mp4']
const imagenes = ['img/imagen1.JPG','img/imagen2.JPG','img/imagen3.JPG']

const $slider = document.querySelector('#slider')
const $ul = document.createElement('UL')
$ul.classList.add('navegacion')
$ul.id ='navegacion'

/*================
-> BUCLE:
==================*/
imagenes.forEach(function(e){ 
    console.log(e)
    const imagen = e
    const $li = document.createElement('LI') 
    const $img = document.createElement('IMG')
    
    $li.dataset.id=e
    $img.setAttribute('src',imagen)
   
    $slider.appendChild($ul)
    $ul.appendChild($li)
    $li.appendChild($img)
})

/*===================================
-> INCLUIR UN CLICK A ELEMENTO 'LI':
=====================================*/
const ul = document.querySelector('#navegacion'); 
const $sliderVideo = document.querySelector('#sliderVideo') 
ul.addEventListener('click', function (event){
    // console.log(event.target)
    var target = event.target; 
    while (target && target.parentNode !== ul){
        target = target.parentNode; 
        if(!target){ 
            return; 
        } 
    }
    if (target.tagName === 'LI'){
        // console.log(target.dataset.id)
        const $id = target.dataset.id
        if($id === 'img/imagen1.JPG'){
            cargarVideo(videos[0])
        }
        else if($id === 'img/imagen2.JPG'){
            cargarVideo(videos[1])
        }
        else if($id === 'img/imagen3.JPG'){
            cargarVideo(videos[2])
        }
        else{
            console.log('no cambio')
        }
    }
});

/*=====================================
-> SLIDERS: SIGUENOS EN CHRISTRAINING
=======================================*/



