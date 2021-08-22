function viewSport100(){
    const $mensaje2 = document.querySelector('#sport100')
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
                         $mensaje2.innerHTML += arrayStr[i];
                         $mensaje2.innerHTML += arrayStr[i + 1];
                         i +=2;                        
                     }
                     else{
                         $mensaje2.innerHTML += arrayStr[i];
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
            $mensaje2.innerHTML= ""            
        }
    });
    observando.observe(document.querySelector('#objetivo'))
 };
 viewSport100();