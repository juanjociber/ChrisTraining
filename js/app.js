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
    // let enlaceVideo = document.querySelector('section .navegacion li')
    // console.log(enlaceVideo)
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
        // console.log('movil')
        subMenu.style.display ='none'
        
    }
    else{
        // console.log('desktop')
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

/**=======================================================
    *                BOTON DESPLAZA ARRIBA
=========================================================*/
    $(document).ready(function(){
        $('.ir-arriba').click(function(){
            $('body,html').animate({
                scrollTop: '0px'
            },300);
        })
        $(window).scroll(function(){
            if($(this).scrollTop() > 0 ){
                $('.ir-arriba').slideDown(300);
            }
            else{
                $('.ir-arriba').slideUp(500);
            }
        })
    });
 
/**=======================================================
    *              ANIMACIONES A ELEMENTOS
=========================================================*/
// let mqMax991 = window.matchMedia('(max-width:991px)')
// function animaciones(mqMax992){
//     if(mqMax991.matches){
//         console.log('movil')
//         window.sr = ScrollReveal();
//             sr.reveal('.scroll-banner',{
//                 duration : 4000,
//                 origin: 'bottom',
//                 distance: '-100px'
//             });
//             sr.reveal('.scroll-plan',{
//                 duration : 2000,
//                 origin: 'bottom',
//                 distance: '400px'
//             });
//     }
//     else{
//         window.sr = ScrollReveal();
//             sr.reveal('.scroll-menu',{
//                 duration : 4000,
//                 origin: 'bottom',
//                 distance: '-100px'
//             });
//             sr.reveal('.scroll-banner',{
//                 duration : 4000,
//                 origin: 'bottom',
//                 distance: '-100px'
//             });
//     }
// }
// animaciones(mqMax991)
// mqMax991.addListener(animaciones);

/**=======================================================
    *              ANIMACIONES A ELEMENTOS
=========================================================*/
let $animado = document.querySelectorAll('.animado')
function mostrarScroll(){
    let $scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < $animado.length; i ++){
        let $alturaAnimado = $animado[i].offsetTop;
        if($alturaAnimado - 400 < $scrollTop){
            $animado[i].style.opacity = 1;
            $animado[i].classList.add('mostrarArriba');
       }
    }   
}
window.addEventListener('scroll',mostrarScroll);
