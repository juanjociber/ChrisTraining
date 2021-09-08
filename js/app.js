
/**================================================
 -> CONTROL DE MENÚ RESPONSIVE
 * ================================================
 */
document.addEventListener('DOMContentLoaded',()=>{
    MenuResponsive();        
})
function MenuResponsive(){
    let menu = document.querySelector('#btnMenu')
    menuContent = document.querySelector('.men')
    cerrar = document.querySelector('#btn-cerrar')
    banner = document.querySelector('#banner')
    nav = document.querySelector('.nav')
    contador = 1
    menu.addEventListener('click',function(){
        if(contador == 1){
            menuContent.classList.add('menu-active')
            menuContent.style='transition: all .6s'
            cerrar.style='transform: translateX(0%); transition: all .5s'
            cerrar.style.background= 'rgba(0, 0, 0, 0.5)'
            cerrar.style.zIndex= '1'
            contador = 0
        }
        else{
            contador = 1
            menuContent.classList.remove('menu-active')
            
        }
    })
};
window.addEventListener('click',function(e){
    // console.log(e.target.className)
    if(e.target.className ==='bx bx-x'){
        console.log('diste click')
        contador = 1;
        nav.style.background= '#FF3753'
        menuContent.classList.remove('menu-active')
        cerrar.style='transform: translateX(100%); transition: all .5s'
    }
});

/**================================================
 -> CONTROL DE SUB_MENÚ RESPONSIVE
 * ================================================
 */
const icoAngulo = document.querySelector('#icoAngulo')
const subMenu = document.querySelector('.submen')
const btnEntrenamiento = document.querySelector('#men--mod')
let mqMax767 = window.matchMedia('(max-width:767px)')

conta = 1    

function mqSubmenu(mqMax767){
    if(mqMax767.matches){
        subMenu.style.display ='none'
    }
    else{
        subMenu.style.display='block'
    }
}
mqSubmenu(mqMax767)
mqMax767.addListener(mqSubmenu)

