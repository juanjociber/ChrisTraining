/*======================================================
 -> TEXTO CLICK (ESCRIBE CARACTER POR CARACTER)
 =======================================================*/
 function viewMensaje(){
    const $mensaje = document.querySelector('#mensaje')
    let printCadena
    const observando= new IntersectionObserver(function(e){
        if(e[0].isIntersecting){
            console.log(e);
            let escritura = str =>{
                 let arrayStr = str.split('');
                 let i = 0;
                 printCadena = setInterval(function () {
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
                         clearInterval(printCadena);
                     }
                 },100);
            }
            escritura('El plan move on es para tí...');
        }
        else{
            console.log(e)
            clearInterval(printCadena)
            $mensaje.innerHTML= ""            
        }
    });
    observando.observe(document.querySelector('#objetivo'))
 };
 viewMensaje();

/*======================================================
 -> DESGLOZA AL DAR CLICK EN BTN
 =======================================================*/
const $btn = document.querySelector('#btn-entrenamiento')
const $contenedor = document.querySelector('.contenedor-modalidades')
$btn.addEventListener('click',function(){
    $contenedor.classList.toggle('activado')
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

