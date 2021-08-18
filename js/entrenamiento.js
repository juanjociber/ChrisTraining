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


// let video = document.querySelector(".controles");
// video.addEventListener("seeking",
//     function(){
//         alert(this.currentTime)}//courrentTime = tiempo actual
// );

const $btnEntrenamiento = document.querySelector('#btn-entrenamiento')

$btnEntrenamiento.addEventListener('click',function(event){
    console.log(event)
})

window.addEventListener('click',function(e){
    console.log(e.target)
})