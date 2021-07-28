/**================================================
 * CONTROL DE MENÚ RESPONSIVE
 * ================================================
 */
document.addEventListener('DOMContentLoaded',()=>{
    MenuResponsive();        
})
function MenuResponsive(){
    let menu = document.querySelector('#btnMenu')
    let menuContent = document.querySelector('.men')
    let $body = document.querySelector('body')
    let contador = 1

    menu.addEventListener('click',function(){
        if(contador == 1){
            menuContent.classList.add('menu-active')
            $body.style.zIndex = '100'
            $body.style.backgroundColor = '#00000050'
            contador = 0
        }
        else{
            contador = 1;
            $body.style.zIndex = '0'
            $body.style.backgroundColor = 'unset'
            menuContent.classList.remove('menu-active')
        }
    })
};

/**================================================
 * CONTROL DE SUB_MENÚ RESPONSIVE
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

icoAngulo.addEventListener('click',function(e){
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

/**=======================================================
 *   TEXTO PARALLAX (ESCRIBE CARACTER POR CARACTER)
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