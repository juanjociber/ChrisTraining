/*======================================================
 -> TEXTO CLICK (ESCRIBE CARACTER POR CARACTER)
 =======================================================*/
 function viewMensaje(){
    const $mensaje = document.querySelector('#mensaje')
    let cadena
    const observando= new IntersectionObserver(function(e){
        console.log(e)
        if(e[0].isIntersecting){
            console.log(e);
            let escritura = str =>{
                 let arrayStr = str.split('');
                 let i = 0;
                 cadena = setInterval(function () {
                     if(arrayStr[i] === ''){
                         $mensaje.innerHTML += arrayStr[i];
                         $mensaje.innerHTML += arrayStr[i + 1];
                         i +=2;                        
                     }
                     else{
                         $mensaje.innerHTML += arrayStr[i];
                         i++
                     }
                     if(i=== arrayStr.length){
                         clearInterval(cadena);
                     }
                 },100);
            }
            escritura('El plan move on es para tí...');
        }
        else{
            console.log(e)
            clearInterval(cadena)
            $mensaje.innerHTML= ""            
        }
    });
    observando.observe(document.querySelector('#objetivo'))
 };
 viewMensaje();

 function viewSport100(){
    const $mensaje = document.querySelector('#sport100')
    let cadena
    const observando= new IntersectionObserver(function(e){
        console.log(e)
        if(e[0].isIntersecting){
            console.log(e);
            let escritura = str =>{
                 let arrayStr = str.split('');
                 let i = 0;
                 cadena = setInterval(function () {
                     if(arrayStr[i] === ''){
                         $mensaje.innerHTML += arrayStr[i];
                         $mensaje.innerHTML += arrayStr[i + 1];
                         i +=2;                        
                     }
                     else{
                         $mensaje.innerHTML += arrayStr[i];
                         i++
                     }
                     if(i=== arrayStr.length){
                         clearInterval(cadena);
                     }
                 },100);
            }
            escritura('El plan deporte 100 es para tí...');
        }
        else{
            console.log(e)
            clearInterval(cadena)
            $mensaje.innerHTML= ""            
        }
    });
    observando.observe(document.querySelector('#objetivo'))
 };
 viewSport100();

/*======================================================
 -> DESGLOZA AL DAR CLICK EN BTN
 =======================================================*/
const $btn = document.querySelector('#btn-entrenamiento')
const $contenedor = document.querySelector('.contenedor-modalidades')
cuenta = 1
$btn.addEventListener('click',function(){
    if(cuenta==1){
        $contenedor.classList.add('activado')
        $btn.innerHTML='Dar "Click" para Cerrar'
        cuenta = 0; 
    }
    else{
        cuenta = 1
        $contenedor.classList.remove('activado')
        $btn.innerHTML='Quiero entrenar mi salud con move on'
    }
})
/*======================================================
 -> EVENTO ACORDEÓN EN MODALIDADES
 =======================================================*/
let btnItems = document.querySelectorAll(".item .btn-item");
for(let i = 0 ; i < btnItems.length; i++ ){
  console.log(i);
  btnItems[i].addEventListener("click",function(e){
    let btn = e.target;
    if(btn.className == "btn-item active"){
        removeClass()
    }
    else{
        removeClass();
        btn.classList.add("active");
    }
  })
};
//Funciones para que solo se muestre una selección y las demás se oculten 
function removeClass(){
    for(let i = 0 ; i < btnItems.length; i++){
        btnItems[i].classList.remove("active");
    }
};



