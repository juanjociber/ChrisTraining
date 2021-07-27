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
