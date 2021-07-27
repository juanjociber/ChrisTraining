let menu = document.querySelector('#btnMenu');
let menuContent = document.querySelector('.men');
let contador = 1;

menu.addEventListener('click',function(){
    if(contador == 1){
        menuContent.classList.add('menu-active');
        contador = 0;
    }
    else{
        contador = 1;
        menuContent.classList.remove('menu-active');
    }
});