btnEntrenamiento.addEventListener('click',function(e){
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
    *              ANIMACIONES A ELEMENTOS
=========================================================*/
let $animado = document.querySelectorAll('.animado')
function mostrarScroll(){
    let $scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < $animado.length; i ++){
        let $alturaAnimado = $animado[i].offsetTop;
        if($alturaAnimado - 700 < $scrollTop){
            $animado[i].style.opacity = 1;
            $animado[i].classList.add('mostrarAnimadoTop');
       }
    }   
}
window.addEventListener('scroll',mostrarScroll);

/*======================================================
 -> TEXTO CLICK (ESCRIBE CARACTER POR CARACTER)
 =======================================================*/
function viewAqui(){
   const $click = document.querySelector('#click')
   let printCadena
   const observando= new IntersectionObserver(function(e){
       if(e[0].isIntersecting){
        //    console.log('Ingreso de evento');
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
        //    console.log('Salida de evento')
           clearInterval(printCadena)
           $click.innerHTML= ""
       }
   });
   observando.observe(document.querySelector('#banner'))
};
viewAqui();

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

/**==============================================
 * AGREGAR MODAL EN EL DOM
 ================================================*/
// añadir un objeto de atributos a un elemento
const addAttributes = (element,attrObj)=>{
	for(let attr in attrObj){
		if(attrObj.hasOwnProperty(attr))
		element.setAttribute(attr,attrObj[attr])
	}
};
//crear elementos con atributos e hijos
const createCustomElement = (element,attributes,children) =>{
	let customElement = document.createElement(element);
	if(children !== undefined) children.forEach(el => {
		if(el.nodeType){
			if(el.nodeType === 1 || el.nodeType === 11)
			customElement.appendChild(el)
		}else{
			customElement.innerHTML += el;
		}
	});
	addAttributes(customElement,attributes);
	return customElement;
};

//imprimir modal
const printModal = content =>{
	//crear contenedor interno
	const modalContentEl = createCustomElement('div',{
		id: 'ed-modal-content',
		class: 'ed-modal-content'
	},[content]);
	//crear contenedor principal
	const modalContainerEl = createCustomElement('div',{
		id: 'ed-modal-container',
		class : 'ed-modal-container'
	},[modalContentEl]);

	//imprimir el modal
	document.body.appendChild(modalContainerEl)

	//remover el modal
	const removeModal = () =>document.body.removeChild(modalContainerEl);

	modalContainerEl.addEventListener('click',e => {
		if(e.target === modalContainerEl)
			removeModal();
	})
}
printModal(``) //-> Muestra modal cuando carga la página

// document.querySelector('#show-modal').addEventListener('click',()=>{
// 	printModal(`<article class="article-container">
// 	<ul class="lista3">
// 		<li class="exitos">Acción Cívica (Resolución N°003 del 29JUN2002).</li>
// 		<li class="exitos">Esfuerzo Profesional (Resolución N°068 del 21JUN2012).</li>
// 		<li class="exitos">Esfuerzo Profesional (Resolución N°029 del 29JUL2015).</li>
// 		<li class="exitos">Condecoración en el grado de "CABALLERO” Acta N°27-2018-COM/PNP.</li>
// 	</ul>
// </article>`)
// })


/**===================
 * countdown
 =====================*/
//  const getRemainTime = fechaLimite =>{
//     let fechaActual = new Date(),
//         tiempo = (new Date(fechaLimite) - fechaActual + 1000) / 1000,
//         segundos = ('0'+ Math.floor(tiempo % 60)).slice(-2),
//         minutos = ('0'+ Math.floor(tiempo / 60 % 60)).slice(-2),
//         horas = ('0'+ Math.floor(tiempo / 3600 % 24)).slice(-2),
//         dias = Math.floor(tiempo / (3600 * 24));
//     return{
//         tiempo,
//         segundos,
//         minutos,
//         horas,
//         dias
//     }
// };

// const countdown = (fechaLimite,elem,finalMessage)=>{
//     const el = document.getElementById(elem);
//     const timerUpdate = setInterval(()=>{
//         let t = getRemainTime(fechaLimite);
//         el.innerHTML=`${t.dias} d ${t.horas} h ${t.minutos} m ${t.segundos} s`;
//         if(t.tiempo <= 1){
//             clearInterval(timerUpdate)
//             el.innerHTML = finalMessage;
//         }
//     },1000)
// }
// console.log(countdown)
// countdown('Aug 27 2021 09:42:18 GMT-0500','clock','Feliz 2020')


/**==================================
->  CONTADOR DE TIEMPO
 ====================================*/
// let horas = 7,
//     minutos = 0,
//     segundos = 0;
//     //Definiendo y ejecutando segundos
//     function cargarSegundos(){
//         let txtSegundos;
//         if(segundos < 0){
//             segundos = 59;
//         }
//         //Mostrar segundos en pantalla
//         if(segundos < 10){
//             txtSegundos = `0${segundos}`;
//         }else{
//             txtSegundos = segundos;
//         }
//         document.querySelector('#segundos').innerHTML = txtSegundos+"s";
//         segundos--;

//         cargarMinutos(segundos)
//     }
//     //Definiendo y ejecutando los minutos
//     function cargarMinutos(segundos){
//         let txtMinutos;
//         if(segundos == -1 && minutos !== 0){
//             setTimeout(()=>{
//                 minutos--;
//             },500)
//         }else if(segundos == -1 && minutos == 0){
//             setTimeout(()=>{
//                 minutos = 59;
//             },500)
//         }
//         //Mostrar minutos en pantalla
//         if(minutos < 10){
//             txtMinutos = `0${minutos}`;
//         }else{
//             txtMinutos = minutos;
//         }
//         document.querySelector('#minutos').innerHTML = txtMinutos+"m"
//         cargarHoras(segundos,minutos)
//     }
//     //Definiendo y ejecutamos las horas
//     function cargarHoras(segundos,minutos){
//         let txtHoras;
//         if(segundos == -1 && minutos == 0 && horas !==0){
//             setTimeout(()=>{
//                 horas--;
//             },500)
//         }else if(segundos == -1 && minutos == 0 && horas == 0){
//             setTimeout(() => {
//                 horas = 2;
//             }, 500);
//         }
//         //Mostrar horas en pantalla
//         if(horas < 10){
//             txtHoras = `0${horas}`;
//         }else{
//             txtHoras = horas;
//         }
//         document.querySelector('#horas').innerHTML = txtHoras+"h";
//     }
//     //Ejecutamos cada segundo
//     setInterval(cargarSegundos, 1000);



